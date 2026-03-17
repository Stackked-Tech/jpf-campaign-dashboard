import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { queryAll } from "@/lib/salesforce";
import { generateInvoicePdf, type InvoiceData } from "@/lib/pdf/generate-invoice";

const resend = new Resend(process.env.RESEND_API_KEY);

interface PaymentRecord {
  Id: string;
  npe01__Payment_Amount__c: number | null;
  npe01__Scheduled_Date__c: string | null;
  Payment_Link__c: string | null;
  npe01__Opportunity__r: {
    Id: string;
    Name: string;
    Amount: number | null;
    Next_payment_link__c: string | null;
    Gift_Type__c: string | null;
    Campaign: { Name: string } | null;
    Account: { Name: string } | null;
    npsp__Primary_Contact__r: {
      Name: string;
      Email: string | null;
      Account: { Name: string } | null;
    } | null;
  };
}

interface UnpaidSum {
  npe01__Opportunity__c: string;
  totalUnpaid: number;
}

interface PastDuePayment {
  Id: string;
  npe01__Payment_Amount__c: number | null;
}

/** Ensure a link value is a full URL; return null if empty/invalid. */
function toUrl(value: string | null | undefined): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export async function POST(request: NextRequest) {
  try {
    const { paymentId } = await request.json();

    if (!paymentId || typeof paymentId !== "string") {
      return NextResponse.json({ error: "paymentId is required" }, { status: 400 });
    }

    // Fetch the specific payment with opportunity details
    const payments = await queryAll<PaymentRecord>(`
      SELECT Id, npe01__Payment_Amount__c, npe01__Scheduled_Date__c, Payment_Link__c,
             npe01__Opportunity__r.Id,
             npe01__Opportunity__r.Name,
             npe01__Opportunity__r.Amount,
             npe01__Opportunity__r.Next_payment_link__c,
             npe01__Opportunity__r.Gift_Type__c,
             npe01__Opportunity__r.Campaign.Name,
             npe01__Opportunity__r.Account.Name,
             npe01__Opportunity__r.npsp__Primary_Contact__r.Name,
             npe01__Opportunity__r.npsp__Primary_Contact__r.Email,
             npe01__Opportunity__r.npsp__Primary_Contact__r.Account.Name
      FROM npe01__OppPayment__c
      WHERE Id = '${paymentId}'
      LIMIT 1
    `);

    if (payments.length === 0) {
      return NextResponse.json({ error: "Payment not found" }, { status: 404 });
    }

    const payment = payments[0];
    const opp = payment.npe01__Opportunity__r;
    const contact = opp.npsp__Primary_Contact__r;

    if (!contact?.Email) {
      return NextResponse.json(
        { error: "No email address found for the primary contact" },
        { status: 400 }
      );
    }

    // Get total unpaid balance for this opportunity (to compute amount paid to date)
    const balanceResult = await queryAll<UnpaidSum>(`
      SELECT npe01__Opportunity__c, SUM(npe01__Payment_Amount__c) totalUnpaid
      FROM npe01__OppPayment__c
      WHERE npe01__Opportunity__c = '${opp.Id}'
        AND npe01__Paid__c = false
      GROUP BY npe01__Opportunity__c
    `);

    const totalUnpaid = balanceResult.length > 0 ? balanceResult[0].totalUnpaid : 0;
    const pledgeAmount = opp.Amount ?? 0;
    const amountPaidToDate = pledgeAmount - totalUnpaid;

    // Get past due payments (other unpaid payments scheduled before today)
    const today = new Date().toISOString().split("T")[0];
    const pastDuePayments = await queryAll<PastDuePayment>(`
      SELECT Id, npe01__Payment_Amount__c
      FROM npe01__OppPayment__c
      WHERE npe01__Opportunity__c = '${opp.Id}'
        AND npe01__Paid__c = false
        AND Id != '${payment.Id}'
        AND npe01__Scheduled_Date__c < ${today}
    `);

    const pastDueAmount = pastDuePayments.reduce(
      (sum, p) => sum + (p.npe01__Payment_Amount__c ?? 0), 0
    );

    const invoiceData: InvoiceData = {
      contactName: contact.Name,
      contactEmail: contact.Email,
      accountName: contact.Account?.Name ?? opp.Account?.Name ?? "—",
      opportunityName: opp.Name,
      campaignName: opp.Campaign?.Name ?? null,
      giftType: opp.Gift_Type__c,
      scheduledDate: payment.npe01__Scheduled_Date__c,
      paymentAmount: payment.npe01__Payment_Amount__c ?? 0,
      pledgeAmount: pledgeAmount,
      amountPaidToDate: amountPaidToDate,
      pastDueAmount: pastDueAmount,
      paymentLink: toUrl(opp.Next_payment_link__c) || toUrl(payment.Payment_Link__c),
      paymentId: payment.Id,
    };

    // Generate PDF
    const doc = generateInvoicePdf(invoiceData);
    const pdfBuffer = Buffer.from(doc.output("arraybuffer"));

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "Jobs Partnership of Florida <giving@jobspartnership.org>",
      replyTo: "mryder@jobspartnership.org",
      to: contact.Email,
      subject: `Pledge Statement — ${opp.Name}`,
      html: buildEmailHtml(invoiceData),
      attachments: [
        {
          filename: `JPF-Statement-${payment.Id}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      sentTo: contact.Email,
      contactName: contact.Name,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("Invoice send error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function buildEmailHtml(data: InvoiceData): string {
  const payButton = data.paymentLink
    ? `<a href="${data.paymentLink}" style="display:inline-block;background-color:#1F98EA;color:#ffffff;font-weight:bold;font-size:16px;padding:12px 32px;border-radius:6px;text-decoration:none;margin:16px 0;">Pay Now</a>`
    : "";

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#212529;">
      <div style="border-bottom:3px solid #1F98EA;padding-bottom:16px;margin-bottom:24px;">
        <h1 style="color:#1F98EA;margin:0;font-size:22px;">Jobs Partnership of Florida</h1>
        <p style="color:#6B7280;margin:4px 0 0;">Pledge Statement</p>
      </div>

      <p>Dear ${data.contactName},</p>

      <p>Please find your pledge statement attached. Below is a summary of your account:</p>

      <table style="width:100%;border-collapse:collapse;margin:20px 0;">
        <tr style="background-color:#1F98EA;color:#fff;">
          <th style="text-align:left;padding:10px 12px;font-size:14px;">Description</th>
          <th style="text-align:right;padding:10px 12px;font-size:14px;">Amount</th>
        </tr>
        <tr style="background-color:#F8FAFC;">
          <td style="padding:10px 12px;border-bottom:1px solid #E2E8F0;">Initial Pledge Amount</td>
          <td style="padding:10px 12px;text-align:right;border-bottom:1px solid #E2E8F0;font-weight:bold;">${formatCurrencyHtml(data.pledgeAmount)}</td>
        </tr>
        <tr>
          <td style="padding:10px 12px;border-bottom:1px solid #E2E8F0;">Amount Paid to Date</td>
          <td style="padding:10px 12px;text-align:right;border-bottom:1px solid #E2E8F0;font-weight:bold;">${formatCurrencyHtml(data.amountPaidToDate)}</td>
        </tr>
        ${data.pastDueAmount > 0 ? `
        <tr style="background-color:#FEF2F2;">
          <td style="padding:10px 12px;border-bottom:1px solid #E2E8F0;color:#DC2626;font-weight:bold;">Past Due Amount</td>
          <td style="padding:10px 12px;text-align:right;border-bottom:1px solid #E2E8F0;font-weight:bold;color:#DC2626;">${formatCurrencyHtml(data.pastDueAmount)}</td>
        </tr>
        ` : ""}
        <tr style="background-color:#F8FAFC;">
          <td style="padding:10px 12px;border-bottom:2px solid #1F98EA;font-weight:bold;">Payment Amount Due</td>
          <td style="padding:10px 12px;text-align:right;border-bottom:2px solid #1F98EA;font-weight:bold;font-size:16px;color:#1F98EA;">${formatCurrencyHtml(data.paymentAmount)}</td>
        </tr>
      </table>

      <div style="text-align:center;margin:24px 0;">
        ${payButton}
      </div>

      <p style="color:#6B7280;font-size:13px;">
        Thank you for your generous support. If you have already made this payment,
        please disregard this statement. If your payment amount differs from the amount
        due, the remaining balance will be reflected on your next statement.
      </p>

      <hr style="border:none;border-top:1px solid #E2E8F0;margin:24px 0;" />

      <p style="color:#9CA3AF;font-size:11px;text-align:center;">
        Jobs Partnership of Florida &bull; jobspartnership.org &bull; giving@jobspartnership.org
      </p>
    </div>
  `;
}

function formatCurrencyHtml(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
