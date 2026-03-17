// Salesforce record types

export interface Campaign {
  Id: string;
  Name: string;
  Status: string;
  Type: string | null;
  StartDate: string | null;
  EndDate: string | null;
  IsActive: boolean;
  NumberOfOpportunities: number;
  AmountAllOpportunities: number | null;
}

export interface Payment {
  Id: string;
  npe01__Payment_Amount__c: number | null;
  npe01__Scheduled_Date__c: string | null;
  npe01__Payment_Date__c: string | null;
  npe01__Paid__c: boolean;
  npe01__Payment_Method__c: string | null;
}

export interface Opportunity {
  Id: string;
  Name: string;
  Amount: number | null;
  StageName: string;
  CloseDate: string;
  Gift_Type__c: string | null;
  RecordType: { Name: string } | null;
  Account: { Name: string } | null;
  npsp__Primary_Contact__r: {
    Name: string;
    Id: string;
    npo02__NumberOfClosedOpps__c: number | null;
  } | null;
  npe01__OppPayment__r?: {
    totalSize: number;
    records: Payment[];
  } | null;
}

export interface InvoicePayment {
  Id: string;
  npe01__Payment_Amount__c: number | null;
  npe01__Scheduled_Date__c: string | null;
  npe01__Payment_Method__c: string | null;
  npe01__Opportunity__r: {
    Id: string;
    Name: string;
    Amount: number | null;
    Gift_Type__c: string | null;
    Payment_Method__c: string | null;
    Next_payment_link__c: string | null;
    CampaignId: string | null;
    Campaign: { Name: string } | null;
    Account: { Name: string } | null;
    npsp__Primary_Contact__r: {
      Name: string;
      Email: string | null;
      Account: { Name: string; Type: string | null } | null;
    } | null;
  };
  Payment_Acknowledgement_Email_Sent__c: string | null;
  /** Computed server-side: pledge amount minus total unpaid */
  amountPaidToDate?: number;
  /** Computed server-side: sum of unpaid payments scheduled before today (excluding this one) */
  pastDueAmount?: number;
}

// Donor types

export interface DonorContact {
  accountId: string;
  Id: string;
  FirstName: string | null;
  LastName: string;
  Name: string;
  Email: string | null;
  Phone: string | null;
  MailingCity: string | null;
  MailingState: string | null;
  Account: { Name: string; Type: string | null } | null;
  lastCloseDate: string | null;
  lastPaidPaymentDate: string | null;
  totalPaid: number | null;
  pledgesOutstanding: number | null;
  opportunityCount: number;
  fiveYearGiving: number | null;
  givingSocietyTier: GivingSocietyTier;
}

export type GivingStatus = "Active" | "Lapsed" | "Dormant" | "Never Given";

export type GivingSocietyTier = "$50K+" | "$25K+" | "$10K+" | null;

export function getGivingSocietyTier(amount: number | null): GivingSocietyTier {
  if (amount == null || amount < 10000) return null;
  if (amount >= 50000) return "$50K+";
  if (amount >= 25000) return "$25K+";
  return "$10K+";
}

/**
 * Compute giving status from the more recent of:
 * - lastCloseDate (last non-Closed-Lost opportunity)
 * - lastPaidPaymentDate (last paid payment — captures pledge installments)
 */
export function getGivingStatus(
  lastCloseDate: string | null,
  lastPaidPaymentDate?: string | null
): GivingStatus {
  const dates = [lastCloseDate, lastPaidPaymentDate].filter(Boolean) as string[];
  if (dates.length === 0) return "Never Given";
  const mostRecent = dates.sort().pop()!;
  const months =
    (Date.now() - new Date(mostRecent).getTime()) / (1000 * 60 * 60 * 24 * 30.44);
  if (months <= 12) return "Active";
  if (months <= 24) return "Lapsed";
  return "Dormant";
}

/** Return the more recent of two nullable date strings. */
export function mostRecentDate(
  a: string | null,
  b: string | null | undefined
): string | null {
  if (!a) return b ?? null;
  if (!b) return a;
  return a > b ? a : b;
}

// Computed types for display

export interface GiftTypeGroup {
  giftType: string;
  opportunities: Opportunity[];
  count: number;
  totalAmount: number;
  totalPaid: number;
  totalUnpaid: number;
}

export interface CampaignSummary {
  totalOpportunities: number;
  totalAmount: number;
  totalPaid: number;
  totalOutstanding: number;
  percentCollected: number;
  averageGift: number;
  giftTypeBreakdown: { giftType: string; count: number; amount: number }[];
  newDonors: number;
  returningDonors: number;
}
