# Grants Hub Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Grants Hub module to the JPF dashboard with pre-award pipeline, reporting schedule, renewals, file attachments, notes, UI-addable custom fields, and Salesforce writeback on award.

**Architecture:** New `(grants)` route group in the existing Next.js app. Supabase (Postgres + Storage) as primary grant store; Salesforce writeback on award. New `grants` cookie role alongside existing `admin` / `dev`. No Supabase Auth, no RLS — all access gated at Next.js middleware using the server-only Supabase service-role key.

**Tech Stack:** Next.js 15 App Router, React 19, TypeScript, Tailwind v4, `@supabase/supabase-js`, `jsforce` (existing), `papaparse` (CSV import).

**Reference:** Design spec at `docs/superpowers/specs/2026-04-13-grants-hub-design.md`.

**Testing convention:** The spec explicitly keeps the existing repo's no-automated-test convention — verification is manual per phase. Each task has a **Verify** step describing what to check in the browser / Supabase Studio / Salesforce, plus a type-check + lint gate.

---

## Phase 0 — Setup & dependencies

### Task 0.1: Install Supabase client and CSV parser

**Files:**
- Modify: `dashboard/package.json`

- [ ] **Step 1: Install packages**

Run from the `dashboard/` directory:

```bash
cd dashboard
npm install @supabase/supabase-js papaparse
npm install --save-dev @types/papaparse
```

- [ ] **Step 2: Verify versions installed**

Run:

```bash
cd dashboard
npm ls @supabase/supabase-js papaparse
```

Expected: both packages listed with resolved versions. No `UNMET` warnings.

- [ ] **Step 3: Commit**

```bash
git add dashboard/package.json dashboard/package-lock.json
git commit -m "chore(grants): install supabase-js and papaparse"
```

### Task 0.2: Add new env vars to `.env.local`

**Files:**
- Modify: `dashboard/.env.local` (not committed)

- [ ] **Step 1: Append the three new variables**

The user will paste real values. For now, add placeholders so local dev doesn't throw on boot:

```
# Grants Hub
GRANTS_PASSWORD=local-dev-grants-password
SUPABASE_URL=https://REPLACE.supabase.co
SUPABASE_SERVICE_ROLE_KEY=REPLACE_ME
```

- [ ] **Step 2: Remind the user (terminal message)**

Output a message:
> "Before deploying: set `GRANTS_PASSWORD`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` in Vercel project env (Production + Preview)."

No commit — `.env.local` is gitignored.

---

## Phase 1 — Supabase schema

### Task 1.1: Create migrations directory and first migration (tables + enums)

**Files:**
- Create: `dashboard/supabase/migrations/0001_create_grants_schema.sql`

- [ ] **Step 1: Write the schema SQL**

Create `dashboard/supabase/migrations/0001_create_grants_schema.sql`:

```sql
-- Grants Hub schema — v1
-- Seven tables, enums, and indexes. No RLS; access is gated at the Next.js middleware.

create extension if not exists "pgcrypto";

-- ========== Enums ==========

create type grant_status as enum (
  'pending', 'awarded', 'received', 'open', 'declined'
);

create type funder_type as enum (
  'corporate', 'private_foundation', 'individual', 'other'
);

create type restriction_kind as enum (
  'restricted', 'unrestricted'
);

create type field_type as enum (
  'text', 'number', 'date', 'bool', 'select'
);

-- ========== grant_templates ==========

create table grant_templates (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text,
  default_checklist_items jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ========== field_definitions ==========

create table field_definitions (
  id uuid primary key default gen_random_uuid(),
  key text not null,
  label text not null,
  field_type field_type not null,
  options jsonb,
  template_id uuid references grant_templates(id) on delete cascade,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  unique (template_id, key)
);

-- ========== grants ==========

create table grants (
  id uuid primary key default gen_random_uuid(),

  -- funder
  funder_name text not null,
  sf_account_id text,
  funder_type funder_type,

  -- lifecycle
  status grant_status not null default 'pending',
  declined_date date,
  sf_opportunity_id text,

  -- money
  request_amount numeric(12, 2),
  amount_awarded numeric(12, 2),
  amount_received numeric(12, 2),

  -- dates
  submission_date date,
  award_date date,
  receipt_date date,
  acknowledged_date date,
  grant_closes_date date,

  -- program
  program_name text,
  restriction restriction_kind,

  -- recurring
  is_recurring boolean not null default false,
  renewal_due_date date,

  -- extensibility
  template_id uuid references grant_templates(id) on delete set null,
  custom_fields jsonb not null default '{}'::jsonb,

  -- free-form
  notes text,

  -- audit
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  created_by text
);

create index grants_status_idx on grants(status);
create index grants_award_date_idx on grants(award_date);
create index grants_renewal_due_date_idx on grants(renewal_due_date)
  where renewal_due_date is not null;

-- Partial unique index for CSV-import idempotency (NULLs are distinct in Postgres
-- so we only constrain rows where submission_date is set; see spec §6.5)
create unique index grants_csv_dedupe_idx
  on grants (funder_name, submission_date, request_amount)
  where submission_date is not null;

-- ========== grant_reports ==========

create table grant_reports (
  id uuid primary key default gen_random_uuid(),
  grant_id uuid not null references grants(id) on delete cascade,
  name text not null,
  due_date date not null,
  submitted_date date,
  sections jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index grant_reports_grant_id_idx on grant_reports(grant_id);
create index grant_reports_due_unsubmitted_idx
  on grant_reports(due_date)
  where submitted_date is null;

-- ========== grant_tasks ==========

create table grant_tasks (
  id uuid primary key default gen_random_uuid(),
  grant_id uuid not null references grants(id) on delete cascade,
  label text not null,
  due_date date,
  completed_at timestamptz,
  completed_by text,
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);

create index grant_tasks_grant_id_idx on grant_tasks(grant_id);

-- ========== grant_attachments ==========

create table grant_attachments (
  id uuid primary key default gen_random_uuid(),
  grant_id uuid not null references grants(id) on delete cascade,
  filename text not null,
  storage_path text not null,
  content_type text not null,
  size_bytes bigint not null,
  uploaded_at timestamptz not null default now(),
  uploaded_by text
);

create index grant_attachments_grant_id_idx on grant_attachments(grant_id);

-- ========== grant_notes ==========

create table grant_notes (
  id uuid primary key default gen_random_uuid(),
  grant_id uuid not null references grants(id) on delete cascade,
  body text not null,
  author text not null,
  created_at timestamptz not null default now()
);

create index grant_notes_grant_id_idx on grant_notes(grant_id);

-- ========== updated_at trigger ==========

create or replace function set_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger grants_set_updated_at
  before update on grants
  for each row execute function set_updated_at();

create trigger grant_templates_set_updated_at
  before update on grant_templates
  for each row execute function set_updated_at();

create trigger grant_reports_set_updated_at
  before update on grant_reports
  for each row execute function set_updated_at();
```

- [ ] **Step 2: Apply migration in the Supabase project**

In Supabase Studio → SQL Editor, paste the contents of the migration file and run it. Alternatively, if the Supabase CLI is installed locally and the project is linked:

```bash
cd dashboard
supabase db push
```

- [ ] **Step 3: Verify all tables exist**

In Supabase Studio → Table Editor, confirm these 7 tables appear: `grants`, `grant_templates`, `field_definitions`, `grant_reports`, `grant_tasks`, `grant_attachments`, `grant_notes`.

- [ ] **Step 4: Commit**

```bash
git add dashboard/supabase/migrations/0001_create_grants_schema.sql
git commit -m "feat(grants): add v1 schema migration (7 tables + enums + indexes)"
```

### Task 1.2: Create storage bucket for attachments

**Files:**
- Create: `dashboard/supabase/migrations/0002_storage_bucket.sql`

- [ ] **Step 1: Write the bucket-creation SQL**

```sql
-- Create private bucket for grant attachments. Signed URLs are minted
-- server-side; no anonymous public access.
insert into storage.buckets (id, name, public)
values ('grant-attachments', 'grant-attachments', false)
on conflict (id) do nothing;
```

- [ ] **Step 2: Apply and verify**

Run the migration in Supabase Studio. Under Storage → Buckets confirm `grant-attachments` exists and is marked "Private".

- [ ] **Step 3: Commit**

```bash
git add dashboard/supabase/migrations/0002_storage_bucket.sql
git commit -m "feat(grants): create grant-attachments storage bucket"
```

### Task 1.3: Seed default templates

**Files:**
- Create: `dashboard/supabase/migrations/0003_seed_templates.sql`

- [ ] **Step 1: Write the seed SQL**

```sql
-- Seed default grant templates. Idempotent via ON CONFLICT.
insert into grant_templates (name, description, default_checklist_items)
values
  (
    'Corporate Sponsor',
    'Corporate grants with formal reporting and budget accounting.',
    '[
      {"label": "Draft proposal", "offset_days_from_award": null},
      {"label": "Submit proposal", "offset_days_from_award": null},
      {"label": "Send acknowledgment letter", "offset_days_from_award": 7},
      {"label": "Plan reporting cadence", "offset_days_from_award": 14},
      {"label": "Prepare first report", "offset_days_from_award": 180}
    ]'::jsonb
  ),
  (
    'Private Foundation',
    'Private foundation grants — often narrative-only reporting.',
    '[
      {"label": "Draft LOI or proposal", "offset_days_from_award": null},
      {"label": "Submit to funder", "offset_days_from_award": null},
      {"label": "Send thank-you letter", "offset_days_from_award": 7},
      {"label": "Write narrative report", "offset_days_from_award": 330}
    ]'::jsonb
  ),
  (
    'Blank',
    'No preset checklist. Useful for ad-hoc grants.',
    '[]'::jsonb
  )
on conflict (name) do nothing;
```

- [ ] **Step 2: Apply**

Run the migration in Supabase Studio.

- [ ] **Step 3: Verify**

In Table Editor open `grant_templates`; confirm three rows with the three names.

- [ ] **Step 4: Commit**

```bash
git add dashboard/supabase/migrations/0003_seed_templates.sql
git commit -m "feat(grants): seed default grant templates"
```

---

## Phase 2 — Supabase client + types

### Task 2.1: Server-only Supabase client

**Files:**
- Create: `dashboard/src/lib/supabase.ts`

- [ ] **Step 1: Write the client module**

```ts
import { createClient, SupabaseClient } from "@supabase/supabase-js";

// This module must NEVER be imported from a "use client" file.
// It uses the service-role key, which must stay server-side.
if (typeof window !== "undefined") {
  throw new Error(
    "lib/supabase.ts imported from a client context. " +
      "Only server components and API routes may import it."
  );
}

const url = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRoleKey) {
  throw new Error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables."
  );
}

let client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!client) {
    client = createClient(url!, serviceRoleKey!, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  }
  return client;
}
```

- [ ] **Step 2: Update `dashboard/next.config.ts` to mark `@supabase/supabase-js` as external**

Current file (verified earlier):
```ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  serverExternalPackages: ["jsforce"],
};
export default nextConfig;
```

Change to:
```ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  serverExternalPackages: ["jsforce", "@supabase/supabase-js"],
};
export default nextConfig;
```

- [ ] **Step 3: Type-check**

```bash
cd dashboard
npx tsc --noEmit
```

Expected: clean.

- [ ] **Step 4: Commit**

```bash
git add dashboard/src/lib/supabase.ts dashboard/next.config.ts
git commit -m "feat(grants): add server-only Supabase client"
```

### Task 2.2: TypeScript types for grants domain

**Files:**
- Create: `dashboard/src/lib/grants/types.ts`

- [ ] **Step 1: Write the types**

```ts
// Grants Hub domain types. Mirror the Supabase schema in 0001_create_grants_schema.sql.

export type GrantStatus =
  | "pending"
  | "awarded"
  | "received"
  | "open"
  | "declined";

export type FunderType =
  | "corporate"
  | "private_foundation"
  | "individual"
  | "other";

export type RestrictionKind = "restricted" | "unrestricted";

export type FieldType = "text" | "number" | "date" | "bool" | "select";

export interface Grant {
  id: string;
  funder_name: string;
  sf_account_id: string | null;
  funder_type: FunderType | null;
  status: GrantStatus;
  declined_date: string | null;
  sf_opportunity_id: string | null;
  request_amount: number | null;
  amount_awarded: number | null;
  amount_received: number | null;
  submission_date: string | null;
  award_date: string | null;
  receipt_date: string | null;
  acknowledged_date: string | null;
  grant_closes_date: string | null;
  program_name: string | null;
  restriction: RestrictionKind | null;
  is_recurring: boolean;
  renewal_due_date: string | null;
  template_id: string | null;
  custom_fields: Record<string, unknown>;
  notes: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
}

export interface ChecklistItemTemplate {
  label: string;
  offset_days_from_award: number | null;
}

export interface GrantTemplate {
  id: string;
  name: string;
  description: string | null;
  default_checklist_items: ChecklistItemTemplate[];
  created_at: string;
  updated_at: string;
}

export interface FieldDefinition {
  id: string;
  key: string;
  label: string;
  field_type: FieldType;
  options: string[] | null;
  template_id: string | null;
  sort_order: number;
  created_at: string;
}

export type ReportSectionType = "narrative" | "financial" | "metric";

export interface ReportSection {
  type: ReportSectionType;
  title: string;
  content: unknown;
}

export interface NarrativeContent {
  markdown: string;
}

export interface FinancialRow {
  category: string;
  planned: number | null;
  spent: number | null;
}

export interface FinancialContent {
  rows: FinancialRow[];
}

export interface MetricRow {
  key: string;
  target: number | null;
  actual: number | null;
}

export interface MetricContent {
  rows: MetricRow[];
}

export interface GrantReport {
  id: string;
  grant_id: string;
  name: string;
  due_date: string;
  submitted_date: string | null;
  sections: ReportSection[];
  created_at: string;
  updated_at: string;
}

export interface GrantTask {
  id: string;
  grant_id: string;
  label: string;
  due_date: string | null;
  completed_at: string | null;
  completed_by: string | null;
  sort_order: number;
  created_at: string;
}

export interface GrantAttachment {
  id: string;
  grant_id: string;
  filename: string;
  storage_path: string;
  content_type: string;
  size_bytes: number;
  uploaded_at: string;
  uploaded_by: string | null;
}

export interface GrantNote {
  id: string;
  grant_id: string;
  body: string;
  author: string;
  created_at: string;
}
```

- [ ] **Step 2: Type-check**

```bash
cd dashboard
npx tsc --noEmit
```

- [ ] **Step 3: Commit**

```bash
git add dashboard/src/lib/grants/types.ts
git commit -m "feat(grants): add domain TypeScript types"
```

---

## Phase 3 — Auth extensions (grants role)

### Task 3.1: Extend `/api/auth` to accept the grants role

**Files:**
- Modify: `dashboard/src/app/api/auth/route.ts`

- [ ] **Step 1: Replace the current validation + password lookup**

Current file (verified earlier — lines 6-7 hard-code `admin`/`dev`). Replace the POST handler body:

```ts
import { NextRequest, NextResponse } from "next/server";

type Role = "admin" | "dev" | "grants";

const PASSWORD_ENV: Record<Role, string | undefined> = {
  admin: process.env.AUTH_PASSWORD,
  dev: process.env.DEV_PASSWORD,
  grants: process.env.GRANTS_PASSWORD,
};

function isRole(value: unknown): value is Role {
  return value === "admin" || value === "dev" || value === "grants";
}

export async function POST(request: NextRequest) {
  const { role, password } = await request.json();

  if (!isRole(role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  const expectedPassword = PASSWORD_ENV[role];

  if (!expectedPassword) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    );
  }

  if (password !== expectedPassword) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set("auth_token", role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });
  return response;
}
```

- [ ] **Step 2: Type-check**

```bash
cd dashboard
npx tsc --noEmit
```

- [ ] **Step 3: Manual verify**

Start dev server. With `GRANTS_PASSWORD=test` in `.env.local`, `curl`:

```bash
curl -i -X POST http://localhost:3030/api/auth \
  -H 'Content-Type: application/json' \
  -d '{"role":"grants","password":"test"}'
```

Expected: `200 OK`, `Set-Cookie: auth_token=grants; ...`.

Repeat with wrong password → `401`. Repeat with bad role → `400`.

- [ ] **Step 4: Commit**

```bash
git add dashboard/src/app/api/auth/route.ts
git commit -m "feat(grants): allow grants role in /api/auth"
```

### Task 3.2: Extend middleware to gate the grants role

**Files:**
- Modify: `dashboard/src/middleware.ts`

- [ ] **Step 1: Replace the middleware body**

```ts
import { NextRequest, NextResponse } from "next/server";

const ADMIN_ONLY_GRANTS_PATHS = ["/grants/settings"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow login page, auth API, and static assets through
  if (
    pathname === "/login" ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".ico")
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get("auth_token");
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = token.value; // "admin" | "dev" | "grants"

  // Dev cookie → locked to /dev
  if (role === "dev" && !pathname.startsWith("/dev")) {
    return NextResponse.redirect(new URL("/dev", request.url));
  }

  // Grants cookie → locked to /grants, and cannot reach admin-only grants paths
  if (role === "grants") {
    if (!pathname.startsWith("/grants")) {
      return NextResponse.redirect(new URL("/grants", request.url));
    }
    if (ADMIN_ONLY_GRANTS_PATHS.some((p) => pathname.startsWith(p))) {
      return NextResponse.redirect(new URL("/grants", request.url));
    }
  }

  // Admin: unrestricted
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
```

- [ ] **Step 2: Type-check**

```bash
cd dashboard
npx tsc --noEmit
```

- [ ] **Step 3: Manual verify**

With dev server running, hit `http://localhost:3030/campaigns` while holding an `auth_token=grants` cookie (set via the API call from 3.1). Expect redirect to `/grants`.

- [ ] **Step 4: Commit**

```bash
git add dashboard/src/middleware.ts
git commit -m "feat(grants): middleware locks grants role to /grants and blocks /grants/settings"
```

### Task 3.3: Add third tile to login page

**Files:**
- Modify: `dashboard/src/app/login/page.tsx`

- [ ] **Step 1: Update the Role type and role tiles**

Change the `Role` type on line 6:

```ts
type Role = "admin" | "dev" | "grants";
```

Replace the role-selector grid (roughly lines 79-121 of the current file) with:

```tsx
{step === "role" && (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <button
      onClick={() => handleRoleSelect("admin")}
      className="flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-background p-6 text-foreground transition-colors hover:border-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
      <span className="text-sm font-medium">Administration</span>
    </button>

    <button
      onClick={() => handleRoleSelect("grants")}
      className="flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-background p-6 text-foreground transition-colors hover:border-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5" />
      </svg>
      <span className="text-sm font-medium">Grants Team</span>
    </button>

    <button
      onClick={() => handleRoleSelect("dev")}
      className="flex flex-col items-center gap-3 rounded-xl border-2 border-border bg-background p-6 text-foreground transition-colors hover:border-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
      <span className="text-sm font-medium">Development Team</span>
    </button>
  </div>
)}
```

And update the post-login redirect (currently line 43):

```ts
if (res.ok) {
  if (selectedRole === "admin") router.push("/campaigns");
  else if (selectedRole === "grants") router.push("/grants");
  else router.push("/dev");
}
```

And the `roleLabel` (line 54):

```ts
const roleLabel =
  selectedRole === "admin"
    ? "Administration"
    : selectedRole === "grants"
      ? "Grants Team"
      : "Development Team";
```

- [ ] **Step 2: Type-check and run dev**

```bash
cd dashboard
npx tsc --noEmit
npm run dev
```

- [ ] **Step 3: Manual verify**

Visit `http://localhost:3030/login`. Confirm 3 tiles on desktop, stacking on narrow viewports. Click Grants Team → enter password → expect redirect to `/grants` (which will 404 until Task 4.1 is done — that's expected).

- [ ] **Step 4: Commit**

```bash
git add dashboard/src/app/login/page.tsx
git commit -m "feat(grants): add Grants Team tile to login page"
```

---

## Phase 4 — Read path (queries + layout + landing)

### Task 4.1: Query helpers for grants (read-only)

**Files:**
- Create: `dashboard/src/lib/grants/queries.ts`

- [ ] **Step 1: Write the query functions**

```ts
import { getSupabase } from "@/lib/supabase";
import type {
  Grant,
  GrantAttachment,
  GrantNote,
  GrantReport,
  GrantTask,
  GrantTemplate,
  FieldDefinition,
} from "@/lib/grants/types";

export async function getGrants(filter?: { status?: Grant["status"] }): Promise<Grant[]> {
  const s = getSupabase();
  let q = s.from("grants").select("*").order("updated_at", { ascending: false });
  if (filter?.status) q = q.eq("status", filter.status);
  const { data, error } = await q;
  if (error) throw new Error(`getGrants: ${error.message}`);
  return data as Grant[];
}

export async function getGrantById(id: string): Promise<Grant | null> {
  const s = getSupabase();
  const { data, error } = await s.from("grants").select("*").eq("id", id).maybeSingle();
  if (error) throw new Error(`getGrantById: ${error.message}`);
  return data as Grant | null;
}

export async function getReportsForGrant(grantId: string): Promise<GrantReport[]> {
  const s = getSupabase();
  const { data, error } = await s
    .from("grant_reports")
    .select("*")
    .eq("grant_id", grantId)
    .order("due_date", { ascending: true });
  if (error) throw new Error(`getReportsForGrant: ${error.message}`);
  return data as GrantReport[];
}

export async function getTasksForGrant(grantId: string): Promise<GrantTask[]> {
  const s = getSupabase();
  const { data, error } = await s
    .from("grant_tasks")
    .select("*")
    .eq("grant_id", grantId)
    .order("sort_order", { ascending: true });
  if (error) throw new Error(`getTasksForGrant: ${error.message}`);
  return data as GrantTask[];
}

export async function getAttachmentsForGrant(grantId: string): Promise<GrantAttachment[]> {
  const s = getSupabase();
  const { data, error } = await s
    .from("grant_attachments")
    .select("*")
    .eq("grant_id", grantId)
    .order("uploaded_at", { ascending: false });
  if (error) throw new Error(`getAttachmentsForGrant: ${error.message}`);
  return data as GrantAttachment[];
}

export async function getNotesForGrant(grantId: string): Promise<GrantNote[]> {
  const s = getSupabase();
  const { data, error } = await s
    .from("grant_notes")
    .select("*")
    .eq("grant_id", grantId)
    .order("created_at", { ascending: false });
  if (error) throw new Error(`getNotesForGrant: ${error.message}`);
  return data as GrantNote[];
}

export async function getTemplates(): Promise<GrantTemplate[]> {
  const s = getSupabase();
  const { data, error } = await s
    .from("grant_templates")
    .select("*")
    .order("name", { ascending: true });
  if (error) throw new Error(`getTemplates: ${error.message}`);
  return data as GrantTemplate[];
}

export async function getFieldDefinitions(templateId: string | null = null): Promise<FieldDefinition[]> {
  const s = getSupabase();
  let q = s.from("field_definitions").select("*").order("sort_order", { ascending: true });
  q = templateId ? q.or(`template_id.is.null,template_id.eq.${templateId}`) : q.is("template_id", null);
  const { data, error } = await q;
  if (error) throw new Error(`getFieldDefinitions: ${error.message}`);
  return data as FieldDefinition[];
}

export async function getDueSoonReports(days = 30): Promise<GrantReport[]> {
  const s = getSupabase();
  const today = new Date().toISOString().slice(0, 10);
  const until = new Date(Date.now() + days * 86400_000).toISOString().slice(0, 10);
  const { data, error } = await s
    .from("grant_reports")
    .select("*")
    .is("submitted_date", null)
    .gte("due_date", today)
    .lte("due_date", until)
    .order("due_date", { ascending: true });
  if (error) throw new Error(`getDueSoonReports: ${error.message}`);
  return data as GrantReport[];
}

export async function getUpcomingRenewals(days = 60): Promise<Grant[]> {
  const s = getSupabase();
  const today = new Date().toISOString().slice(0, 10);
  const until = new Date(Date.now() + days * 86400_000).toISOString().slice(0, 10);
  const { data, error } = await s
    .from("grants")
    .select("*")
    .gte("renewal_due_date", today)
    .lte("renewal_due_date", until)
    .order("renewal_due_date", { ascending: true });
  if (error) throw new Error(`getUpcomingRenewals: ${error.message}`);
  return data as Grant[];
}
```

- [ ] **Step 2: Type-check and commit**

```bash
cd dashboard && npx tsc --noEmit
git add dashboard/src/lib/grants/queries.ts
git commit -m "feat(grants): read-only Supabase queries"
```

### Task 4.2: Role helper for server components

**Files:**
- Create: `dashboard/src/lib/grants/role.ts`

- [ ] **Step 1: Write the helper**

```ts
import { cookies } from "next/headers";

export type Role = "admin" | "dev" | "grants";

export async function getCurrentRole(): Promise<Role | null> {
  const c = await cookies();
  const v = c.get("auth_token")?.value;
  if (v === "admin" || v === "dev" || v === "grants") return v;
  return null;
}

export async function isAdmin(): Promise<boolean> {
  return (await getCurrentRole()) === "admin";
}
```

- [ ] **Step 2: Commit**

```bash
cd dashboard && npx tsc --noEmit
git add dashboard/src/lib/grants/role.ts
git commit -m "feat(grants): role helper for server components"
```

### Task 4.3: Grants route group layout and sidebar

**Files:**
- Create: `dashboard/src/app/(grants)/layout.tsx`
- Create: `dashboard/src/components/grants/grants-sidebar.tsx`

- [ ] **Step 1: Write the sidebar (client component)**

`dashboard/src/components/grants/grants-sidebar.tsx`:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, CalendarRange, FileText, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  showSettings: boolean;
}

const baseItems = [
  { href: "/grants", label: "Overview", icon: BarChart3 },
  { href: "/grants/pipeline", label: "Pipeline", icon: CalendarRange },
  { href: "/grants/reports", label: "Reports", icon: FileText },
];

export function GrantsSidebar({ showSettings }: Props) {
  const pathname = usePathname();
  const navItems = showSettings
    ? [...baseItems, { href: "/grants/settings", label: "Settings", icon: Settings }]
    : baseItems;

  return (
    <aside className="w-60 bg-sidebar h-screen sticky top-0 flex flex-col overflow-y-auto">
      <div className="px-5 py-6 border-b border-white/10">
        <Link href="/grants" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://www.jobspartnership.org/wp-content/uploads/JPF-brandmark-secondary.svg"
            alt="Jobs Partnership of Florida"
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>
        <p className="mt-2 text-xs text-sidebar-foreground/60 font-medium tracking-wide uppercase">
          Grants Hub
        </p>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/grants" && pathname.startsWith(item.href + "/"));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-active text-white"
                  : "text-sidebar-foreground hover:bg-white/10 hover:text-white"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-5 py-4 border-t border-white/10">
        <p className="text-xs text-sidebar-foreground/40">Jobs Partnership of Florida</p>
      </div>
    </aside>
  );
}
```

- [ ] **Step 2: Write the layout**

`dashboard/src/app/(grants)/layout.tsx`:

```tsx
import { GrantsSidebar } from "@/components/grants/grants-sidebar";
import { isAdmin } from "@/lib/grants/role";

export default async function GrantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await isAdmin();
  return (
    <div className="flex min-h-screen">
      <GrantsSidebar showSettings={admin} />
      <main className="flex-1 p-8 overflow-auto">{children}</main>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd dashboard && npx tsc --noEmit
git add dashboard/src/app/\(grants\)/layout.tsx dashboard/src/components/grants/grants-sidebar.tsx
git commit -m "feat(grants): layout and sidebar for the grants route group"
```

### Task 4.4: Landing page with due-soon panel

**Files:**
- Create: `dashboard/src/app/(grants)/grants/page.tsx`
- Create: `dashboard/src/components/grants/due-soon-panel.tsx`

- [ ] **Step 1: Write the due-soon panel**

`dashboard/src/components/grants/due-soon-panel.tsx`:

```tsx
import Link from "next/link";
import { FileText, CalendarClock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { Grant, GrantReport } from "@/lib/grants/types";

interface Props {
  reports: GrantReport[];
  renewals: Grant[];
  grantNameById: Record<string, string>;
}

function daysUntil(date: string): number {
  const d = new Date(date).getTime();
  return Math.ceil((d - Date.now()) / 86400_000);
}

export function DueSoonPanel({ reports, renewals, grantNameById }: Props) {
  if (reports.length === 0 && renewals.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
        Nothing due in the next 30 days.
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {reports.length > 0 && (
        <section className="rounded-lg border border-border bg-card">
          <header className="px-4 py-3 border-b border-border flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold">Reports due in 30 days</h2>
          </header>
          <ul className="divide-y divide-border">
            {reports.map((r) => (
              <li key={r.id} className="px-4 py-3 flex items-center justify-between text-sm">
                <Link href={`/grants/${r.grant_id}`} className="hover:underline font-medium">
                  {r.name} — {grantNameById[r.grant_id] ?? "Grant"}
                </Link>
                <span className="text-muted-foreground">
                  {formatDate(r.due_date)} ({daysUntil(r.due_date)}d)
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
      {renewals.length > 0 && (
        <section className="rounded-lg border border-border bg-card">
          <header className="px-4 py-3 border-b border-border flex items-center gap-2">
            <CalendarClock className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold">Renewals due in 60 days</h2>
          </header>
          <ul className="divide-y divide-border">
            {renewals.map((g) => (
              <li key={g.id} className="px-4 py-3 flex items-center justify-between text-sm">
                <Link href={`/grants/${g.id}`} className="hover:underline font-medium">
                  {g.funder_name}
                </Link>
                <span className="text-muted-foreground">
                  {formatDate(g.renewal_due_date)} ({daysUntil(g.renewal_due_date!)}d)
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Write the landing page**

`dashboard/src/app/(grants)/grants/page.tsx`:

```tsx
import Link from "next/link";
import { getDueSoonReports, getUpcomingRenewals, getGrants } from "@/lib/grants/queries";
import { DueSoonPanel } from "@/components/grants/due-soon-panel";
import { StatsCard } from "@/components/stats-card";
import { formatCurrency } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function GrantsLandingPage() {
  const [reports, renewals, allGrants] = await Promise.all([
    getDueSoonReports(30),
    getUpcomingRenewals(60),
    getGrants(),
  ]);

  const active = allGrants.filter((g) => g.status !== "declined");
  const awardedTotal = allGrants
    .filter((g) => g.status === "awarded" || g.status === "received" || g.status === "open")
    .reduce((sum, g) => sum + (g.amount_awarded ?? g.amount_received ?? 0), 0);
  const pendingTotal = allGrants
    .filter((g) => g.status === "pending")
    .reduce((sum, g) => sum + (g.request_amount ?? 0), 0);

  const grantNameById: Record<string, string> = Object.fromEntries(
    allGrants.map((g) => [g.id, g.funder_name])
  );

  return (
    <div className="space-y-6">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-2xl font-bold">Grants Hub</h1>
          <p className="text-sm text-muted-foreground mt-1">Overview of grant pipeline and upcoming work</p>
        </div>
        <Link
          href="/grants/new"
          className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90"
        >
          + New grant
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatsCard label="Active grants" value={String(active.length)} />
        <StatsCard label="Awarded / received" value={formatCurrency(awardedTotal)} />
        <StatsCard label="Pending requests" value={formatCurrency(pendingTotal)} />
      </div>
      <DueSoonPanel reports={reports} renewals={renewals} grantNameById={grantNameById} />
    </div>
  );
}
```

- [ ] **Step 3: Verify in browser**

Log in as grants, visit `/grants`. Expect empty-state panel + three 0 stats.

- [ ] **Step 4: Commit**

```bash
git add dashboard/src/app/\(grants\)/grants/page.tsx dashboard/src/components/grants/due-soon-panel.tsx
git commit -m "feat(grants): landing page with due-soon panel"
```

### Task 4.5: Pipeline page

**Files:**
- Create: `dashboard/src/app/(grants)/grants/pipeline/page.tsx`
- Create: `dashboard/src/components/grants/pipeline-table.tsx`

- [ ] **Step 1: Write the table component**

`dashboard/src/components/grants/pipeline-table.tsx`:

```tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Grant, GrantStatus } from "@/lib/grants/types";
import { formatCurrency, formatDate } from "@/lib/utils";

interface Props { grants: Grant[]; }

const STATUS_ORDER: GrantStatus[] = ["pending", "awarded", "received", "open", "declined"];
const STATUS_LABELS: Record<GrantStatus, string> = {
  pending: "Pending",
  awarded: "Awarded",
  received: "Received",
  open: "Open (prior FY)",
  declined: "Declined",
};

export function PipelineTable({ grants }: Props) {
  const [q, setQ] = useState("");
  const [activeStatus, setActiveStatus] = useState<GrantStatus | "all">("all");

  const filtered = useMemo(
    () =>
      grants.filter((g) => {
        if (activeStatus !== "all" && g.status !== activeStatus) return false;
        if (q && !g.funder_name.toLowerCase().includes(q.toLowerCase())) return false;
        return true;
      }),
    [grants, q, activeStatus]
  );

  const grouped = useMemo(() => {
    const map = new Map<GrantStatus, Grant[]>();
    for (const g of filtered) {
      const arr = map.get(g.status) ?? [];
      arr.push(g);
      map.set(g.status, arr);
    }
    return map;
  }, [filtered]);

  return (
    <div className="space-y-4">
      <div className="flex gap-3 items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search funder..."
          className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm"
        />
        <select
          value={activeStatus}
          onChange={(e) => setActiveStatus(e.target.value as GrantStatus | "all")}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm"
        >
          <option value="all">All statuses</option>
          {STATUS_ORDER.map((s) => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
        </select>
      </div>

      {STATUS_ORDER.map((status) => {
        const items = grouped.get(status) ?? [];
        if (items.length === 0) return null;
        return (
          <section key={status} className="rounded-lg border border-border bg-card">
            <header className="px-4 py-3 border-b border-border flex items-baseline justify-between">
              <h2 className="text-sm font-semibold">{STATUS_LABELS[status]}</h2>
              <span className="text-xs text-muted-foreground">{items.length}</span>
            </header>
            <table className="w-full text-sm">
              <thead className="bg-muted text-muted-foreground">
                <tr>
                  <th className="text-left px-4 py-2 font-medium">Funder</th>
                  <th className="text-left px-4 py-2 font-medium">Program</th>
                  <th className="text-right px-4 py-2 font-medium">Requested</th>
                  <th className="text-right px-4 py-2 font-medium">Awarded</th>
                  <th className="text-left px-4 py-2 font-medium">Submitted</th>
                  <th className="text-left px-4 py-2 font-medium">Award</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {items.map((g) => (
                  <tr key={g.id} className="hover:bg-muted/50">
                    <td className="px-4 py-2">
                      <Link href={`/grants/${g.id}`} className="hover:underline font-medium">
                        {g.funder_name}
                      </Link>
                    </td>
                    <td className="px-4 py-2">{g.program_name ?? "—"}</td>
                    <td className="px-4 py-2 text-right">{formatCurrency(g.request_amount)}</td>
                    <td className="px-4 py-2 text-right">{formatCurrency(g.amount_awarded)}</td>
                    <td className="px-4 py-2">{formatDate(g.submission_date)}</td>
                    <td className="px-4 py-2">{formatDate(g.award_date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        );
      })}

      {filtered.length === 0 && (
        <div className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground text-center">
          No grants match these filters.
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Write the page**

`dashboard/src/app/(grants)/grants/pipeline/page.tsx`:

```tsx
import { getGrants } from "@/lib/grants/queries";
import { PipelineTable } from "@/components/grants/pipeline-table";

export const dynamic = "force-dynamic";

export default async function PipelinePage() {
  const grants = await getGrants();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Pipeline</h1>
        <p className="text-sm text-muted-foreground mt-1">All grants grouped by status</p>
      </div>
      <PipelineTable grants={grants} />
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add dashboard/src/app/\(grants\)/grants/pipeline/page.tsx dashboard/src/components/grants/pipeline-table.tsx
git commit -m "feat(grants): pipeline page with status grouping and search"
```

---

## Phase 5 — Create grant flow

### Task 5.1: Funder-search API

**Files:**
- Create: `dashboard/src/app/api/grants/funder-search/route.ts`

- [ ] **Step 1: Write the route**

```ts
import { NextRequest, NextResponse } from "next/server";
import { queryAll } from "@/lib/salesforce";

interface AccountHit { Id: string; Name: string; Type: string | null; }

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim();
  if (!q || q.length < 2) return NextResponse.json({ results: [] });
  const safe = q.replace(/'/g, "\\'");
  try {
    const records = await queryAll<AccountHit>(`
      SELECT Id, Name, Type FROM Account
      WHERE Name LIKE '%${safe}%' ORDER BY Name LIMIT 20
    `);
    return NextResponse.json({
      results: records.map((r) => ({ id: r.Id, name: r.Name, type: r.Type })),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
```

- [ ] **Step 2: Verify**

```bash
curl 'http://localhost:3030/api/grants/funder-search?q=chat' -b 'auth_token=admin'
```

Expected: JSON with `results` array.

- [ ] **Step 3: Commit**

```bash
git add dashboard/src/app/api/grants/funder-search/route.ts
git commit -m "feat(grants): funder-search API against SF Accounts"
```

### Task 5.2: Funder-search combobox

**Files:**
- Create: `dashboard/src/components/grants/funder-search-combobox.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";

interface Hit { id: string; name: string; type: string | null; }
interface Props {
  value: { sf_account_id: string | null; funder_name: string } | null;
  onChange: (v: { sf_account_id: string | null; funder_name: string }) => void;
}

export function FunderSearchCombobox({ value, onChange }: Props) {
  const [q, setQ] = useState(value?.funder_name ?? "");
  const [hits, setHits] = useState<Hit[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (q.trim().length < 2) { setHits([]); return; }
    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/grants/funder-search?q=${encodeURIComponent(q)}`);
        const json = await res.json();
        setHits(json.results ?? []);
      } finally { setLoading(false); }
    }, 250);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [q]);

  return (
    <div className="relative">
      <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="Search Salesforce Accounts..."
          className="flex-1 bg-transparent text-sm focus:outline-none"
        />
      </div>
      {open && q.trim().length >= 2 && (
        <div className="absolute z-10 mt-1 w-full rounded-lg border border-border bg-card shadow-lg max-h-64 overflow-y-auto">
          {loading && <div className="px-4 py-3 text-sm text-muted-foreground">Searching…</div>}
          {!loading && hits.length === 0 && (
            <div className="px-4 py-3 text-sm text-muted-foreground">
              No matches. Use the option below to proceed with a free-text funder.
            </div>
          )}
          {hits.map((h) => (
            <button key={h.id} type="button" onClick={() => {
              onChange({ sf_account_id: h.id, funder_name: h.name });
              setQ(h.name); setOpen(false);
            }} className="w-full text-left px-4 py-2 hover:bg-muted">
              <div className="text-sm font-medium">{h.name}</div>
              {h.type && <div className="text-xs text-muted-foreground">{h.type}</div>}
            </button>
          ))}
          <button type="button" onClick={() => {
            onChange({ sf_account_id: null, funder_name: q.trim() });
            setOpen(false);
          }} className="w-full text-left px-4 py-2 border-t border-border text-sm text-primary hover:bg-primary/5">
            Use &quot;{q.trim()}&quot; as free-text funder (not linked to SF yet)
          </button>
        </div>
      )}
      {value?.sf_account_id && (
        <p className="mt-1 text-xs text-muted-foreground">Linked to SF Account {value.sf_account_id}</p>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd dashboard && npx tsc --noEmit
git add dashboard/src/components/grants/funder-search-combobox.tsx
git commit -m "feat(grants): funder search combobox"
```

### Task 5.3: Create/update/delete mutations

**Files:**
- Create: `dashboard/src/lib/grants/mutations.ts`

- [ ] **Step 1: Write the module**

```ts
import { getSupabase } from "@/lib/supabase";
import type { Grant, GrantTemplate } from "@/lib/grants/types";

export interface CreateGrantInput {
  template_id: string | null;
  funder_name: string;
  sf_account_id: string | null;
  funder_type: Grant["funder_type"];
  restriction: Grant["restriction"];
  program_name: string | null;
  request_amount: number | null;
  submission_date: string | null;
  notes: string | null;
  custom_fields: Record<string, unknown>;
  created_by: string | null;
}

export async function createGrant(input: CreateGrantInput): Promise<Grant> {
  const s = getSupabase();
  const { data: grant, error } = await s
    .from("grants")
    .insert({ ...input, status: "pending" })
    .select("*")
    .single();
  if (error || !grant) throw new Error(`createGrant: ${error?.message ?? "unknown"}`);

  if (input.template_id) {
    const { data: tmpl } = await s
      .from("grant_templates")
      .select("default_checklist_items")
      .eq("id", input.template_id)
      .maybeSingle();
    const items = (tmpl?.default_checklist_items as GrantTemplate["default_checklist_items"]) ?? [];
    if (items.length > 0) {
      await s.from("grant_tasks").insert(
        items.map((item, idx) => ({
          grant_id: (grant as Grant).id,
          label: item.label,
          due_date: null,
          sort_order: idx,
        }))
      );
    }
  }
  return grant as Grant;
}

export async function updateGrant(id: string, patch: Partial<Grant>): Promise<Grant> {
  const s = getSupabase();
  const { data, error } = await s.from("grants").update(patch).eq("id", id).select("*").single();
  if (error || !data) throw new Error(`updateGrant: ${error?.message ?? "unknown"}`);
  return data as Grant;
}

export async function deleteGrant(id: string): Promise<void> {
  const s = getSupabase();
  const { error } = await s.from("grants").delete().eq("id", id);
  if (error) throw new Error(`deleteGrant: ${error.message}`);
}
```

- [ ] **Step 2: Commit**

```bash
cd dashboard && npx tsc --noEmit
git add dashboard/src/lib/grants/mutations.ts
git commit -m "feat(grants): create/update/delete grant mutations"
```

### Task 5.4: `POST /api/grants` (create) + `GET` (list)

**Files:**
- Create: `dashboard/src/app/api/grants/route.ts`

- [ ] **Step 1: Write the route**

```ts
import { NextRequest, NextResponse } from "next/server";
import { getGrants } from "@/lib/grants/queries";
import { createGrant, type CreateGrantInput } from "@/lib/grants/mutations";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET() {
  try {
    const grants = await getGrants();
    return NextResponse.json({ grants });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const role = await getCurrentRole();
    if (role !== "admin" && role !== "grants") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
    const body = (await request.json()) as Partial<CreateGrantInput>;
    if (!body.funder_name || body.funder_name.trim().length === 0) {
      return NextResponse.json({ error: "funder_name is required" }, { status: 400 });
    }
    const input: CreateGrantInput = {
      template_id: body.template_id ?? null,
      funder_name: body.funder_name,
      sf_account_id: body.sf_account_id ?? null,
      funder_type: body.funder_type ?? null,
      restriction: body.restriction ?? null,
      program_name: body.program_name ?? null,
      request_amount: body.request_amount ?? null,
      submission_date: body.submission_date ?? null,
      notes: body.notes ?? null,
      custom_fields: body.custom_fields ?? {},
      created_by: role,
    };
    const grant = await createGrant(input);
    return NextResponse.json({ grant }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
```

- [ ] **Step 2: Verify with curl**

```bash
curl -i -X POST http://localhost:3030/api/grants \
  -H 'Content-Type: application/json' \
  -b 'auth_token=grants' \
  -d '{"funder_name":"Test Foundation","request_amount":10000}'
```

Expected: `201`. Check Supabase `grants` for the new row.

- [ ] **Step 3: Commit**

```bash
git add dashboard/src/app/api/grants/route.ts
git commit -m "feat(grants): POST /api/grants (create) and GET list"
```

### Task 5.5: `GET /api/grants/field-definitions`

**Files:**
- Create: `dashboard/src/app/api/grants/field-definitions/route.ts`

- [ ] **Step 1: Write the route**

```ts
import { NextRequest, NextResponse } from "next/server";
import { getFieldDefinitions } from "@/lib/grants/queries";

export async function GET(request: NextRequest) {
  try {
    const templateId = request.nextUrl.searchParams.get("template_id");
    const defs = await getFieldDefinitions(templateId);
    return NextResponse.json({ definitions: defs });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add dashboard/src/app/api/grants/field-definitions/route.ts
git commit -m "feat(grants): GET /api/grants/field-definitions"
```

### Task 5.6: Custom-field renderer

**Files:**
- Create: `dashboard/src/components/grants/custom-field-renderer.tsx`

- [ ] **Step 1: Write the component**

```tsx
"use client";

import type { FieldDefinition } from "@/lib/grants/types";

interface Props {
  definitions: FieldDefinition[];
  values: Record<string, unknown>;
  onChange: (key: string, value: unknown) => void;
}

export function CustomFieldRenderer({ definitions, values, onChange }: Props) {
  if (definitions.length === 0) return null;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {definitions.map((def) => {
        const v = values[def.key];
        const id = `cf-${def.key}`;
        return (
          <div key={def.id} className="flex flex-col gap-1">
            <label htmlFor={id} className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              {def.label}
            </label>
            {def.field_type === "text" && (
              <input id={id} type="text" value={typeof v === "string" ? v : ""}
                onChange={(e) => onChange(def.key, e.target.value)}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
            )}
            {def.field_type === "number" && (
              <input id={id} type="number" value={typeof v === "number" ? v : ""}
                onChange={(e) => onChange(def.key, e.target.value === "" ? null : Number(e.target.value))}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
            )}
            {def.field_type === "date" && (
              <input id={id} type="date" value={typeof v === "string" ? v : ""}
                onChange={(e) => onChange(def.key, e.target.value || null)}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
            )}
            {def.field_type === "bool" && (
              <label className="flex items-center gap-2 text-sm">
                <input id={id} type="checkbox" checked={Boolean(v)}
                  onChange={(e) => onChange(def.key, e.target.checked)} />
                {def.label}
              </label>
            )}
            {def.field_type === "select" && (
              <select id={id} value={typeof v === "string" ? v : ""}
                onChange={(e) => onChange(def.key, e.target.value || null)}
                className="rounded-lg border border-border bg-background px-3 py-2 text-sm">
                <option value="">—</option>
                {(def.options ?? []).map((opt) => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            )}
          </div>
        );
      })}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add dashboard/src/components/grants/custom-field-renderer.tsx
git commit -m "feat(grants): dynamic custom-field renderer"
```

### Task 5.7: New-grant form and page

**Files:**
- Create: `dashboard/src/components/grants/grant-create-form.tsx`
- Create: `dashboard/src/app/(grants)/grants/new/page.tsx`

- [ ] **Step 1: Write the form (client component)**

`dashboard/src/components/grants/grant-create-form.tsx`:

```tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FunderSearchCombobox } from "./funder-search-combobox";
import { CustomFieldRenderer } from "./custom-field-renderer";
import type { FieldDefinition, GrantTemplate } from "@/lib/grants/types";

interface Props { templates: GrantTemplate[]; }

export function GrantCreateForm({ templates }: Props) {
  const router = useRouter();
  const [templateId, setTemplateId] = useState<string | null>(null);
  const [funder, setFunder] = useState<{ sf_account_id: string | null; funder_name: string } | null>(null);
  const [funderType, setFunderType] = useState("");
  const [restriction, setRestriction] = useState("");
  const [programName, setProgramName] = useState("");
  const [requestAmount, setRequestAmount] = useState("");
  const [submissionDate, setSubmissionDate] = useState("");
  const [notes, setNotes] = useState("");
  const [customValues, setCustomValues] = useState<Record<string, unknown>>({});
  const [fieldDefs, setFieldDefs] = useState<FieldDefinition[]>([]);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const url = templateId
      ? `/api/grants/field-definitions?template_id=${templateId}`
      : `/api/grants/field-definitions`;
    fetch(url).then((r) => r.json()).then((j) => setFieldDefs(j.definitions ?? [])).catch(() => setFieldDefs([]));
  }, [templateId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!funder?.funder_name.trim()) { setError("Please pick or type a funder."); return; }
    setSubmitting(true);
    try {
      const res = await fetch("/api/grants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          template_id: templateId,
          funder_name: funder.funder_name,
          sf_account_id: funder.sf_account_id,
          funder_type: funderType || null,
          restriction: restriction || null,
          program_name: programName.trim() || null,
          request_amount: requestAmount ? Number(requestAmount) : null,
          submission_date: submissionDate || null,
          notes: notes.trim() || null,
          custom_fields: customValues,
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error ?? "Failed to create grant");
      }
      const { grant } = await res.json();
      router.push(`/grants/${grant.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      <section className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Template</label>
        <select value={templateId ?? ""} onChange={(e) => setTemplateId(e.target.value || null)}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
          <option value="">— None (blank) —</option>
          {templates.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
        </select>
      </section>

      <section className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Funder</label>
        <FunderSearchCombobox value={funder} onChange={setFunder} />
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Funder type</label>
          <select value={funderType} onChange={(e) => setFunderType(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
            <option value="">—</option>
            <option value="corporate">Corporate</option>
            <option value="private_foundation">Private Foundation</option>
            <option value="individual">Individual</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Restriction</label>
          <select value={restriction} onChange={(e) => setRestriction(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm">
            <option value="">—</option>
            <option value="restricted">Restricted</option>
            <option value="unrestricted">Unrestricted</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Program name</label>
          <input value={programName} onChange={(e) => setProgramName(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
            placeholder="e.g., LifeWorks, Pathways Project" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Requested amount</label>
          <input type="number" min="0" step="0.01" value={requestAmount} onChange={(e) => setRequestAmount(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Submission date</label>
          <input type="date" value={submissionDate} onChange={(e) => setSubmissionDate(e.target.value)}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        </div>
      </div>

      <section className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Notes</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4}
          className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
      </section>

      {fieldDefs.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold">Custom fields</h2>
          <CustomFieldRenderer definitions={fieldDefs} values={customValues}
            onChange={(k, v) => setCustomValues((prev) => ({ ...prev, [k]: v }))} />
        </section>
      )}

      {error && <p className="text-sm text-destructive font-medium">{error}</p>}
      <div className="flex justify-end gap-3">
        <button type="submit" disabled={submitting}
          className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
          {submitting ? "Creating…" : "Create grant"}
        </button>
      </div>
    </form>
  );
}
```

- [ ] **Step 2: Write the page**

`dashboard/src/app/(grants)/grants/new/page.tsx`:

```tsx
import { getTemplates } from "@/lib/grants/queries";
import { GrantCreateForm } from "@/components/grants/grant-create-form";

export const dynamic = "force-dynamic";

export default async function NewGrantPage() {
  const templates = await getTemplates();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">New grant</h1>
      <GrantCreateForm templates={templates} />
    </div>
  );
}
```

- [ ] **Step 3: Verify**

Log in as grants, click "+ New grant", pick Corporate Sponsor, type a funder name, pick "Use free-text funder," fill fields, submit. Expect redirect to `/grants/[id]` (will 404 until Phase 6). Confirm a row in Supabase `grants` and several rows in `grant_tasks`.

- [ ] **Step 4: Commit**

```bash
git add dashboard/src/app/\(grants\)/grants/new/page.tsx dashboard/src/components/grants/grant-create-form.tsx
git commit -m "feat(grants): new-grant form with template + custom fields"
```

---

## Phase 6 — Grant detail page + award + SF writeback

### Task 6.1: Grant detail server page (shell + overview tab)

**Files:**
- Create: `dashboard/src/app/(grants)/grants/[id]/page.tsx`
- Create: `dashboard/src/components/grants/grant-detail-overview.tsx`
- Create: `dashboard/src/components/grants/grant-detail-tabs.tsx`

- [ ] **Step 1: Write the tabs client wrapper**

`dashboard/src/components/grants/grant-detail-tabs.tsx`:

```tsx
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab { key: string; label: string; disabled?: boolean; disabledReason?: string; }
interface Props { tabs: Tab[]; children: Record<string, React.ReactNode>; }

export function GrantDetailTabs({ tabs, children }: Props) {
  const firstEnabled = tabs.find((t) => !t.disabled)?.key ?? tabs[0].key;
  const [active, setActive] = useState<string>(firstEnabled);
  return (
    <div>
      <div className="flex border-b border-border">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => !t.disabled && setActive(t.key)}
            disabled={t.disabled}
            title={t.disabled ? t.disabledReason : undefined}
            className={cn(
              "px-4 py-2.5 text-sm font-medium border-b-2 -mb-px",
              t.disabled ? "text-muted-foreground/50 cursor-not-allowed border-transparent" :
              active === t.key ? "text-primary border-primary" :
              "text-muted-foreground border-transparent hover:text-foreground"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{children[active]}</div>
    </div>
  );
}
```

- [ ] **Step 2: Write the overview component**

`dashboard/src/components/grants/grant-detail-overview.tsx`:

```tsx
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Grant, GrantReport } from "@/lib/grants/types";

interface Props {
  grant: Grant;
  instanceUrl: string;
  nextDueReport: GrantReport | null;
}

function FragmentEntry({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-muted-foreground">{label}</dt>
      <dd>{value}</dd>
    </>
  );
}

export function GrantDetailOverview({ grant, instanceUrl, nextDueReport }: Props) {
  const opportunityUrl = grant.sf_opportunity_id
    ? `${instanceUrl}/lightning/r/Opportunity/${grant.sf_opportunity_id}/view`
    : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <section>
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Core</h3>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <dt className="text-muted-foreground">Funder</dt><dd>{grant.funder_name}</dd>
            <dt className="text-muted-foreground">Funder type</dt><dd>{grant.funder_type ?? "—"}</dd>
            <dt className="text-muted-foreground">Program</dt><dd>{grant.program_name ?? "—"}</dd>
            <dt className="text-muted-foreground">Restriction</dt><dd>{grant.restriction ?? "—"}</dd>
            <dt className="text-muted-foreground">Requested</dt><dd>{formatCurrency(grant.request_amount)}</dd>
            <dt className="text-muted-foreground">Awarded</dt><dd>{formatCurrency(grant.amount_awarded)}</dd>
            <dt className="text-muted-foreground">Received</dt><dd>{formatCurrency(grant.amount_received)}</dd>
            <dt className="text-muted-foreground">Submitted</dt><dd>{formatDate(grant.submission_date)}</dd>
            <dt className="text-muted-foreground">Award date</dt><dd>{formatDate(grant.award_date)}</dd>
            <dt className="text-muted-foreground">Grant closes</dt><dd>{formatDate(grant.grant_closes_date)}</dd>
            <dt className="text-muted-foreground">Recurring</dt><dd>{grant.is_recurring ? "Yes" : "No"}</dd>
            {grant.is_recurring && (
              <>
                <dt className="text-muted-foreground">Renewal due</dt>
                <dd>{formatDate(grant.renewal_due_date)}</dd>
              </>
            )}
          </dl>
        </section>

        {Object.keys(grant.custom_fields).length > 0 && (
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Custom fields</h3>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {Object.entries(grant.custom_fields).map(([k, v]) => (
                <FragmentEntry key={k} label={k} value={v == null ? "—" : String(v)} />
              ))}
            </dl>
          </section>
        )}

        {grant.notes && (
          <section>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Notes</h3>
            <p className="text-sm whitespace-pre-wrap">{grant.notes}</p>
          </section>
        )}
      </div>

      <aside className="space-y-4">
        {opportunityUrl && (
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Salesforce</div>
            <a href={opportunityUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
              Open Opportunity ↗
            </a>
          </div>
        )}
        {nextDueReport && (
          <div className="rounded-lg border border-amber-300 bg-amber-50 p-4">
            <div className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">Next action</div>
            <div className="text-sm">
              {nextDueReport.name} due <strong>{formatDate(nextDueReport.due_date)}</strong>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
```

- [ ] **Step 3: Write the page (shell with all tabs; individual tab contents added in later tasks)**

`dashboard/src/app/(grants)/grants/[id]/page.tsx`:

```tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  getGrantById, getReportsForGrant, getTasksForGrant,
  getAttachmentsForGrant, getNotesForGrant,
} from "@/lib/grants/queries";
import { getInstanceUrl } from "@/lib/salesforce";
import { GrantDetailTabs } from "@/components/grants/grant-detail-tabs";
import { GrantDetailOverview } from "@/components/grants/grant-detail-overview";
import { StatusBadge } from "@/components/grants/status-badge";
import { formatCurrency, formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

interface PageProps { params: Promise<{ id: string }>; }

export default async function GrantDetailPage({ params }: PageProps) {
  const { id } = await params;
  const grant = await getGrantById(id);
  if (!grant) notFound();

  const [reports, tasks, attachments, notes, instanceUrl] = await Promise.all([
    getReportsForGrant(id),
    getTasksForGrant(id),
    getAttachmentsForGrant(id),
    getNotesForGrant(id),
    getInstanceUrl(),
  ]);

  const nextDueReport = reports.find((r) => !r.submitted_date) ?? null;

  return (
    <div className="space-y-6">
      <div>
        <Link href="/grants/pipeline" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-3">
          <ArrowLeft className="h-4 w-4" /> Back to Pipeline
        </Link>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="text-2xl font-bold">{grant.funder_name}</h1>
          <StatusBadge status={grant.status} />
          <span className="ml-auto text-sm text-muted-foreground">
            {formatCurrency(grant.amount_awarded ?? grant.request_amount)}
            {grant.award_date && ` · awarded ${formatDate(grant.award_date)}`}
          </span>
        </div>
      </div>

      <GrantDetailTabs
        tabs={[
          { key: "overview", label: "Overview" },
          { key: "tasks", label: `Tasks (${tasks.length})` },
          { key: "reports", label: `Reports (${reports.length})` },
          { key: "files", label: `Files (${attachments.length})` },
          { key: "notes", label: "Notes" },
          { key: "participants", label: "Participants", disabled: true, disabledReason: "Coming in v2" },
        ]}
      >
        {{
          overview: <GrantDetailOverview grant={grant} instanceUrl={instanceUrl} nextDueReport={nextDueReport} />,
          tasks: <div className="text-sm text-muted-foreground">Tasks tab wired in Task 7.1.</div>,
          reports: <div className="text-sm text-muted-foreground">Reports tab wired in Task 7.2.</div>,
          files: <div className="text-sm text-muted-foreground">Files tab wired in Task 9.3.</div>,
          notes: <div className="text-sm text-muted-foreground">Notes tab wired in Task 8.2.</div>,
          participants: <div className="text-sm text-muted-foreground">Coming in v2.</div>,
        }}
      </GrantDetailTabs>
    </div>
  );
}
```

- [ ] **Step 4: Write the status badge component**

`dashboard/src/components/grants/status-badge.tsx`:

```tsx
import type { GrantStatus } from "@/lib/grants/types";

const COLORS: Record<GrantStatus, string> = {
  pending: "bg-amber-100 text-amber-800",
  awarded: "bg-green-100 text-green-800",
  received: "bg-emerald-100 text-emerald-800",
  open: "bg-blue-100 text-blue-800",
  declined: "bg-red-100 text-red-800",
};

const LABELS: Record<GrantStatus, string> = {
  pending: "Pending", awarded: "Awarded", received: "Received",
  open: "Open", declined: "Declined",
};

export function StatusBadge({ status }: { status: GrantStatus }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${COLORS[status]}`}>
      {LABELS[status]}
    </span>
  );
}
```

- [ ] **Step 5: Verify**

Open the grant created in Task 5.7. Overview tab shows core fields. Other tabs show placeholder text.

- [ ] **Step 6: Commit**

```bash
git add dashboard/src/app/\(grants\)/grants/\[id\]/page.tsx \
        dashboard/src/components/grants/grant-detail-overview.tsx \
        dashboard/src/components/grants/grant-detail-tabs.tsx \
        dashboard/src/components/grants/status-badge.tsx
git commit -m "feat(grants): grant detail page shell with overview tab"
```

### Task 6.2: `GET /api/grants/[id]` + `PATCH` + `DELETE`

**Files:**
- Create: `dashboard/src/app/api/grants/[id]/route.ts`

- [ ] **Step 1: Write the routes**

```ts
import { NextRequest, NextResponse } from "next/server";
import { getGrantById } from "@/lib/grants/queries";
import { updateGrant, deleteGrant } from "@/lib/grants/mutations";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const grant = await getGrantById(id);
  if (!grant) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ grant });
}

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const patch = await request.json();
  // Whitelist of mutable fields
  const allowed = [
    "funder_name", "sf_account_id", "funder_type", "program_name", "restriction",
    "request_amount", "submission_date", "acknowledged_date", "receipt_date",
    "amount_received", "notes", "custom_fields", "is_recurring", "renewal_due_date",
  ] as const;
  const clean: Record<string, unknown> = {};
  for (const k of allowed) if (k in patch) clean[k] = patch[k];
  try {
    const grant = await updateGrant(id, clean);
    return NextResponse.json({ grant });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin") {
    return NextResponse.json({ error: "Forbidden (admin only)" }, { status: 403 });
  }
  const { id } = await params;
  try {
    await deleteGrant(id);
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add dashboard/src/app/api/grants/\[id\]/route.ts
git commit -m "feat(grants): GET/PATCH/DELETE /api/grants/[id]"
```

### Task 6.3: SF sync helper (upsert Opportunity)

**Files:**
- Create: `dashboard/src/lib/grants/sf-sync.ts`

- [ ] **Step 1: Write the helper**

```ts
import { getConnection } from "@/lib/salesforce";
import type { Grant } from "@/lib/grants/types";

export interface SfSyncResult {
  ok: boolean;
  sf_opportunity_id?: string;
  error?: string;
}

/** Upsert an SF Opportunity for a grant that's been marked awarded. */
export async function syncGrantToSalesforce(grant: Grant): Promise<SfSyncResult> {
  try {
    const conn = await getConnection();
    const oppName = grant.program_name
      ? `${grant.funder_name} - ${grant.program_name}`
      : `${grant.funder_name} - Grant`;

    const payload = {
      Name: oppName,
      StageName: "Awarded",
      CloseDate: grant.award_date ?? new Date().toISOString().slice(0, 10),
      Amount: grant.amount_awarded ?? 0,
      ...(grant.sf_account_id ? { AccountId: grant.sf_account_id } : {}),
      // NPSP + JPF orgs commonly have a RecordType for grants; set Type as a hint
      // that downstream reports can match on. Field/value adjust if the org uses a custom picklist.
      Type: "Grant Received",
    };

    if (grant.sf_opportunity_id) {
      await conn.sobject("Opportunity").update({ Id: grant.sf_opportunity_id, ...payload });
      return { ok: true, sf_opportunity_id: grant.sf_opportunity_id };
    }

    const result = (await conn.sobject("Opportunity").create(payload)) as { id: string; success: boolean; errors?: unknown[] };
    if (!result.success || !result.id) {
      return { ok: false, error: `SF create failed: ${JSON.stringify(result.errors)}` };
    }
    return { ok: true, sf_opportunity_id: result.id };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}
```

- [ ] **Step 2: Commit**

```bash
cd dashboard && npx tsc --noEmit
git add dashboard/src/lib/grants/sf-sync.ts
git commit -m "feat(grants): SF Opportunity upsert helper"
```

### Task 6.4: Award endpoint

**Files:**
- Create: `dashboard/src/app/api/grants/[id]/award/route.ts`

- [ ] **Step 1: Write the route**

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getGrantById } from "@/lib/grants/queries";
import { syncGrantToSalesforce } from "@/lib/grants/sf-sync";
import { getCurrentRole } from "@/lib/grants/role";
import type { Grant } from "@/lib/grants/types";

interface AwardInput {
  amount_awarded: number;
  award_date: string; // YYYY-MM-DD
  grant_closes_date: string | null;
  is_recurring: boolean;
  renewal_due_date: string | null;
  reports: { name: string; due_date: string }[];
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const body = (await request.json()) as AwardInput;

  const grant = await getGrantById(id);
  if (!grant) return NextResponse.json({ error: "Not found" }, { status: 404 });

  const s = getSupabase();

  // 1. Update the grant
  const { error: updErr } = await s.from("grants").update({
    status: "awarded",
    amount_awarded: body.amount_awarded,
    award_date: body.award_date,
    grant_closes_date: body.grant_closes_date,
    is_recurring: body.is_recurring,
    renewal_due_date: body.renewal_due_date,
  }).eq("id", id);
  if (updErr) {
    return NextResponse.json({ error: `Supabase update failed: ${updErr.message}` }, { status: 500 });
  }

  // 2. Insert reports
  if (body.reports.length > 0) {
    const { error: repErr } = await s.from("grant_reports").insert(
      body.reports.map((r) => ({ grant_id: id, name: r.name, due_date: r.due_date, sections: [] }))
    );
    if (repErr) {
      return NextResponse.json({ error: `Report insert failed: ${repErr.message}` }, { status: 500 });
    }
  }

  // 3. Set task due_dates based on template offset (fetch the template again)
  if (grant.template_id) {
    const { data: tmpl } = await s.from("grant_templates")
      .select("default_checklist_items").eq("id", grant.template_id).maybeSingle();
    const items = (tmpl?.default_checklist_items as { label: string; offset_days_from_award: number | null }[]) ?? [];
    const offsetByLabel = new Map(items.map((i) => [i.label, i.offset_days_from_award]));
    const { data: tasks } = await s.from("grant_tasks").select("id, label, due_date").eq("grant_id", id);
    for (const t of tasks ?? []) {
      if (t.due_date !== null) continue;
      const offset = offsetByLabel.get(t.label);
      if (offset == null) continue;
      await s.from("grant_tasks").update({ due_date: addDays(body.award_date, offset) }).eq("id", t.id);
    }
  }

  // 4. SF writeback
  const refreshed = await getGrantById(id);
  const sync = await syncGrantToSalesforce(refreshed!);
  if (sync.ok && sync.sf_opportunity_id && !refreshed!.sf_opportunity_id) {
    await s.from("grants").update({ sf_opportunity_id: sync.sf_opportunity_id }).eq("id", id);
  }

  return NextResponse.json({
    ok: true,
    sf_sync: sync.ok ? "succeeded" : "failed",
    error: sync.ok ? undefined : sync.error,
  });
}
```

- [ ] **Step 2: Commit**

```bash
git add dashboard/src/app/api/grants/\[id\]/award/route.ts
git commit -m "feat(grants): /award endpoint with task due-date seeding and SF writeback"
```

### Task 6.5: Sync retry endpoint

**Files:**
- Create: `dashboard/src/app/api/grants/[id]/sync/route.ts`

- [ ] **Step 1: Write the route**

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getGrantById } from "@/lib/grants/queries";
import { syncGrantToSalesforce } from "@/lib/grants/sf-sync";
import { getCurrentRole } from "@/lib/grants/role";

export async function POST(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const grant = await getGrantById(id);
  if (!grant) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (grant.status !== "awarded" && grant.status !== "received" && grant.status !== "open") {
    return NextResponse.json({ error: "Grant is not in an awarded state" }, { status: 400 });
  }
  const sync = await syncGrantToSalesforce(grant);
  if (sync.ok && sync.sf_opportunity_id && !grant.sf_opportunity_id) {
    const s = getSupabase();
    await s.from("grants").update({ sf_opportunity_id: sync.sf_opportunity_id }).eq("id", id);
  }
  return NextResponse.json({
    ok: sync.ok,
    sf_opportunity_id: sync.sf_opportunity_id,
    error: sync.ok ? undefined : sync.error,
  });
}
```

- [ ] **Step 2: Commit**

```bash
git add dashboard/src/app/api/grants/\[id\]/sync/route.ts
git commit -m "feat(grants): /sync retry endpoint (idempotent SF writeback)"
```

### Task 6.6: Mark-awarded modal + SF sync banner

**Files:**
- Create: `dashboard/src/components/grants/mark-awarded-button.tsx`
- Create: `dashboard/src/components/grants/sf-sync-banner.tsx`
- Modify: `dashboard/src/app/(grants)/grants/[id]/page.tsx`

- [ ] **Step 1: Write the sync banner**

`dashboard/src/components/grants/sf-sync-banner.tsx`:

```tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SfSyncBanner({ grantId }: { grantId: string }) {
  const router = useRouter();
  const [retrying, setRetrying] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function retry() {
    setRetrying(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/grants/${grantId}/sync`, { method: "POST" });
      const j = await res.json();
      if (j.ok) {
        setMessage("Synced to Salesforce.");
        router.refresh();
      } else {
        setMessage(`Still failing: ${j.error ?? "unknown error"}`);
      }
    } finally {
      setRetrying(false);
    }
  }

  return (
    <div className="rounded-lg border border-red-300 bg-red-50 p-4 flex items-center justify-between gap-4">
      <div className="text-sm text-red-800">
        <strong>Salesforce sync failed.</strong> This grant is saved here but hasn&apos;t been
        mirrored into Salesforce yet.
        {message && <div className="mt-1 text-xs">{message}</div>}
      </div>
      <button type="button" onClick={retry} disabled={retrying}
        className="btn-pill bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 text-xs">
        {retrying ? "Retrying…" : "Retry"}
      </button>
    </div>
  );
}
```

- [ ] **Step 2: Write the mark-awarded button/modal**

`dashboard/src/components/grants/mark-awarded-button.tsx`:

```tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props { grantId: string; currentStatus: string; }

export function MarkAwardedButton({ grantId, currentStatus }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const [awardDate, setAwardDate] = useState(new Date().toISOString().slice(0, 10));
  const [closesDate, setClosesDate] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [renewalDate, setRenewalDate] = useState("");
  const [reports, setReports] = useState<{ name: string; due_date: string }[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (currentStatus === "awarded" || currentStatus === "received" || currentStatus === "open") return null;

  function addReport() { setReports((r) => [...r, { name: `Report ${r.length + 1}`, due_date: "" }]); }
  function removeReport(idx: number) { setReports((r) => r.filter((_, i) => i !== idx)); }

  async function submit() {
    setError("");
    if (!amount || !awardDate) { setError("Amount and award date are required."); return; }
    setSubmitting(true);
    try {
      const res = await fetch(`/api/grants/${grantId}/award`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount_awarded: Number(amount),
          award_date: awardDate,
          grant_closes_date: closesDate || null,
          is_recurring: recurring,
          renewal_due_date: recurring ? (renewalDate || null) : null,
          reports: reports.filter((r) => r.name && r.due_date),
        }),
      });
      const j = await res.json();
      if (!res.ok) { setError(j.error ?? "Failed"); setSubmitting(false); return; }
      setOpen(false);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
      setSubmitting(false);
    }
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)}
        className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90 text-sm">
        Mark awarded
      </button>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-card rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 space-y-4">
            <h2 className="text-lg font-bold">Mark grant awarded</h2>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-1 text-sm">
                Amount awarded
                <input type="number" min="0" step="0.01" value={amount} onChange={(e) => setAmount(e.target.value)}
                  className="rounded-lg border border-border bg-background px-3 py-2" />
              </label>
              <label className="flex flex-col gap-1 text-sm">
                Award date
                <input type="date" value={awardDate} onChange={(e) => setAwardDate(e.target.value)}
                  className="rounded-lg border border-border bg-background px-3 py-2" />
              </label>
              <label className="flex flex-col gap-1 text-sm col-span-2">
                Grant closes (optional)
                <input type="date" value={closesDate} onChange={(e) => setClosesDate(e.target.value)}
                  className="rounded-lg border border-border bg-background px-3 py-2" />
              </label>
              <label className="col-span-2 flex items-center gap-2 text-sm">
                <input type="checkbox" checked={recurring} onChange={(e) => setRecurring(e.target.checked)} />
                Recurring grant (renews annually)
              </label>
              {recurring && (
                <label className="col-span-2 flex flex-col gap-1 text-sm">
                  Renewal due date
                  <input type="date" value={renewalDate} onChange={(e) => setRenewalDate(e.target.value)}
                    className="rounded-lg border border-border bg-background px-3 py-2" />
                </label>
              )}
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold">Reports due</h3>
                <button type="button" onClick={addReport} className="text-xs text-primary hover:underline">+ add</button>
              </div>
              {reports.length === 0 && <p className="text-xs text-muted-foreground">No report deadlines. Add any the funder requires.</p>}
              <div className="space-y-2">
                {reports.map((r, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <input type="text" value={r.name} placeholder="Report name"
                      onChange={(e) => { const next = [...reports]; next[idx] = { ...r, name: e.target.value }; setReports(next); }}
                      className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm" />
                    <input type="date" value={r.due_date}
                      onChange={(e) => { const next = [...reports]; next[idx] = { ...r, due_date: e.target.value }; setReports(next); }}
                      className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
                    <button type="button" onClick={() => removeReport(idx)} className="text-xs text-muted-foreground">×</button>
                  </div>
                ))}
              </div>
            </div>
            {error && <p className="text-sm text-destructive font-medium">{error}</p>}
            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setOpen(false)} className="btn-pill">Cancel</button>
              <button type="button" onClick={submit} disabled={submitting}
                className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50">
                {submitting ? "Saving…" : "Mark awarded"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 3: Wire into the grant detail page**

Edit `dashboard/src/app/(grants)/grants/[id]/page.tsx`. Import the two components at the top:

```tsx
import { MarkAwardedButton } from "@/components/grants/mark-awarded-button";
import { SfSyncBanner } from "@/components/grants/sf-sync-banner";
```

In the header block (where the title + status badge render), add the `MarkAwardedButton` after the ml-auto span. Before the tabs, add the sync banner when the grant is awarded/received/open but lacks `sf_opportunity_id`:

```tsx
<div className="flex items-baseline gap-3 flex-wrap">
  <h1 className="text-2xl font-bold">{grant.funder_name}</h1>
  <StatusBadge status={grant.status} />
  <span className="ml-auto text-sm text-muted-foreground">
    {formatCurrency(grant.amount_awarded ?? grant.request_amount)}
    {grant.award_date && ` · awarded ${formatDate(grant.award_date)}`}
  </span>
  <MarkAwardedButton grantId={grant.id} currentStatus={grant.status} />
</div>

{(grant.status === "awarded" || grant.status === "received" || grant.status === "open") && !grant.sf_opportunity_id && (
  <SfSyncBanner grantId={grant.id} />
)}
```

- [ ] **Step 4: Verify end-to-end**

1. Create a grant.
2. Open it, click **Mark awarded**, fill in $10,000 / today's date / one report due in 90 days, submit.
3. Grant detail refreshes: status = Awarded. Stats show the amount + award date.
4. If SF sync succeeded: Salesforce-link card in the overview aside shows a link; no red banner.
5. If SF sync failed: red banner with Retry button — click it and confirm behavior.

- [ ] **Step 5: Commit**

```bash
git add dashboard/src/components/grants/mark-awarded-button.tsx \
        dashboard/src/components/grants/sf-sync-banner.tsx \
        dashboard/src/app/\(grants\)/grants/\[id\]/page.tsx
git commit -m "feat(grants): mark-awarded modal, SF sync banner, retry endpoint"
```

---

## Phase 7 — Reports + Tasks tabs

### Task 7.1: Tasks API + tab

**Files:**
- Create: `dashboard/src/app/api/grants/[id]/tasks/route.ts`
- Create: `dashboard/src/app/api/grants/[id]/tasks/[taskId]/route.ts`
- Create: `dashboard/src/components/grants/grant-detail-tasks.tsx`
- Modify: `dashboard/src/app/(grants)/grants/[id]/page.tsx`

- [ ] **Step 1: Write the list/create route**

`dashboard/src/app/api/grants/[id]/tasks/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getTasksForGrant } from "@/lib/grants/queries";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET(_r: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tasks = await getTasksForGrant(id);
  return NextResponse.json({ tasks });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const { label, due_date } = await request.json();
  if (!label) return NextResponse.json({ error: "label required" }, { status: 400 });
  const s = getSupabase();
  const { count } = await s.from("grant_tasks").select("*", { count: "exact", head: true }).eq("grant_id", id);
  const { data, error } = await s.from("grant_tasks").insert({
    grant_id: id, label, due_date: due_date ?? null, sort_order: count ?? 0,
  }).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ task: data }, { status: 201 });
}
```

- [ ] **Step 2: Write the per-task route**

`dashboard/src/app/api/grants/[id]/tasks/[taskId]/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getCurrentRole } from "@/lib/grants/role";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; taskId: string }> }
) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { taskId } = await params;
  const body = await request.json();
  const allowed = ["label", "due_date", "completed_at", "completed_by"] as const;
  const clean: Record<string, unknown> = {};
  for (const k of allowed) if (k in body) clean[k] = body[k];
  const s = getSupabase();
  const { data, error } = await s.from("grant_tasks").update(clean).eq("id", taskId).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ task: data });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string; taskId: string }> }
) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { taskId } = await params;
  const s = getSupabase();
  const { error } = await s.from("grant_tasks").delete().eq("id", taskId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 3: Write the tasks tab component**

`dashboard/src/components/grants/grant-detail-tasks.tsx`:

```tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, Circle, Plus, Trash2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { GrantTask } from "@/lib/grants/types";

interface Props { grantId: string; role: "admin" | "grants" | "dev" | null; initialTasks: GrantTask[]; }

export function GrantDetailTasks({ grantId, role, initialTasks }: Props) {
  const router = useRouter();
  const [tasks, setTasks] = useState(initialTasks);
  const [newLabel, setNewLabel] = useState("");
  const [newDue, setNewDue] = useState("");

  async function toggle(task: GrantTask) {
    const completed_at = task.completed_at ? null : new Date().toISOString();
    setTasks((t) => t.map((x) => x.id === task.id ? { ...x, completed_at, completed_by: completed_at ? role : null } : x));
    await fetch(`/api/grants/${grantId}/tasks/${task.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed_at, completed_by: completed_at ? role : null }),
    });
    router.refresh();
  }

  async function addTask() {
    if (!newLabel.trim()) return;
    const res = await fetch(`/api/grants/${grantId}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ label: newLabel.trim(), due_date: newDue || null }),
    });
    if (res.ok) {
      const { task } = await res.json();
      setTasks((t) => [...t, task]);
      setNewLabel(""); setNewDue("");
    }
  }

  async function removeTask(taskId: string) {
    await fetch(`/api/grants/${grantId}/tasks/${taskId}`, { method: "DELETE" });
    setTasks((t) => t.filter((x) => x.id !== taskId));
  }

  return (
    <div className="space-y-3">
      <ul className="divide-y divide-border border border-border rounded-lg bg-card">
        {tasks.length === 0 && (
          <li className="px-4 py-6 text-sm text-muted-foreground text-center">No tasks yet.</li>
        )}
        {tasks.map((t) => (
          <li key={t.id} className="px-4 py-3 flex items-center gap-3 text-sm">
            <button type="button" onClick={() => toggle(t)} className="text-primary">
              {t.completed_at ? <Check className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
            </button>
            <div className="flex-1">
              <div className={t.completed_at ? "line-through text-muted-foreground" : ""}>{t.label}</div>
              {t.due_date && <div className="text-xs text-muted-foreground">Due {formatDate(t.due_date)}</div>}
            </div>
            <button type="button" onClick={() => removeTask(t.id)} className="text-muted-foreground hover:text-destructive">
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 items-center">
        <input value={newLabel} onChange={(e) => setNewLabel(e.target.value)} placeholder="Add a task..."
          className="flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        <input type="date" value={newDue} onChange={(e) => setNewDue(e.target.value)}
          className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        <button type="button" onClick={addTask} className="btn-pill bg-primary text-primary-foreground text-sm">
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Wire the tab in grant detail page**

Edit `dashboard/src/app/(grants)/grants/[id]/page.tsx`:

Add imports at top:

```tsx
import { getCurrentRole } from "@/lib/grants/role";
import { GrantDetailTasks } from "@/components/grants/grant-detail-tasks";
```

Before the return, add:

```tsx
const role = await getCurrentRole();
```

Replace the tasks placeholder in the tabs children:

```tsx
tasks: <GrantDetailTasks grantId={grant.id} role={role} initialTasks={tasks} />,
```

- [ ] **Step 5: Verify & commit**

Open grant detail → Tasks tab. Toggle a checklist item, add a new one, delete one.

```bash
git add dashboard/src/app/api/grants/\[id\]/tasks \
        dashboard/src/components/grants/grant-detail-tasks.tsx \
        dashboard/src/app/\(grants\)/grants/\[id\]/page.tsx
git commit -m "feat(grants): tasks tab with add/toggle/delete"
```

### Task 7.2: Notes API + tab

**Files:**
- Create: `dashboard/src/app/api/grants/[id]/notes/route.ts`
- Create: `dashboard/src/components/grants/grant-detail-notes.tsx`
- Modify: `dashboard/src/app/(grants)/grants/[id]/page.tsx`

- [ ] **Step 1: Write the route (append-only)**

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getNotesForGrant } from "@/lib/grants/queries";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET(_r: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const notes = await getNotesForGrant(id);
  return NextResponse.json({ notes });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const { body } = await request.json();
  if (!body || !body.trim()) return NextResponse.json({ error: "body required" }, { status: 400 });
  const s = getSupabase();
  const { data, error } = await s.from("grant_notes").insert({
    grant_id: id, body: body.trim(), author: role,
  }).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ note: data }, { status: 201 });
}
```

- [ ] **Step 2: Write the notes tab**

`dashboard/src/components/grants/grant-detail-notes.tsx`:

```tsx
"use client";

import { useState } from "react";
import { formatDate } from "@/lib/utils";
import type { GrantNote } from "@/lib/grants/types";

interface Props { grantId: string; initialNotes: GrantNote[]; }

export function GrantDetailNotes({ grantId, initialNotes }: Props) {
  const [notes, setNotes] = useState(initialNotes);
  const [draft, setDraft] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function submit() {
    if (!draft.trim()) return;
    setSubmitting(true);
    const res = await fetch(`/api/grants/${grantId}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body: draft }),
    });
    setSubmitting(false);
    if (res.ok) {
      const { note } = await res.json();
      setNotes((n) => [note, ...n]);
      setDraft("");
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows={3}
          placeholder="Add a note..." className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm" />
        <div className="flex justify-end">
          <button type="button" onClick={submit} disabled={submitting || !draft.trim()}
            className="btn-pill bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 text-sm">
            {submitting ? "Saving…" : "Add note"}
          </button>
        </div>
      </div>
      <ul className="divide-y divide-border border border-border rounded-lg bg-card">
        {notes.length === 0 && (
          <li className="px-4 py-6 text-sm text-muted-foreground text-center">No notes yet.</li>
        )}
        {notes.map((n) => (
          <li key={n.id} className="px-4 py-3 text-sm">
            <div className="whitespace-pre-wrap">{n.body}</div>
            <div className="text-xs text-muted-foreground mt-1">
              {n.author} · {formatDate(n.created_at)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 3: Wire into the page**

In `dashboard/src/app/(grants)/grants/[id]/page.tsx`, import `GrantDetailNotes` and replace the notes placeholder:

```tsx
notes: <GrantDetailNotes grantId={grant.id} initialNotes={notes} />,
```

- [ ] **Step 4: Commit**

```bash
git add dashboard/src/app/api/grants/\[id\]/notes \
        dashboard/src/components/grants/grant-detail-notes.tsx \
        dashboard/src/app/\(grants\)/grants/\[id\]/page.tsx
git commit -m "feat(grants): append-only notes tab"
```

### Task 7.3: Reports API (list/create/update)

**Files:**
- Create: `dashboard/src/app/api/grants/[id]/reports/route.ts`
- Create: `dashboard/src/app/api/grants/[id]/reports/[reportId]/route.ts`

- [ ] **Step 1: Write the list/create route**

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getReportsForGrant } from "@/lib/grants/queries";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET(_r: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const reports = await getReportsForGrant(id);
  return NextResponse.json({ reports });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const { name, due_date } = await request.json();
  if (!name || !due_date) return NextResponse.json({ error: "name and due_date required" }, { status: 400 });
  const s = getSupabase();
  const { data, error } = await s.from("grant_reports").insert({
    grant_id: id, name, due_date, sections: [],
  }).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ report: data }, { status: 201 });
}
```

- [ ] **Step 2: Write the per-report route**

`dashboard/src/app/api/grants/[id]/reports/[reportId]/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getCurrentRole } from "@/lib/grants/role";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; reportId: string }> }
) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { reportId } = await params;
  const body = await request.json();
  const allowed = ["name", "due_date", "submitted_date", "sections"] as const;
  const clean: Record<string, unknown> = {};
  for (const k of allowed) if (k in body) clean[k] = body[k];
  const s = getSupabase();
  const { data, error } = await s.from("grant_reports").update(clean).eq("id", reportId).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ report: data });
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string; reportId: string }> }
) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden (admin only)" }, { status: 403 });
  const { reportId } = await params;
  const s = getSupabase();
  const { error } = await s.from("grant_reports").delete().eq("id", reportId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 3: Commit**

```bash
git add dashboard/src/app/api/grants/\[id\]/reports
git commit -m "feat(grants): report CRUD API"
```

### Task 7.4: Report editor component + tab

**Files:**
- Create: `dashboard/src/components/grants/report-editor.tsx`
- Create: `dashboard/src/components/grants/grant-detail-reports.tsx`
- Modify: `dashboard/src/app/(grants)/grants/[id]/page.tsx`

- [ ] **Step 1: Write the editor**

`dashboard/src/components/grants/report-editor.tsx`:

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import type { GrantReport, ReportSection, ReportSectionType } from "@/lib/grants/types";

interface Props { grantId: string; report: GrantReport; onChanged: (report: GrantReport) => void; }

function defaultContent(type: ReportSectionType): unknown {
  if (type === "narrative") return { markdown: "" };
  if (type === "financial") return { rows: [] };
  return { rows: [] };
}

export function ReportEditor({ grantId, report, onChanged }: Props) {
  const [sections, setSections] = useState<ReportSection[]>(report.sections);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [submitted, setSubmitted] = useState<string | null>(report.submitted_date);

  useEffect(() => {
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      const res = await fetch(`/api/grants/${grantId}/reports/${report.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sections }),
      });
      if (res.ok) {
        const { report: updated } = await res.json();
        onChanged(updated);
      }
    }, 600);
    return () => { if (saveTimer.current) clearTimeout(saveTimer.current); };
  }, [sections, grantId, report.id, onChanged]);

  function addSection(type: ReportSectionType) {
    setSections((s) => [...s, { type, title: type === "narrative" ? "Narrative" : type === "financial" ? "Financial summary" : "Impact metrics", content: defaultContent(type) }]);
  }

  function updateSection(idx: number, patch: Partial<ReportSection>) {
    setSections((s) => s.map((x, i) => i === idx ? { ...x, ...patch } : x));
  }

  function removeSection(idx: number) {
    setSections((s) => s.filter((_, i) => i !== idx));
  }

  async function markSubmitted() {
    const today = new Date().toISOString().slice(0, 10);
    const res = await fetch(`/api/grants/${grantId}/reports/${report.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ submitted_date: today }),
    });
    if (res.ok) {
      setSubmitted(today);
      const { report: updated } = await res.json();
      onChanged(updated);
    }
  }

  return (
    <div className="space-y-4">
      {submitted && (
        <div className="rounded-md bg-emerald-50 border border-emerald-200 px-3 py-2 text-sm text-emerald-800">
          Submitted on {submitted}.
        </div>
      )}
      {sections.map((sec, idx) => (
        <div key={idx} className="rounded-lg border border-border bg-card p-4 space-y-2">
          <div className="flex items-center justify-between">
            <input value={sec.title} onChange={(e) => updateSection(idx, { title: e.target.value })}
              className="text-sm font-semibold bg-transparent border-none focus:outline-none focus:ring-0 p-0" />
            <button type="button" onClick={() => removeSection(idx)} className="text-muted-foreground hover:text-destructive">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
          {sec.type === "narrative" && (
            <textarea rows={6}
              value={(sec.content as { markdown: string }).markdown}
              onChange={(e) => updateSection(idx, { content: { markdown: e.target.value } })}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
              placeholder="Write the narrative here (plain text or markdown)..." />
          )}
          {sec.type === "financial" && (
            <FinancialTable
              rows={(sec.content as { rows: { category: string; planned: number | null; spent: number | null }[] }).rows}
              onChange={(rows) => updateSection(idx, { content: { rows } })} />
          )}
          {sec.type === "metric" && (
            <MetricTable
              rows={(sec.content as { rows: { key: string; target: number | null; actual: number | null }[] }).rows}
              onChange={(rows) => updateSection(idx, { content: { rows } })} />
          )}
        </div>
      ))}

      <div className="flex gap-2 flex-wrap">
        <button type="button" onClick={() => addSection("narrative")} className="btn-pill bg-muted text-foreground text-xs">
          <Plus className="h-3 w-3" /> Narrative
        </button>
        <button type="button" onClick={() => addSection("financial")} className="btn-pill bg-muted text-foreground text-xs">
          <Plus className="h-3 w-3" /> Financial
        </button>
        <button type="button" onClick={() => addSection("metric")} className="btn-pill bg-muted text-foreground text-xs">
          <Plus className="h-3 w-3" /> Metric
        </button>
        {!submitted && (
          <button type="button" onClick={markSubmitted}
            className="ml-auto btn-pill bg-primary text-primary-foreground text-xs">
            Mark submitted
          </button>
        )}
      </div>
    </div>
  );
}

function FinancialTable({
  rows, onChange,
}: { rows: { category: string; planned: number | null; spent: number | null }[]; onChange: (rows: { category: string; planned: number | null; spent: number | null }[]) => void; }) {
  return (
    <div className="space-y-1">
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-12 gap-2 items-center text-sm">
          <input className="col-span-6 rounded border border-border bg-background px-2 py-1"
            placeholder="Category" value={r.category}
            onChange={(e) => onChange(rows.map((x, j) => j === i ? { ...x, category: e.target.value } : x))} />
          <input type="number" className="col-span-3 rounded border border-border bg-background px-2 py-1"
            placeholder="Planned" value={r.planned ?? ""}
            onChange={(e) => onChange(rows.map((x, j) => j === i ? { ...x, planned: e.target.value === "" ? null : Number(e.target.value) } : x))} />
          <input type="number" className="col-span-2 rounded border border-border bg-background px-2 py-1"
            placeholder="Spent" value={r.spent ?? ""}
            onChange={(e) => onChange(rows.map((x, j) => j === i ? { ...x, spent: e.target.value === "" ? null : Number(e.target.value) } : x))} />
          <button type="button" onClick={() => onChange(rows.filter((_, j) => j !== i))}
            className="col-span-1 text-muted-foreground hover:text-destructive">×</button>
        </div>
      ))}
      <button type="button" onClick={() => onChange([...rows, { category: "", planned: null, spent: null }])}
        className="text-xs text-primary hover:underline">+ row</button>
    </div>
  );
}

function MetricTable({
  rows, onChange,
}: { rows: { key: string; target: number | null; actual: number | null }[]; onChange: (rows: { key: string; target: number | null; actual: number | null }[]) => void; }) {
  return (
    <div className="space-y-1">
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-12 gap-2 items-center text-sm">
          <input className="col-span-6 rounded border border-border bg-background px-2 py-1"
            placeholder="Metric" value={r.key}
            onChange={(e) => onChange(rows.map((x, j) => j === i ? { ...x, key: e.target.value } : x))} />
          <input type="number" className="col-span-3 rounded border border-border bg-background px-2 py-1"
            placeholder="Target" value={r.target ?? ""}
            onChange={(e) => onChange(rows.map((x, j) => j === i ? { ...x, target: e.target.value === "" ? null : Number(e.target.value) } : x))} />
          <input type="number" className="col-span-2 rounded border border-border bg-background px-2 py-1"
            placeholder="Actual" value={r.actual ?? ""}
            onChange={(e) => onChange(rows.map((x, j) => j === i ? { ...x, actual: e.target.value === "" ? null : Number(e.target.value) } : x))} />
          <button type="button" onClick={() => onChange(rows.filter((_, j) => j !== i))}
            className="col-span-1 text-muted-foreground hover:text-destructive">×</button>
        </div>
      ))}
      <button type="button" onClick={() => onChange([...rows, { key: "", target: null, actual: null }])}
        className="text-xs text-primary hover:underline">+ row</button>
    </div>
  );
}
```

- [ ] **Step 2: Write the reports tab wrapper**

`dashboard/src/components/grants/grant-detail-reports.tsx`:

```tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/utils";
import type { GrantReport } from "@/lib/grants/types";
import { ReportEditor } from "./report-editor";

interface Props { grantId: string; initialReports: GrantReport[]; }

export function GrantDetailReports({ grantId, initialReports }: Props) {
  const router = useRouter();
  const [reports, setReports] = useState(initialReports);
  const [selectedId, setSelectedId] = useState<string | null>(initialReports[0]?.id ?? null);
  const [newName, setNewName] = useState("");
  const [newDue, setNewDue] = useState("");

  async function addReport() {
    if (!newName.trim() || !newDue) return;
    const res = await fetch(`/api/grants/${grantId}/reports`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName.trim(), due_date: newDue }),
    });
    if (res.ok) {
      const { report } = await res.json();
      setReports((r) => [...r, report]);
      setSelectedId(report.id);
      setNewName(""); setNewDue("");
      router.refresh();
    }
  }

  const selected = reports.find((r) => r.id === selectedId) ?? null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <aside className="md:col-span-1 space-y-3">
        <ul className="divide-y divide-border border border-border rounded-lg bg-card">
          {reports.length === 0 && (
            <li className="px-3 py-4 text-xs text-muted-foreground text-center">No reports yet.</li>
          )}
          {reports.map((r) => (
            <li key={r.id}>
              <button type="button" onClick={() => setSelectedId(r.id)}
                className={`w-full text-left px-3 py-2 text-sm hover:bg-muted ${selectedId === r.id ? "bg-muted" : ""}`}>
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-muted-foreground">
                  Due {formatDate(r.due_date)}
                  {r.submitted_date && ` · submitted ${formatDate(r.submitted_date)}`}
                </div>
              </button>
            </li>
          ))}
        </ul>
        <div className="space-y-2 border border-border rounded-lg bg-card p-3">
          <div className="text-xs font-semibold">Add report</div>
          <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Report name"
            className="w-full rounded border border-border bg-background px-2 py-1 text-sm" />
          <input type="date" value={newDue} onChange={(e) => setNewDue(e.target.value)}
            className="w-full rounded border border-border bg-background px-2 py-1 text-sm" />
          <button type="button" onClick={addReport}
            className="btn-pill bg-primary text-primary-foreground text-xs w-full">Add</button>
        </div>
      </aside>

      <div className="md:col-span-3">
        {selected ? (
          <ReportEditor grantId={grantId} report={selected}
            onChanged={(updated) => setReports((rs) => rs.map((r) => r.id === updated.id ? updated : r))} />
        ) : (
          <div className="text-sm text-muted-foreground">Select or add a report.</div>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Wire the tab**

In `dashboard/src/app/(grants)/grants/[id]/page.tsx`, import and replace the reports placeholder:

```tsx
import { GrantDetailReports } from "@/components/grants/grant-detail-reports";
```

```tsx
reports: <GrantDetailReports grantId={grant.id} initialReports={reports} />,
```

- [ ] **Step 4: Verify & commit**

Open a grant that was marked awarded (with reports). Reports tab shows the sidebar + editor. Add a narrative section, type text, wait ~1s, refresh — content persists. Click "Mark submitted".

```bash
git add dashboard/src/components/grants/report-editor.tsx \
        dashboard/src/components/grants/grant-detail-reports.tsx \
        dashboard/src/app/\(grants\)/grants/\[id\]/page.tsx
git commit -m "feat(grants): report editor with narrative/financial/metric sections"
```

### Task 7.5: Cross-grant reports index page

**Files:**
- Create: `dashboard/src/app/(grants)/grants/reports/page.tsx`

- [ ] **Step 1: Write the page**

```tsx
import Link from "next/link";
import { getSupabase } from "@/lib/supabase";
import { formatDate } from "@/lib/utils";
import type { GrantReport, Grant } from "@/lib/grants/types";

export const dynamic = "force-dynamic";

export default async function ReportsIndexPage() {
  const s = getSupabase();
  const { data: reports } = await s.from("grant_reports")
    .select("*").order("due_date", { ascending: true });
  const { data: grants } = await s.from("grants").select("id, funder_name");
  const byId = new Map((grants ?? []).map((g) => [g.id, g.funder_name]));
  const today = new Date().toISOString().slice(0, 10);
  const pending = (reports as GrantReport[] | null ?? []).filter((r) => !r.submitted_date);
  const submitted = (reports as GrantReport[] | null ?? []).filter((r) => r.submitted_date);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Reports</h1>
        <p className="text-sm text-muted-foreground mt-1">All reports across all grants</p>
      </div>

      <section className="rounded-lg border border-border bg-card">
        <header className="px-4 py-3 border-b border-border">
          <h2 className="text-sm font-semibold">Outstanding</h2>
        </header>
        <table className="w-full text-sm">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="text-left px-4 py-2 font-medium">Grant</th>
              <th className="text-left px-4 py-2 font-medium">Report</th>
              <th className="text-left px-4 py-2 font-medium">Due</th>
              <th className="text-left px-4 py-2 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {pending.length === 0 && (
              <tr><td className="px-4 py-6 text-center text-muted-foreground" colSpan={4}>None outstanding.</td></tr>
            )}
            {pending.map((r) => {
              const overdue = r.due_date < today;
              return (
                <tr key={r.id} className="hover:bg-muted/50">
                  <td className="px-4 py-2">
                    <Link href={`/grants/${r.grant_id}`} className="hover:underline">
                      {byId.get(r.grant_id) ?? "—"}
                    </Link>
                  </td>
                  <td className="px-4 py-2">{r.name}</td>
                  <td className="px-4 py-2">{formatDate(r.due_date)}</td>
                  <td className="px-4 py-2">
                    {overdue ? (
                      <span className="inline-flex items-center rounded-full bg-red-100 text-red-800 px-2 py-0.5 text-xs font-semibold">Overdue</span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-2 py-0.5 text-xs font-semibold">Upcoming</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {submitted.length > 0 && (
        <section className="rounded-lg border border-border bg-card">
          <header className="px-4 py-3 border-b border-border">
            <h2 className="text-sm font-semibold">Submitted</h2>
          </header>
          <table className="w-full text-sm">
            <thead className="bg-muted text-muted-foreground">
              <tr>
                <th className="text-left px-4 py-2 font-medium">Grant</th>
                <th className="text-left px-4 py-2 font-medium">Report</th>
                <th className="text-left px-4 py-2 font-medium">Submitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {submitted.map((r) => (
                <tr key={r.id} className="hover:bg-muted/50">
                  <td className="px-4 py-2">
                    <Link href={`/grants/${r.grant_id}`} className="hover:underline">
                      {byId.get(r.grant_id) ?? "—"}
                    </Link>
                  </td>
                  <td className="px-4 py-2">{r.name}</td>
                  <td className="px-4 py-2">{formatDate(r.submitted_date)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add dashboard/src/app/\(grants\)/grants/reports/page.tsx
git commit -m "feat(grants): cross-grant reports index"
```

---

## Phase 8 — Attachments

### Task 8.1: Upload + list route

**Files:**
- Create: `dashboard/src/app/api/grants/[id]/attachments/route.ts`

- [ ] **Step 1: Write the route**

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getAttachmentsForGrant } from "@/lib/grants/queries";
import { getCurrentRole } from "@/lib/grants/role";

const MAX_BYTES = 25 * 1024 * 1024;
const ALLOWED = new Set([
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/msword",
  "application/vnd.ms-excel",
  "image/png",
  "image/jpeg",
]);

export async function GET(_r: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const attachments = await getAttachmentsForGrant(id);
  return NextResponse.json({ attachments });
}

export async function POST(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin" && role !== "grants") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  const { id } = await params;
  const form = await request.formData();
  const file = form.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "file required" }, { status: 400 });
  if (file.size > MAX_BYTES) return NextResponse.json({ error: "file too large (max 25 MB)" }, { status: 400 });
  if (!ALLOWED.has(file.type)) return NextResponse.json({ error: `unsupported type: ${file.type}` }, { status: 400 });

  const s = getSupabase();
  const uuid = crypto.randomUUID();
  const path = `${id}/${uuid}-${file.name}`;
  const bytes = new Uint8Array(await file.arrayBuffer());

  const up = await s.storage.from("grant-attachments").upload(path, bytes, {
    contentType: file.type, upsert: false,
  });
  if (up.error) return NextResponse.json({ error: `upload failed: ${up.error.message}` }, { status: 500 });

  const { data, error } = await s.from("grant_attachments").insert({
    grant_id: id, filename: file.name, storage_path: path,
    content_type: file.type, size_bytes: file.size, uploaded_by: role,
  }).select("*").single();
  if (error) {
    await s.storage.from("grant-attachments").remove([path]);
    return NextResponse.json({ error: `row insert failed: ${error.message}` }, { status: 500 });
  }

  return NextResponse.json({ attachment: data }, { status: 201 });
}
```

- [ ] **Step 2: Commit**

```bash
git add dashboard/src/app/api/grants/\[id\]/attachments/route.ts
git commit -m "feat(grants): attachment upload + list API"
```

### Task 8.2: Signed-URL download + admin delete

**Files:**
- Create: `dashboard/src/app/api/grants/[id]/attachments/[fileId]/route.ts`

- [ ] **Step 1: Write the route**

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET(
  _r: NextRequest, { params }: { params: Promise<{ id: string; fileId: string }> }
) {
  const { fileId } = await params;
  const s = getSupabase();
  const { data: row, error } = await s.from("grant_attachments").select("*").eq("id", fileId).maybeSingle();
  if (error || !row) return NextResponse.json({ error: "Not found" }, { status: 404 });
  const signed = await s.storage.from("grant-attachments").createSignedUrl(row.storage_path, 300);
  if (signed.error || !signed.data) return NextResponse.json({ error: signed.error?.message ?? "sign failed" }, { status: 500 });
  return NextResponse.redirect(signed.data.signedUrl);
}

export async function DELETE(
  _r: NextRequest, { params }: { params: Promise<{ id: string; fileId: string }> }
) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden (admin only)" }, { status: 403 });
  const { fileId } = await params;
  const s = getSupabase();
  const { data: row } = await s.from("grant_attachments").select("storage_path").eq("id", fileId).maybeSingle();
  if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
  await s.storage.from("grant-attachments").remove([row.storage_path]);
  const { error } = await s.from("grant_attachments").delete().eq("id", fileId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 2: Commit**

```bash
git add dashboard/src/app/api/grants/\[id\]/attachments/\[fileId\]/route.ts
git commit -m "feat(grants): attachment signed-URL download and admin delete"
```

### Task 8.3: Files tab UI

**Files:**
- Create: `dashboard/src/components/grants/grant-detail-files.tsx`
- Modify: `dashboard/src/app/(grants)/grants/[id]/page.tsx`

- [ ] **Step 1: Write the files tab**

```tsx
"use client";

import { useState } from "react";
import { Download, Trash2, Upload } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { GrantAttachment } from "@/lib/grants/types";

interface Props { grantId: string; role: "admin" | "grants" | "dev" | null; initialAttachments: GrantAttachment[]; }

export function GrantDetailFiles({ grantId, role, initialAttachments }: Props) {
  const [files, setFiles] = useState(initialAttachments);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError("");
    setUploading(true);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch(`/api/grants/${grantId}/attachments`, { method: "POST", body: fd });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error ?? "upload failed");
      setFiles((f) => [j.attachment, ...f]);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  }

  async function remove(fileId: string) {
    if (!confirm("Delete this file? This cannot be undone.")) return;
    const res = await fetch(`/api/grants/${grantId}/attachments/${fileId}`, { method: "DELETE" });
    if (res.ok) setFiles((f) => f.filter((x) => x.id !== fileId));
  }

  return (
    <div className="space-y-3">
      <label className="inline-flex items-center gap-2 btn-pill bg-primary text-primary-foreground text-sm cursor-pointer">
        <Upload className="h-4 w-4" />
        {uploading ? "Uploading…" : "Upload file"}
        <input type="file" onChange={onUpload} className="sr-only"
          accept=".pdf,.docx,.xlsx,.png,.jpg,.jpeg,.doc,.xls" />
      </label>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <ul className="divide-y divide-border border border-border rounded-lg bg-card">
        {files.length === 0 && (
          <li className="px-4 py-6 text-sm text-muted-foreground text-center">No files yet.</li>
        )}
        {files.map((f) => (
          <li key={f.id} className="px-4 py-3 flex items-center gap-3 text-sm">
            <a href={`/api/grants/${grantId}/attachments/${f.id}`} className="flex-1 hover:underline font-medium">
              {f.filename}
            </a>
            <span className="text-xs text-muted-foreground">
              {(f.size_bytes / 1024).toFixed(0)} KB · {formatDate(f.uploaded_at)}
            </span>
            <a href={`/api/grants/${grantId}/attachments/${f.id}`} className="text-muted-foreground hover:text-primary">
              <Download className="h-4 w-4" />
            </a>
            {role === "admin" && (
              <button type="button" onClick={() => remove(f.id)} className="text-muted-foreground hover:text-destructive">
                <Trash2 className="h-4 w-4" />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

- [ ] **Step 2: Wire the tab**

In `dashboard/src/app/(grants)/grants/[id]/page.tsx`, import and replace the files placeholder:

```tsx
import { GrantDetailFiles } from "@/components/grants/grant-detail-files";
```

```tsx
files: <GrantDetailFiles grantId={grant.id} role={role} initialAttachments={attachments} />,
```

- [ ] **Step 3: Verify**

Upload a PDF, click the filename to download, confirm a 5-min signed URL opens it. As admin, delete — confirm it disappears from the list and from the Supabase Storage bucket.

- [ ] **Step 4: Commit**

```bash
git add dashboard/src/components/grants/grant-detail-files.tsx \
        dashboard/src/app/\(grants\)/grants/\[id\]/page.tsx
git commit -m "feat(grants): files tab with upload, download, admin delete"
```

---

## Phase 9 — Settings (templates + field definitions)

### Task 9.1: Templates CRUD API

**Files:**
- Create: `dashboard/src/app/api/grants/templates/route.ts`
- Create: `dashboard/src/app/api/grants/templates/[templateId]/route.ts`

- [ ] **Step 1: Write list/create route**

`dashboard/src/app/api/grants/templates/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getTemplates } from "@/lib/grants/queries";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET() {
  const templates = await getTemplates();
  return NextResponse.json({ templates });
}

export async function POST(request: NextRequest) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { name, description, default_checklist_items } = await request.json();
  if (!name || !name.trim()) return NextResponse.json({ error: "name required" }, { status: 400 });
  const s = getSupabase();
  const { data, error } = await s.from("grant_templates").insert({
    name: name.trim(), description: description ?? null,
    default_checklist_items: default_checklist_items ?? [],
  }).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ template: data }, { status: 201 });
}
```

- [ ] **Step 2: Write per-template route**

`dashboard/src/app/api/grants/templates/[templateId]/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getCurrentRole } from "@/lib/grants/role";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ templateId: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { templateId } = await params;
  const body = await request.json();
  const allowed = ["name", "description", "default_checklist_items"] as const;
  const clean: Record<string, unknown> = {};
  for (const k of allowed) if (k in body) clean[k] = body[k];
  const s = getSupabase();
  const { data, error } = await s.from("grant_templates").update(clean).eq("id", templateId).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ template: data });
}

export async function DELETE(_r: NextRequest, { params }: { params: Promise<{ templateId: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { templateId } = await params;
  const s = getSupabase();
  const { error } = await s.from("grant_templates").delete().eq("id", templateId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 3: Commit**

```bash
git add dashboard/src/app/api/grants/templates
git commit -m "feat(grants): templates CRUD API"
```

### Task 9.2: Field definitions CRUD API

**Files:**
- Modify: `dashboard/src/app/api/grants/field-definitions/route.ts` (add POST)
- Create: `dashboard/src/app/api/grants/field-definitions/[defId]/route.ts`

- [ ] **Step 1: Add POST to field-definitions/route.ts**

Replace the existing file contents:

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getFieldDefinitions } from "@/lib/grants/queries";
import { getCurrentRole } from "@/lib/grants/role";

export async function GET(request: NextRequest) {
  try {
    const templateId = request.nextUrl.searchParams.get("template_id");
    const defs = await getFieldDefinitions(templateId);
    return NextResponse.json({ definitions: defs });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { key, label, field_type, options, template_id, sort_order } = await request.json();
  if (!key || !label || !field_type) {
    return NextResponse.json({ error: "key, label, field_type required" }, { status: 400 });
  }
  const slug = String(key).toLowerCase().replace(/[^a-z0-9_]+/g, "_").replace(/^_|_$/g, "");
  const s = getSupabase();
  const { data, error } = await s.from("field_definitions").insert({
    key: slug, label, field_type,
    options: field_type === "select" ? (options ?? []) : null,
    template_id: template_id ?? null,
    sort_order: sort_order ?? 0,
  }).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ definition: data }, { status: 201 });
}
```

- [ ] **Step 2: Write per-definition route**

`dashboard/src/app/api/grants/field-definitions/[defId]/route.ts`:

```ts
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";
import { getCurrentRole } from "@/lib/grants/role";

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ defId: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { defId } = await params;
  const body = await request.json();
  const allowed = ["label", "field_type", "options", "template_id", "sort_order"] as const;
  const clean: Record<string, unknown> = {};
  for (const k of allowed) if (k in body) clean[k] = body[k];
  const s = getSupabase();
  const { data, error } = await s.from("field_definitions").update(clean).eq("id", defId).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ definition: data });
}

export async function DELETE(_r: NextRequest, { params }: { params: Promise<{ defId: string }> }) {
  const role = await getCurrentRole();
  if (role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { defId } = await params;
  const s = getSupabase();
  const { error } = await s.from("field_definitions").delete().eq("id", defId);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 3: Commit**

```bash
git add dashboard/src/app/api/grants/field-definitions
git commit -m "feat(grants): field-definitions CRUD API"
```

### Task 9.3: Settings page (admin only)

**Files:**
- Create: `dashboard/src/app/(grants)/grants/settings/page.tsx`
- Create: `dashboard/src/components/grants/templates-admin.tsx`
- Create: `dashboard/src/components/grants/field-definitions-admin.tsx`

- [ ] **Step 1: Write the settings page (server)**

```tsx
import { notFound } from "next/navigation";
import { isAdmin } from "@/lib/grants/role";
import { getTemplates } from "@/lib/grants/queries";
import { getSupabase } from "@/lib/supabase";
import { TemplatesAdmin } from "@/components/grants/templates-admin";
import { FieldDefinitionsAdmin } from "@/components/grants/field-definitions-admin";
import type { FieldDefinition } from "@/lib/grants/types";

export const dynamic = "force-dynamic";

export default async function SettingsPage() {
  if (!(await isAdmin())) notFound();
  const templates = await getTemplates();
  const s = getSupabase();
  const { data: defs } = await s.from("field_definitions").select("*").order("sort_order", { ascending: true });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-muted-foreground mt-1">Templates and custom fields for grants</p>
      </div>
      <TemplatesAdmin initialTemplates={templates} />
      <FieldDefinitionsAdmin initialDefinitions={(defs ?? []) as FieldDefinition[]} templates={templates} />
    </div>
  );
}
```

- [ ] **Step 2: Write templates admin UI**

```tsx
"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import type { GrantTemplate, ChecklistItemTemplate } from "@/lib/grants/types";

interface Props { initialTemplates: GrantTemplate[]; }

export function TemplatesAdmin({ initialTemplates }: Props) {
  const [templates, setTemplates] = useState(initialTemplates);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newItems, setNewItems] = useState<ChecklistItemTemplate[]>([]);
  const [error, setError] = useState("");

  function addItem() { setNewItems((x) => [...x, { label: "", offset_days_from_award: null }]); }

  async function createTemplate() {
    if (!newName.trim()) { setError("Name required"); return; }
    setError("");
    const res = await fetch("/api/grants/templates", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newName.trim(),
        description: newDescription.trim() || null,
        default_checklist_items: newItems.filter((i) => i.label.trim().length > 0),
      }),
    });
    const j = await res.json();
    if (!res.ok) { setError(j.error ?? "failed"); return; }
    setTemplates((t) => [...t, j.template]);
    setNewName(""); setNewDescription(""); setNewItems([]);
  }

  async function removeTemplate(id: string) {
    if (!confirm("Delete this template? Grants created from it will keep their tasks.")) return;
    await fetch(`/api/grants/templates/${id}`, { method: "DELETE" });
    setTemplates((t) => t.filter((x) => x.id !== id));
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Grant templates</h2>
      <ul className="divide-y divide-border border border-border rounded-lg bg-card">
        {templates.map((t) => (
          <li key={t.id} className="px-4 py-3 flex items-center gap-3 text-sm">
            <div className="flex-1">
              <div className="font-medium">{t.name}</div>
              {t.description && <div className="text-xs text-muted-foreground">{t.description}</div>}
              <div className="text-xs text-muted-foreground">{t.default_checklist_items.length} checklist items</div>
            </div>
            <button type="button" onClick={() => removeTemplate(t.id)}
              className="text-muted-foreground hover:text-destructive">
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>

      <div className="border border-border rounded-lg bg-card p-4 space-y-3">
        <div className="text-sm font-semibold">Add template</div>
        <input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Name (e.g., 'Education Grant')"
          className="w-full rounded border border-border bg-background px-3 py-2 text-sm" />
        <input value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Description (optional)"
          className="w-full rounded border border-border bg-background px-3 py-2 text-sm" />
        <div className="space-y-1">
          <div className="text-xs font-medium text-muted-foreground">Default checklist items</div>
          {newItems.map((it, idx) => (
            <div key={idx} className="flex gap-2 items-center text-sm">
              <input value={it.label} placeholder="Task label"
                onChange={(e) => setNewItems(newItems.map((x, i) => i === idx ? { ...x, label: e.target.value } : x))}
                className="flex-1 rounded border border-border bg-background px-2 py-1" />
              <input type="number" placeholder="Offset days from award" value={it.offset_days_from_award ?? ""}
                onChange={(e) => setNewItems(newItems.map((x, i) => i === idx ? {
                  ...x, offset_days_from_award: e.target.value === "" ? null : Number(e.target.value),
                } : x))}
                className="w-48 rounded border border-border bg-background px-2 py-1" />
            </div>
          ))}
          <button type="button" onClick={addItem} className="text-xs text-primary hover:underline">+ add item</button>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex justify-end">
          <button type="button" onClick={createTemplate}
            className="btn-pill bg-primary text-primary-foreground text-sm">Add template</button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Write field-definitions admin UI**

```tsx
"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import type { FieldDefinition, FieldType, GrantTemplate } from "@/lib/grants/types";

interface Props { initialDefinitions: FieldDefinition[]; templates: GrantTemplate[]; }

export function FieldDefinitionsAdmin({ initialDefinitions, templates }: Props) {
  const [defs, setDefs] = useState(initialDefinitions);
  const [label, setLabel] = useState("");
  const [type, setType] = useState<FieldType>("text");
  const [optionsText, setOptionsText] = useState("");
  const [templateId, setTemplateId] = useState<string>("");
  const [error, setError] = useState("");

  async function createDef() {
    if (!label.trim()) { setError("Label required"); return; }
    setError("");
    const key = label.toLowerCase().replace(/[^a-z0-9_]+/g, "_").replace(/^_|_$/g, "");
    const options = type === "select"
      ? optionsText.split(",").map((s) => s.trim()).filter(Boolean)
      : null;
    const res = await fetch("/api/grants/field-definitions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key, label: label.trim(), field_type: type, options, template_id: templateId || null }),
    });
    const j = await res.json();
    if (!res.ok) { setError(j.error ?? "failed"); return; }
    setDefs((d) => [...d, j.definition]);
    setLabel(""); setOptionsText(""); setType("text"); setTemplateId("");
  }

  async function removeDef(id: string) {
    if (!confirm("Delete this field? Values already stored on grants remain in custom_fields.")) return;
    await fetch(`/api/grants/field-definitions/${id}`, { method: "DELETE" });
    setDefs((d) => d.filter((x) => x.id !== id));
  }

  const templateName = (id: string | null) => id ? templates.find((t) => t.id === id)?.name ?? "—" : "(all grants)";

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Custom fields</h2>
      <ul className="divide-y divide-border border border-border rounded-lg bg-card">
        {defs.length === 0 && <li className="px-4 py-6 text-sm text-muted-foreground text-center">No custom fields yet.</li>}
        {defs.map((d) => (
          <li key={d.id} className="px-4 py-3 flex items-center gap-3 text-sm">
            <div className="flex-1">
              <div className="font-medium">{d.label} <code className="text-xs text-muted-foreground">({d.key})</code></div>
              <div className="text-xs text-muted-foreground">{d.field_type} · scope: {templateName(d.template_id)}</div>
            </div>
            <button type="button" onClick={() => removeDef(d.id)} className="text-muted-foreground hover:text-destructive">
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>

      <div className="border border-border rounded-lg bg-card p-4 space-y-3">
        <div className="text-sm font-semibold">Add field</div>
        <div className="grid grid-cols-2 gap-3">
          <label className="flex flex-col gap-1 text-sm">
            Label
            <input value={label} onChange={(e) => setLabel(e.target.value)}
              className="rounded border border-border bg-background px-2 py-1" />
          </label>
          <label className="flex flex-col gap-1 text-sm">
            Type
            <select value={type} onChange={(e) => setType(e.target.value as FieldType)}
              className="rounded border border-border bg-background px-2 py-1">
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="date">Date</option>
              <option value="bool">Checkbox</option>
              <option value="select">Select</option>
            </select>
          </label>
          {type === "select" && (
            <label className="flex flex-col gap-1 text-sm col-span-2">
              Options (comma-separated)
              <input value={optionsText} onChange={(e) => setOptionsText(e.target.value)}
                className="rounded border border-border bg-background px-2 py-1" />
            </label>
          )}
          <label className="flex flex-col gap-1 text-sm col-span-2">
            Scope
            <select value={templateId} onChange={(e) => setTemplateId(e.target.value)}
              className="rounded border border-border bg-background px-2 py-1">
              <option value="">All grants</option>
              {templates.map((t) => <option key={t.id} value={t.id}>Only: {t.name}</option>)}
            </select>
          </label>
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <div className="flex justify-end">
          <button type="button" onClick={createDef} className="btn-pill bg-primary text-primary-foreground text-sm">
            Add field
          </button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Verify & commit**

As admin, visit `/grants/settings`. Create a new template. Create a new custom field scoped to that template. Create a new grant with that template → confirm the custom field renders on the form. As grants role, visit `/grants/settings` → expect redirect to `/grants`.

```bash
git add dashboard/src/app/\(grants\)/grants/settings \
        dashboard/src/components/grants/templates-admin.tsx \
        dashboard/src/components/grants/field-definitions-admin.tsx
git commit -m "feat(grants): settings page for templates and custom fields"
```

---

## Phase 10 — Navigation integration

### Task 10.1: Add Grants entry to admin sidebar

**Files:**
- Modify: `dashboard/src/components/nav-sidebar.tsx`

- [ ] **Step 1: Add the import and nav item**

Find the `navItems` array near line 9 and append:

```tsx
import { BarChart3, CalendarRange, Code, FileText, FolderOpen } from "lucide-react";
// ...
const navItems = [
  { href: "/campaigns", label: "Campaigns", icon: BarChart3 },
  { href: "/schedule", label: "Schedule", icon: CalendarRange },
  { href: "/invoices", label: "Invoices", icon: FileText },
  { href: "/grants", label: "Grants", icon: FolderOpen },
];
```

- [ ] **Step 2: Verify**

Log in as admin → sidebar now shows Campaigns / Schedule / Invoices / Grants / Dev Portal. Clicking Grants navigates to `/grants` and renders the Grants Hub layout (sidebar gets replaced with the grants-specific sidebar since `/grants` is in the `(grants)` route group).

- [ ] **Step 3: Commit**

```bash
git add dashboard/src/components/nav-sidebar.tsx
git commit -m "feat(grants): add Grants entry to admin sidebar"
```

---

## Phase 11 — CSV import

### Task 11.1: Import script

**Files:**
- Create: `dashboard/scripts/import-grants-csv.ts`

- [ ] **Step 1: Write the script**

```ts
import fs from "node:fs";
import path from "node:path";
import Papa from "papaparse";
import { createClient } from "@supabase/supabase-js";
import { Connection } from "jsforce";
import { execSync } from "node:child_process";

type Status = "pending" | "awarded" | "received" | "open" | "declined";

interface ParsedRow {
  funder_name: string;
  notes: string | null;
  status: Status;
  declined_date: string | null;
  restriction: "restricted" | "unrestricted" | null;
  program_name: string | null;
  request_amount: number | null;
  submission_date: string | null;
  award_date: string | null;
  amount_awarded: number | null;
  amount_received: number | null;
  receipt_date: string | null;
  acknowledged_date: string | null;
  grant_closes_date: string | null;
  report_requirement: string | null;
}

function parseMoney(s: string | undefined): number | null {
  if (!s) return null;
  const cleaned = s.replace(/[$,\s]/g, "");
  if (!cleaned) return null;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

function parseDate(s: string | undefined): string | null {
  if (!s || !s.trim()) return null;
  // Accept M/D/YYYY or MM/DD/YYYY
  const m = s.trim().match(/^(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})$/);
  if (!m) return null;
  const [, mo, d, y] = m;
  const year = y.length === 2 ? `20${y}` : y;
  return `${year}-${mo.padStart(2, "0")}-${d.padStart(2, "0")}`;
}

function parseStatus(s: string | undefined): { status: Status | null; declined_date: string | null } {
  if (!s) return { status: null, declined_date: null };
  const lower = s.toLowerCase().trim();
  if (lower.startsWith("declined")) {
    const dateMatch = s.match(/(\d{1,2})[\/-](\d{1,2})[\/-](\d{2,4})/);
    return {
      status: "declined",
      declined_date: dateMatch ? parseDate(dateMatch[0]) : null,
    };
  }
  if (lower === "pending") return { status: "pending", declined_date: null };
  if (lower === "awarded") return { status: "awarded", declined_date: null };
  if (lower === "received") return { status: "received", declined_date: null };
  if (lower === "open") return { status: "open", declined_date: null };
  return { status: null, declined_date: null };
}

function parseProgram(s: string | undefined): { restriction: ParsedRow["restriction"]; program_name: string | null } {
  if (!s || !s.trim()) return { restriction: null, program_name: null };
  const lower = s.toLowerCase();
  let restriction: ParsedRow["restriction"] = null;
  if (lower.includes("unrestricted") || lower.includes("gen. support") || lower.includes("general support")) {
    restriction = "unrestricted";
  } else if (lower.includes("restricted")) {
    restriction = "restricted";
  }
  // Extract the program name from "Restricted; LifeWorks" or "Restricted: LifeWorks"
  const parts = s.split(/[;:]/);
  const programPart = parts.length > 1 ? parts.slice(1).join(";").trim() : (restriction ? null : s.trim());
  return { restriction, program_name: programPart || null };
}

function rowLooksLikeHeaderOrTotal(row: Record<string, string>): boolean {
  const funder = (row["Funder"] ?? "").toUpperCase();
  return (
    !row["Funder"] ||
    funder.startsWith("TOTAL") ||
    funder.startsWith("AWARDED GRANTS") ||
    funder.startsWith("CORPORATE SPONSOR GRANTS") ||
    funder.startsWith("PRIVATE FOUNDATION GRANTS") ||
    funder.startsWith("PENDING PROPOSALS") ||
    funder.startsWith("OPEN GRANTS") ||
    funder.startsWith("DECLINED REQUESTS") ||
    funder.startsWith("GREEN =") ||
    funder.startsWith("YELLOW =") ||
    funder.startsWith("PINK =") ||
    funder.startsWith("GRAY =")
  );
}

function parseRow(raw: Record<string, string>): ParsedRow | null {
  if (rowLooksLikeHeaderOrTotal(raw)) return null;
  const { status, declined_date } = parseStatus(raw["Status"]);
  if (!status) return null;
  const { restriction, program_name } = parseProgram(raw["Program"]);
  return {
    funder_name: raw["Funder"].trim(),
    notes: raw["Notes"]?.trim() || null,
    status,
    declined_date,
    restriction,
    program_name,
    request_amount: parseMoney(raw[" Request Amount "]),
    submission_date: parseDate(raw[" Submission Date "]),
    award_date: parseDate(raw[" Award Date "]),
    amount_awarded: status === "awarded" ? parseMoney(raw[" Amount Awarded / Received "]) : null,
    amount_received: status === "received" ? parseMoney(raw[" Amount Awarded / Received "]) : null,
    receipt_date: parseDate(raw["Receipt Date"]),
    acknowledged_date: parseDate(raw["Acknowledged"]),
    grant_closes_date: parseDate(raw["Grant closes"]),
    report_requirement: raw["Report Requirement? Scheduled?"]?.trim() || null,
  };
}

async function main() {
  const args = process.argv.slice(2);
  const csvPath = args.find((a) => !a.startsWith("--"));
  const dryRun = args.includes("--dry-run");
  if (!csvPath) {
    console.error("usage: tsx scripts/import-grants-csv.ts <path.csv> [--dry-run]");
    process.exit(1);
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set");
    process.exit(1);
  }
  const sb = createClient(url, key, { auth: { persistSession: false } });

  const text = fs.readFileSync(path.resolve(csvPath), "utf8");
  const parsed = Papa.parse<Record<string, string>>(text, { header: true, skipEmptyLines: true });
  const rows = (parsed.data.map(parseRow).filter(Boolean)) as ParsedRow[];

  // Active only: pending + awarded + received + open
  const active = rows.filter((r) => r.status !== "declined");
  console.log(`Parsed ${rows.length} rows, ${active.length} active rows`);

  // In-memory dedupe against existing DB rows for rows with null submission_date
  const { data: existing } = await sb.from("grants").select("funder_name, submission_date, request_amount, status");
  const existingKey = (r: { funder_name: string; submission_date: string | null; request_amount: number | null; status: string }) =>
    `${r.funder_name}|${r.submission_date ?? ""}|${r.request_amount ?? ""}|${r.status}`;
  const existingSet = new Set((existing ?? []).map(existingKey));

  let inserted = 0;
  let skipped = 0;
  for (const r of active) {
    if (existingSet.has(existingKey({ ...r }))) { skipped++; continue; }
    if (dryRun) {
      console.log(`[dry-run] insert ${r.funder_name} (${r.status})`);
      inserted++;
      continue;
    }
    const { error } = await sb.from("grants").insert({
      ...r,
      created_by: "csv_import",
      custom_fields: {},
    });
    if (error) console.error(`Failed ${r.funder_name}: ${error.message}`);
    else inserted++;
  }
  console.log(`Inserted: ${inserted}, skipped (dupes): ${skipped}`);

  // Second pass: SF Opportunity back-reference for awarded/received
  console.log("\nLinking to SF Opportunities...");
  const sfConn = await buildSfConnection();
  const { data: fresh } = await sb.from("grants").select("id, funder_name, amount_awarded, amount_received, award_date")
    .in("status", ["awarded", "received", "open"]).is("sf_opportunity_id", null);
  let linked = 0;
  for (const g of fresh ?? []) {
    const amount = g.amount_awarded ?? g.amount_received;
    if (!amount || !g.award_date) continue;
    const escaped = g.funder_name.replace(/'/g, "\\'");
    const q = `SELECT Id, Name, Amount, CloseDate FROM Opportunity WHERE Name LIKE '%${escaped}%' AND CloseDate = ${g.award_date} LIMIT 5`;
    const res = await sfConn.query<{ Id: string; Amount: number | null }>(q);
    const match = res.records.find((o) => Math.abs((o.Amount ?? 0) - amount) < 0.01);
    if (match) {
      if (!dryRun) await sb.from("grants").update({ sf_opportunity_id: match.Id }).eq("id", g.id);
      linked++;
    }
  }
  console.log(`SF-linked: ${linked}`);
}

async function buildSfConnection(): Promise<Connection> {
  const loginUrl = process.env.SF_LOGIN_URL || "https://login.salesforce.com";
  const username = process.env.SF_USERNAME;
  const password = process.env.SF_PASSWORD;
  const securityToken = process.env.SF_SECURITY_TOKEN || "";
  if (username && password) {
    const conn = new Connection({ loginUrl, version: "62.0" });
    await conn.login(username, password + securityToken);
    return conn;
  }
  // SF CLI fallback
  const alias = process.env.SF_ORG_ALIAS || "prod";
  const raw = execSync(`sf org display --target-org ${alias} --json`, { encoding: "utf-8", timeout: 30000 });
  const parsed = JSON.parse(raw).result;
  return new Connection({ instanceUrl: parsed.instanceUrl, accessToken: parsed.accessToken, version: "62.0" });
}

main().catch((e) => { console.error(e); process.exit(1); });
```

- [ ] **Step 2: Add a script entry to package.json**

Edit `dashboard/package.json` `scripts` block to include:

```json
"import:grants": "tsx scripts/import-grants-csv.ts"
```

- [ ] **Step 3: Dry-run against the provided CSV**

```bash
cd dashboard
npm install --save-dev tsx
npm run import:grants -- '/Users/austinwarren/Downloads/FYE2025 grants report (2).xlsx - December 2024.csv' --dry-run
```

Expected: console output listing ~15-20 parsed active rows. No DB writes.

- [ ] **Step 4: Real run (after confirming dry-run output)**

```bash
npm run import:grants -- '/Users/austinwarren/Downloads/FYE2025 grants report (2).xlsx - December 2024.csv'
```

Expected: `Inserted: N, skipped: 0, SF-linked: M`.

Verify in Supabase `grants` table and in `/grants/pipeline`.

- [ ] **Step 5: Commit**

```bash
git add dashboard/scripts/import-grants-csv.ts dashboard/package.json dashboard/package-lock.json
git commit -m "feat(grants): one-shot CSV import script with SF back-reference pass"
```

---

## Phase 12 — Final verification

### Task 12.1: End-to-end manual checklist

Run through this entire flow against the dev server with admin credentials; repeat the key parts as grants role.

- [ ] **Login flows**
  - [ ] `/login` shows 3 tiles
  - [ ] Admin login → redirected to `/campaigns`
  - [ ] Grants login → redirected to `/grants`
  - [ ] Dev login → redirected to `/dev`
  - [ ] Grants cookie trying to hit `/campaigns` → redirected to `/grants`
  - [ ] Grants cookie trying to hit `/grants/settings` → redirected to `/grants`

- [ ] **Landing + pipeline**
  - [ ] `/grants` shows stats (active count, awarded total, pending total) and due-soon panel
  - [ ] `/grants/pipeline` groups by status; search by funder works; status filter works

- [ ] **Create → award → sync**
  - [ ] Create a grant from `/grants/new` with the Corporate Sponsor template. Confirm checklist tasks appear on the grant detail page Tasks tab.
  - [ ] Mark the grant awarded with a report due 90 days out. Confirm: grant status = Awarded, report appears in the Reports tab, Tasks tab has updated `due_date`s where the template defined an offset, SF Opportunity is created (`sf_opportunity_id` now non-null; "Open Opportunity" link in the overview aside).
  - [ ] Force an SF failure by mis-setting `SF_PASSWORD` in `.env.local`, mark a different grant awarded. Confirm red banner appears. Fix env, click Retry, confirm banner disappears.

- [ ] **Reports**
  - [ ] Open a report. Add narrative / financial / metric sections. Type content. Wait 1 second. Refresh. Content persists.
  - [ ] Mark submitted. Confirm the green "Submitted on YYYY-MM-DD" banner. Confirm the report drops off `/grants` due-soon panel and `/grants/reports` outstanding table.

- [ ] **Attachments**
  - [ ] Upload a PDF → appears in Files tab
  - [ ] Click filename → file downloads
  - [ ] As grants role: delete button is hidden
  - [ ] As admin: delete works; file disappears from Supabase Storage

- [ ] **Notes**
  - [ ] Add a note. Appears at top of list. Reload — persists.

- [ ] **Settings (admin)**
  - [ ] Create a new template "Education Grant" with 2 checklist items
  - [ ] Create a custom field "student_count_target" (number) scoped to that template
  - [ ] Create a new grant using the Education Grant template. Confirm the custom field renders on the form
  - [ ] Submit. Open grant detail → Overview → Custom fields shows the value

- [ ] **CSV import**
  - [ ] Ran dry-run, row count reasonable
  - [ ] Real import succeeded; grants appear in `/grants/pipeline`
  - [ ] Re-run is idempotent (0 inserts, N skipped)

### Task 12.2: Type-check and lint final pass

- [ ] **Step 1: Full type-check**

```bash
cd dashboard && npx tsc --noEmit
```

Expected: no errors.

- [ ] **Step 2: Lint**

```bash
cd dashboard && npm run lint
```

Expected: clean or only pre-existing warnings.

- [ ] **Step 3: Build**

```bash
cd dashboard && npm run build
```

Expected: successful build.

- [ ] **Step 4: Final commit of any fixes**

```bash
git add -A && git commit -m "chore(grants): final lint/type cleanup" || true
```

### Task 12.3: Open a PR

- [ ] **Step 1: Push the branch**

```bash
git push -u origin feat/grants-hub-design
```

- [ ] **Step 2: Open PR**

```bash
gh pr create --title "feat: Grants Hub v1" --body "$(cat <<'EOF'
## Summary
- Adds a new Grants Hub module with pre-award pipeline, reporting schedule, renewals, attachments, notes, UI-addable custom fields, and Salesforce writeback on award
- Introduces a new `grants` role alongside `admin`/`dev` (separate password)
- Supabase (Postgres + Storage) as the primary grant store; SF writeback occurs only when a grant is marked awarded

## Test plan
- [ ] Run through the full end-to-end checklist in `docs/superpowers/plans/2026-04-13-grants-hub.md` §12.1
- [ ] Type-check clean (`npx tsc --noEmit`)
- [ ] Build passes
- [ ] CSV import dry-run then real run against provided FYE2025 sheet
- [ ] SF failure + retry path exercised

Design spec: `docs/superpowers/specs/2026-04-13-grants-hub-design.md`
Implementation plan: `docs/superpowers/plans/2026-04-13-grants-hub.md`
EOF
)"
```

---

## Reviewer's quick reference — files created / modified

**Migrations (SQL):**
- `dashboard/supabase/migrations/0001_create_grants_schema.sql`
- `dashboard/supabase/migrations/0002_storage_bucket.sql`
- `dashboard/supabase/migrations/0003_seed_templates.sql`

**Library code:**
- `dashboard/src/lib/supabase.ts`
- `dashboard/src/lib/grants/types.ts`
- `dashboard/src/lib/grants/queries.ts`
- `dashboard/src/lib/grants/mutations.ts`
- `dashboard/src/lib/grants/role.ts`
- `dashboard/src/lib/grants/sf-sync.ts`

**Route group + pages:**
- `dashboard/src/app/(grants)/layout.tsx`
- `dashboard/src/app/(grants)/grants/page.tsx`
- `dashboard/src/app/(grants)/grants/pipeline/page.tsx`
- `dashboard/src/app/(grants)/grants/reports/page.tsx`
- `dashboard/src/app/(grants)/grants/new/page.tsx`
- `dashboard/src/app/(grants)/grants/[id]/page.tsx`
- `dashboard/src/app/(grants)/grants/settings/page.tsx`

**API routes:**
- `dashboard/src/app/api/grants/route.ts`
- `dashboard/src/app/api/grants/[id]/route.ts`
- `dashboard/src/app/api/grants/[id]/award/route.ts`
- `dashboard/src/app/api/grants/[id]/sync/route.ts`
- `dashboard/src/app/api/grants/[id]/attachments/route.ts`
- `dashboard/src/app/api/grants/[id]/attachments/[fileId]/route.ts`
- `dashboard/src/app/api/grants/[id]/reports/route.ts`
- `dashboard/src/app/api/grants/[id]/reports/[reportId]/route.ts`
- `dashboard/src/app/api/grants/[id]/tasks/route.ts`
- `dashboard/src/app/api/grants/[id]/tasks/[taskId]/route.ts`
- `dashboard/src/app/api/grants/[id]/notes/route.ts`
- `dashboard/src/app/api/grants/funder-search/route.ts`
- `dashboard/src/app/api/grants/templates/route.ts`
- `dashboard/src/app/api/grants/templates/[templateId]/route.ts`
- `dashboard/src/app/api/grants/field-definitions/route.ts`
- `dashboard/src/app/api/grants/field-definitions/[defId]/route.ts`

**Components:**
- `dashboard/src/components/grants/grants-sidebar.tsx`
- `dashboard/src/components/grants/due-soon-panel.tsx`
- `dashboard/src/components/grants/pipeline-table.tsx`
- `dashboard/src/components/grants/status-badge.tsx`
- `dashboard/src/components/grants/funder-search-combobox.tsx`
- `dashboard/src/components/grants/custom-field-renderer.tsx`
- `dashboard/src/components/grants/grant-create-form.tsx`
- `dashboard/src/components/grants/grant-detail-tabs.tsx`
- `dashboard/src/components/grants/grant-detail-overview.tsx`
- `dashboard/src/components/grants/grant-detail-tasks.tsx`
- `dashboard/src/components/grants/grant-detail-reports.tsx`
- `dashboard/src/components/grants/grant-detail-notes.tsx`
- `dashboard/src/components/grants/grant-detail-files.tsx`
- `dashboard/src/components/grants/mark-awarded-button.tsx`
- `dashboard/src/components/grants/sf-sync-banner.tsx`
- `dashboard/src/components/grants/report-editor.tsx`
- `dashboard/src/components/grants/templates-admin.tsx`
- `dashboard/src/components/grants/field-definitions-admin.tsx`

**Scripts:**
- `dashboard/scripts/import-grants-csv.ts`

**Modified:**
- `dashboard/next.config.ts` (added `@supabase/supabase-js` to `serverExternalPackages`)
- `dashboard/package.json` (added deps + `import:grants` script)
- `dashboard/src/middleware.ts` (added `grants` role gating + settings lock)
- `dashboard/src/app/login/page.tsx` (3rd tile + redirect)
- `dashboard/src/app/api/auth/route.ts` (accept grants role, `GRANTS_PASSWORD`)
- `dashboard/src/components/nav-sidebar.tsx` (added Grants nav item)
