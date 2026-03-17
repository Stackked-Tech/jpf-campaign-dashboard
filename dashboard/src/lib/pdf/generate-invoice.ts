import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export interface InvoiceData {
  contactName: string;
  contactEmail: string | null;
  accountName: string;
  opportunityName: string;
  campaignName: string | null;
  giftType: string | null;
  scheduledDate: string | null;
  paymentAmount: number;
  pledgeAmount: number;
  amountPaidToDate: number;
  pastDueAmount: number;
  paymentLink: string | null;
  paymentId: string;
}

const JPF_BLUE = "#1F98EA";
const DARK = "#212529";
const GRAY = "#6B7280";
const LIGHT_BG = "#F8FAFC";
const BORDER = "#E2E8F0";

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

function formatDate(date: string | null): string {
  if (!date) return "—";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function generateInvoicePdf(
  data: InvoiceData,
  logoDataUrl?: string
): jsPDF {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "letter" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // --- HEADER ---
  if (logoDataUrl) {
    try {
      doc.addImage(logoDataUrl, "PNG", margin, y, 55, 11);
    } catch {
      // Fallback: text-based logo
      doc.setFontSize(18);
      doc.setTextColor(JPF_BLUE);
      doc.setFont("helvetica", "bold");
      doc.text("JOBS PARTNERSHIP", margin, y + 8);
    }
  } else {
    doc.setFontSize(18);
    doc.setTextColor(JPF_BLUE);
    doc.setFont("helvetica", "bold");
    doc.text("JOBS PARTNERSHIP", margin, y + 8);
  }

  // Statement label on the right
  doc.setFontSize(24);
  doc.setTextColor(DARK);
  doc.setFont("helvetica", "bold");
  doc.text("PLEDGE STATEMENT", pageWidth - margin, y + 8, { align: "right" });

  y += 20;

  // Divider line
  doc.setDrawColor(JPF_BLUE);
  doc.setLineWidth(0.8);
  doc.line(margin, y, pageWidth - margin, y);
  y += 10;

  // --- STATEMENT INFO ---
  doc.setFontSize(9);
  doc.setTextColor(GRAY);
  doc.setFont("helvetica", "normal");
  doc.text("Statement Date", margin, y);
  doc.text("Payment Due Date", margin + 55, y);
  if (data.campaignName) {
    doc.text("Campaign", margin + 115, y);
  }

  y += 5;
  doc.setFontSize(10);
  doc.setTextColor(DARK);
  doc.setFont("helvetica", "bold");
  doc.text(formatDate(new Date().toISOString().split("T")[0]), margin, y);
  doc.text(formatDate(data.scheduledDate), margin + 55, y);
  if (data.campaignName) {
    doc.setFont("helvetica", "normal");
    doc.text(data.campaignName, margin + 115, y);
  }

  y += 12;

  // --- BILL TO ---
  doc.setFillColor(LIGHT_BG);
  doc.roundedRect(margin, y, contentWidth, 22, 2, 2, "F");

  y += 6;
  doc.setFontSize(8);
  doc.setTextColor(GRAY);
  doc.setFont("helvetica", "normal");
  doc.text("BILL TO", margin + 5, y);

  y += 5;
  doc.setFontSize(11);
  doc.setTextColor(DARK);
  doc.setFont("helvetica", "bold");
  doc.text(data.contactName, margin + 5, y);

  y += 5;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(GRAY);
  doc.text(data.accountName, margin + 5, y);
  if (data.contactEmail) {
    doc.text(data.contactEmail, margin + 5 + contentWidth / 2, y);
  }

  y += 12;

  // --- PLEDGE REFERENCE ---
  doc.setFontSize(9);
  doc.setTextColor(GRAY);
  doc.setFont("helvetica", "normal");
  doc.text("Pledge Reference", margin, y);
  y += 5;
  doc.setFontSize(10);
  doc.setTextColor(DARK);
  doc.setFont("helvetica", "normal");
  doc.text(data.opportunityName, margin, y);

  y += 12;

  // --- FINANCIAL SUMMARY TABLE ---
  autoTable(doc, {
    startY: y,
    margin: { left: margin, right: margin },
    head: [["Description", "Amount"]],
    body: [
      ["Initial Pledge Amount", formatCurrency(data.pledgeAmount)],
      ["Amount Paid to Date", formatCurrency(data.amountPaidToDate)],
      ...(data.pastDueAmount > 0
        ? [["Past Due Amount", formatCurrency(data.pastDueAmount)]]
        : []),
      ["Payment Amount Due", formatCurrency(data.paymentAmount)],
    ],
    headStyles: {
      fillColor: JPF_BLUE,
      textColor: "#FFFFFF",
      fontStyle: "bold",
      fontSize: 10,
      cellPadding: 4,
    },
    bodyStyles: {
      fontSize: 10,
      cellPadding: 4,
      textColor: DARK,
    },
    alternateRowStyles: {
      fillColor: LIGHT_BG,
    },
    columnStyles: {
      0: { cellWidth: contentWidth * 0.65 },
      1: { cellWidth: contentWidth * 0.35, halign: "right", fontStyle: "bold" },
    },
    theme: "grid",
    styles: {
      lineColor: BORDER,
      lineWidth: 0.3,
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  y = (doc as any).lastAutoTable.finalY + 8;

  // --- AMOUNT DUE HIGHLIGHT BOX ---
  doc.setFillColor(JPF_BLUE);
  doc.roundedRect(margin, y, contentWidth, 16, 2, 2, "F");

  doc.setFontSize(12);
  doc.setTextColor("#FFFFFF");
  doc.setFont("helvetica", "bold");
  doc.text("AMOUNT DUE", margin + 8, y + 10);
  doc.setFontSize(16);
  doc.text(formatCurrency(data.paymentAmount), pageWidth - margin - 8, y + 10.5, {
    align: "right",
  });

  y += 24;

  // --- PAY NOW BUTTON ---
  if (data.paymentLink) {
    const btnWidth = 60;
    const btnHeight = 12;
    const btnX = (pageWidth - btnWidth) / 2;

    doc.setFillColor(JPF_BLUE);
    doc.roundedRect(btnX, y, btnWidth, btnHeight, 3, 3, "F");

    doc.setFontSize(12);
    doc.setTextColor("#FFFFFF");
    doc.setFont("helvetica", "bold");
    doc.text("PAY NOW", pageWidth / 2, y + 8, { align: "center" });

    doc.link(btnX, y, btnWidth, btnHeight, { url: data.paymentLink });

    y += 16;
    doc.setFontSize(8);
    doc.setTextColor(GRAY);
    doc.setFont("helvetica", "normal");
    doc.text("Click the button above or visit:", pageWidth / 2, y, {
      align: "center",
    });
    y += 4;
    doc.setTextColor(JPF_BLUE);
    doc.textWithLink(data.paymentLink, pageWidth / 2 - doc.getTextWidth(data.paymentLink) / 2, y, {
      url: data.paymentLink,
    });

    y += 12;
  }

  // --- MESSAGE ---
  y += 4;
  doc.setDrawColor(BORDER);
  doc.setLineWidth(0.3);
  doc.line(margin, y, pageWidth - margin, y);
  y += 8;

  doc.setFontSize(9);
  doc.setTextColor(GRAY);
  doc.setFont("helvetica", "normal");
  const message =
    "Thank you for your generous support of Jobs Partnership of Florida. " +
    "If you have already made this payment, please disregard this statement. " +
    "If your payment amount differs from the amount due, the remaining balance " +
    "will be reflected on your next statement.";
  const lines = doc.splitTextToSize(message, contentWidth);
  doc.text(lines, margin, y);

  // --- FOOTER ---
  const footerY = doc.internal.pageSize.getHeight() - 15;
  doc.setDrawColor(JPF_BLUE);
  doc.setLineWidth(0.5);
  doc.line(margin, footerY - 5, pageWidth - margin, footerY - 5);

  doc.setFontSize(8);
  doc.setTextColor(GRAY);
  doc.setFont("helvetica", "normal");
  doc.text(
    "Jobs Partnership of Florida  |  jobspartnership.org  |  giving@jobspartnership.org",
    pageWidth / 2,
    footerY,
    { align: "center" }
  );

  return doc;
}
