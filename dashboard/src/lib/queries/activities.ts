import { queryAll } from "@/lib/salesforce";

// ── Filter constants (match Salesforce report definitions) ───────────

const ASSIGNEE_NAMES = ["Stanakis", "Penley"];

const EXCLUDED_CONTACTS = [
  "Beverly Henry-Brown",
  "Karl Allen",
  "Michele Ryder",
  "Julia Stewart",
  "Jeremy Williams",
];

// ── Helpers ──────────────────────────────────────────────────────────

function getFYStart(): string {
  const now = new Date();
  const year = now.getMonth() >= 6 ? now.getFullYear() : now.getFullYear() - 1;
  return `${year}-07-01`;
}

function ownerFilter(): string {
  return ASSIGNEE_NAMES.map((n) => `Owner.Name LIKE '%${n}%'`).join(" OR ");
}

function filterExcludedContacts<T extends { Who?: { Name: string } | null }>(
  records: T[]
): T[] {
  const excluded = new Set(EXCLUDED_CONTACTS.map((n) => n.toLowerCase()));
  return records.filter((r) => {
    const name = r.Who?.Name;
    if (!name) return true;
    return !excluded.has(name.toLowerCase());
  });
}

// ── Types ────────────────────────────────────────────────────────────

export interface ActivityRecord {
  Id: string;
  OwnerId: string;
  Owner: { Name: string };
  ActivityDate: string;
  Subject?: string | null;
  Who?: { Name: string } | null;
}

export interface CallRecord extends ActivityRecord {
  Disposition__c: string | null;
}

export interface MeetingRecord {
  Id: string;
  OwnerId: string;
  Owner: { Name: string };
  ActivityDate: string;
  Subject?: string | null;
  Who?: { Name: string } | null;
}

// ── Queries ──────────────────────────────────────────────────────────

export async function getEmailActivity(): Promise<ActivityRecord[]> {
  const fy = getFYStart();
  const ow = ownerFilter();
  const records = await queryAll<ActivityRecord>(`
    SELECT Id, OwnerId, Owner.Name, ActivityDate, Subject, Who.Name
    FROM Task
    WHERE Subject LIKE '%email%'
      AND Status = 'Completed'
      AND (${ow})
      AND ActivityDate >= ${fy}
    ORDER BY ActivityDate DESC
  `);
  return filterExcludedContacts(records);
}

export async function getCallActivity(): Promise<CallRecord[]> {
  const fy = getFYStart();
  const ow = ownerFilter();
  const records = await queryAll<CallRecord>(`
    SELECT Id, OwnerId, Owner.Name, ActivityDate, Subject, Who.Name, Disposition__c
    FROM Task
    WHERE Subject LIKE '%call%'
      AND Status = 'Completed'
      AND (${ow})
      AND ActivityDate >= ${fy}
    ORDER BY ActivityDate DESC
  `);
  return filterExcludedContacts(records);
}

export async function getMeetingActivity(): Promise<MeetingRecord[]> {
  const fy = getFYStart();
  const ow = ownerFilter();

  // SF report type is "Tasks and Events" — query both objects
  const [taskMeetings, eventMeetings] = await Promise.all([
    queryAll<MeetingRecord>(`
      SELECT Id, OwnerId, Owner.Name, ActivityDate, Subject, Who.Name
      FROM Task
      WHERE Subject LIKE '%meeting%'
        AND Status = 'Completed'
        AND (${ow})
        AND ActivityDate >= ${fy}
      ORDER BY ActivityDate DESC
    `),
    queryAll<MeetingRecord>(`
      SELECT Id, OwnerId, Owner.Name, ActivityDate, Subject, Who.Name
      FROM Event
      WHERE Subject LIKE '%meeting%'
        AND (${ow})
        AND ActivityDate >= ${fy}
        AND ActivityDate <= TODAY
      ORDER BY ActivityDate DESC
    `),
  ]);

  return filterExcludedContacts([...taskMeetings, ...eventMeetings]);
}
