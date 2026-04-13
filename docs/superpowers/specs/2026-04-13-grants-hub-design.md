# Grants Hub — Design Spec

**Date:** 2026-04-13
**Status:** Approved for planning
**Origin:** April 1, 2026 client meeting with Mark (JPF), Tom Pittman, Michele Ryder, and Conner Bourne. Meeting transcript: `JP-Stackked-Grants-b6fd3f67-c2c5.md`.

---

## 1. Goal

Add a **Grants Hub** module to the existing JPF campaign dashboard so Jobs Partnership of Florida can manage its grant lifecycle (pre-award pipeline, post-award reporting, renewals, attachments, notes) in a single workspace instead of the current manual spreadsheet.

This is a net-new hub alongside the existing `(dashboard)` admin routes and `(development)` dev-team routes. Primary user is **Conner Bourne** (grants-focused); admin users (Mark, Tom, Michele) also see it.

## 2. Scope

### v1 (MVP)
- Pre-award pipeline — grants move through stages: pending → awarded / declined → (received) → (open, carryover from prior FY)
- Post-award reporting schedule — arbitrary number of reports per grant with due dates and flexible section content
- Renewal calendar — recurring grants surface a renewal_due_date for annual re-application
- Grant-type templates — seed default checklist items per template; templates also scope custom fields
- User-addable custom fields — admin adds field definitions from a settings page; they render on matching grant forms
- File attachments + internal notes per grant
- Salesforce read integration — funder picker searches SF Accounts; existing grant Opportunities can be back-referenced
- Salesforce writeback on award — a Supabase grant marked `awarded` upserts an SF Opportunity (Type = Grant Received)

### v2 (fast-follow, not in this spec)
- Participant-to-grant attribution (link SF program engagements to a grant for outcomes reporting)
- Budget line-items per grant (planned allocations by category)

### Explicitly out of scope (to prevent creep)
- Email notifications (explicitly: in-app only for v1)
- PDF export of reports
- AI grant discovery
- AI grant-writing assistance
- QuickBooks budget-actuals integration (see existing `dashboard/docs/quickbooks-integration-plan.md`)
- Brian Mar external-CRM ingest (blocked on resolving data quality with Brian directly)
- Automated tests (matching existing repo style)
- Signed/tamper-proof auth cookies (pre-existing dashboard issue; flag as follow-up)

## 3. Architecture

Three systems, clearly bounded.

### Next.js dashboard (existing)
- New route group `(grants)/grants/*` inside `dashboard/src/app`, mirroring the existing `(dashboard)` and `(development)` groups
- New role value `grants` added to the existing cookie-based middleware
- Server components query Supabase directly via a server-only client; client components handle forms and tables

### Supabase (new)
- Postgres database — seven tables (see data model section)
- Supabase Storage — one private bucket `grant-attachments`
- **No Supabase Auth features used.** No RLS. All access is gated at the Next.js middleware layer via the existing cookie-role check. The server-side service-role key is the only key that exists; the anon/publishable key is not needed and not distributed.

### Salesforce (existing)
- Source of truth for: Accounts (funders), Opportunities (post-award accounting), Program Engagements (v2 attribution)
- Read patterns: funder picker search, optional back-reference lookup
- Write pattern: a single upsert of an Opportunity when a Supabase grant is marked awarded

### Data flow
- **Funder picker**: dashboard → live SOQL against SF Account → user picks → only `sf_account_id` is stored in Supabase. Funder name is cached alongside for display.
- **Create grant**: dashboard → Supabase insert. No SF write yet.
- **Mark grant awarded**: dashboard → Supabase update → then upsert SF Opportunity (Type = Grant Received, StageName = Awarded) → store returned `sf_opportunity_id` on the grant row.
- **Payment received**: stays in Salesforce via the existing flow (form-assembly → SF). The hub reads SF for receipt date / amount-received and caches to the Supabase row on page load; it does not own this data.
- **Participant attribution (v2)**: stored as `sf_program_engagement_id` references in a join table, not present in v1.

Grant-specific data (reporting schedule, checklists, notes, attachments, custom fields) lives only in Supabase. Anyone viewing the SF Opportunity sees basic amount/date/stage — full detail requires the hub.

## 4. Data model

Seven tables. Everything except `grant_templates` and `field_definitions` hangs off `grants` via `grant_id`.

### `grants`
Identity: `id uuid`, `created_at timestamptz`, `updated_at timestamptz`, `created_by text`

Funder: `funder_name text`, `sf_account_id text?`, `funder_type enum? (corporate | private_foundation | individual | other)`

Lifecycle: `status enum (pending | awarded | received | open | declined)`, `declined_date date?`, `sf_opportunity_id text?`

Money: `request_amount numeric`, `amount_awarded numeric?`, `amount_received numeric?`

Dates: `submission_date date?`, `award_date date?`, `receipt_date date?`, `acknowledged_date date?`, `grant_closes_date date?`

Program: `program_name text?`, `restriction enum? (restricted | unrestricted)`

Recurring: `is_recurring bool default false`, `renewal_due_date date?`

Extensibility: `template_id uuid?`, `custom_fields jsonb default '{}'`

Free-form: `notes text?`

Indexes: `status`, `award_date`, `renewal_due_date` (for the due-soon panel).

### `grant_templates`
`id uuid`, `name text`, `description text?`, `default_checklist_items jsonb`, `created_at`, `updated_at`

`default_checklist_items` shape: `[{label: string, offset_days_from_award: number | null}]`. When a grant is created from a template, these items seed `grant_tasks` rows.

### `field_definitions`
`id uuid`, `key text` (slug, unique within scope), `label text`, `field_type enum (text | number | date | bool | select)`, `options jsonb?` (for select), `template_id uuid?` (null = global), `sort_order int`, `created_at`

Admin adds from `/grants/settings`. UI renders one input per applicable definition; value stored in `grants.custom_fields[key]`.

### `grant_reports`
`id uuid`, `grant_id uuid FK`, `name text`, `due_date date`, `submitted_date date?`, `sections jsonb default '[]'`, `created_at`, `updated_at`

`sections` shape: `[{type: 'narrative' | 'financial' | 'metric', title: string, content: any}]`. The `content` shape depends on type — narrative is rich-text HTML/markdown, financial is `[{category, planned, spent}]`, metric is `[{key, target, actual}]`.

Indexes: `(grant_id)`, `(due_date) WHERE submitted_date IS NULL` (for the due-soon panel).

### `grant_tasks`
`id uuid`, `grant_id uuid FK`, `label text`, `due_date date?`, `completed_at timestamptz?`, `completed_by text?`, `sort_order int`, `created_at`

### `grant_attachments`
`id uuid`, `grant_id uuid FK`, `filename text`, `storage_path text`, `content_type text`, `size_bytes bigint`, `uploaded_at timestamptz`, `uploaded_by text`

Files live in Supabase Storage bucket `grant-attachments` at path `{grant_id}/{uuid}-{filename}`.

### `grant_notes`
`id uuid`, `grant_id uuid FK`, `body text`, `author text`, `created_at timestamptz`

Append-only. No edit or delete in v1.

## 5. Routes and UX

### Route tree
```
src/app/
├── (grants)/
│   ├── layout.tsx                       # GrantsTopBar + sidebar
│   ├── grants/
│   │   ├── page.tsx                     # Landing: due-soon + pipeline summary
│   │   ├── pipeline/page.tsx            # Pipeline table, grouped by status
│   │   ├── reports/page.tsx             # All reports across grants, filter by due
│   │   ├── new/page.tsx                 # Create grant
│   │   ├── [id]/page.tsx                # Grant detail (tabbed workspace)
│   │   └── settings/page.tsx            # Templates + field defs (admin-only)
├── api/
│   └── grants/
│       ├── route.ts                     # GET list, POST create
│       ├── [id]/route.ts                # GET / PATCH / DELETE
│       ├── [id]/award/route.ts          # POST → writes SF Opportunity
│       ├── [id]/sync/route.ts           # POST → idempotent SF retry
│       ├── [id]/attachments/route.ts    # POST upload / GET list
│       ├── [id]/attachments/[fileId]/route.ts # GET signed URL, DELETE (admin only)
│       └── funder-search/route.ts       # GET ?q= → SOQL SF Account search
└── middleware.ts                        # modified: add grants role
```

### Grant detail page
Tabbed workspace: **Overview · Tasks · Reports · Files · Notes · Participants**. The Participants tab is rendered in v1 but disabled with a "Coming in v2" tooltip.

Overview tab shows: core fields (funder, type, program, restriction, amounts, dates, recurring), custom fields (scoped by template), a Salesforce-link card if `sf_opportunity_id` is set, and a "Next action" card surfacing the nearest due report or renewal.

Pipeline view is a filterable table grouped by status, not a kanban (matches existing dashboard visual language).

### Role-based navigation
- **Admin role** (existing `NavSidebar`): adds a "Grants" entry alongside Campaigns / Schedule / Invoices / Dev Portal link
- **Grants role**: new sidebar with Grants · Pipeline · Reports (and Settings only if the role is admin — grants role cannot reach Settings)
- **Dev role**: unchanged, still locked to `/dev/*`

Middleware gating mirrors the existing dev-role lock: grants role accessing `/campaigns`, `/invoices`, `/schedule`, etc., is redirected to `/grants`; grants role accessing `/grants/settings` is redirected to `/grants`.

## 6. Key workflows

### 6.1 Create a grant (pre-award)
1. User clicks **New grant**. Form first asks for a **template** (Corporate Sponsor, Private Foundation, Blank, or any admin-added template).
2. Funder picker: debounced search box calls `GET /api/grants/funder-search?q=...` → server runs SOQL `SELECT Id, Name, Type FROM Account WHERE Name LIKE '%…%'` → user picks an existing Account, or clicks "Add new funder" (creates a free-text funder name with `sf_account_id = null`; can be linked later from grant detail).
3. Core fields rendered (funder_type, restriction, program_name, request_amount, submission_date, notes). Custom fields scoped to the chosen template (and any global ones) render below.
4. Submit → `POST /api/grants` inserts into Supabase with `status = 'pending'`. No Salesforce write yet.
5. Template's `default_checklist_items` seed rows into `grant_tasks` (with `due_date = null` — dates get set when the award happens and the offset is applied).

### 6.2 Mark grant awarded (the SF writeback moment)
1. On grant detail, user clicks **Mark awarded**. Modal asks: amount_awarded, award_date, grant_closes_date, recurring (y/n), and an optional list of report due dates.
2. Submit → `POST /api/grants/[id]/award`:
   1. Supabase: `UPDATE grants SET status='awarded', amount_awarded, award_date, grant_closes_date, is_recurring WHERE id = $1`
   2. Insert `grant_reports` rows for each entered due date (with empty `sections` array).
   3. Update `grant_tasks`: set `due_date = award_date + offset_days_from_award` for any tasks with null due_date.
   4. Salesforce writeback: upsert an `Opportunity` (Type = Grant Received, StageName = Awarded, Amount = amount_awarded, CloseDate = award_date, AccountId = sf_account_id, Name = `"{funder_name} — {program_name or 'Grant'}"`). If `sf_opportunity_id` is already set (e.g., imported grant), update by that ID; otherwise create and store the returned ID in `grants.sf_opportunity_id`.
3. **Error path**: if the SF write fails, Supabase changes are already committed. API responds with `{ok: true, sf_sync: 'failed', error: '...'}`. Grant detail shows a red banner "Salesforce sync failed — [Retry]". Retry hits `POST /api/grants/[id]/sync` which is idempotent: if `sf_opportunity_id` is set, update by ID; otherwise attempt creation with a dedupe check (match on AccountId + CloseDate + Amount within a tolerance). No silent failure.

### 6.3 Fill and submit a report
1. Reports tab on grant detail shows all `grant_reports` for this grant, each with due_date, submitted_date (if any), and a progress indicator.
2. Open a report → sections editor. User can add/remove/reorder sections; each section has a type (narrative / financial / metric) and is rendered with the matching editor (rich-text / table / key-target-actual rows). Edits auto-save to `sections` JSONB on blur.
3. Click **Mark submitted** → sets `submitted_date = today`. No PDF export in v1.
4. Dashboard landing re-queries: this report drops out of the "due in 30 days" panel.

### 6.4 Upload an attachment
1. Files tab → drag/drop or file input.
2. Client sends multipart to `POST /api/grants/[id]/attachments`. Server:
   - Validates size (< 25 MB) and content-type (PDF / DOCX / XLSX / JPG / PNG)
   - Uploads to Supabase Storage at path `{grant_id}/{uuid}-{filename}`
   - Inserts `grant_attachments` row
3. Download: `GET /api/grants/[id]/attachments/[fileId]` generates a short-lived (5-minute) signed URL via Supabase Storage and redirects the browser.
4. Delete: only admin role can delete (audit trail for grants-role work). `DELETE /api/grants/[id]/attachments/[fileId]` removes the storage object and the row.

### 6.5 One-time CSV import at launch
A `dashboard/scripts/import-grants-csv.ts` script reads a CSV path passed as a CLI argument (example: the JPF-provided `FYE2025 grants report ... .csv`). Supports a `--dry-run` flag that parses and logs intended inserts without writing.

1. Parse rows, filter to active grants only: `status ∈ {pending, awarded, received, open}`. Skip declined and fully-closed historical rows.
2. For each row:
   - Parse the Program column into `restriction` (restricted / unrestricted) + `program_name` (text)
   - Parse the Status column: strip any embedded date into `declined_date` and reduce to enum value
   - Fuzzy-match funder name against SF Accounts; unmatched rows get `sf_account_id = null` and are logged
3. Insert into `grants` with `created_by = 'csv_import'`. No SF writeback (existing Opportunities will be linked in a second pass).
4. Second pass: for awarded / received rows, search SF for an existing Opportunity by name + close_date; if found, store `sf_opportunity_id`. Unmatched rows flagged in a console summary for manual review.
5. Idempotent: rerun-safe via a partial unique index on `(funder_name, submission_date, request_amount) WHERE submission_date IS NOT NULL`. Rows missing a submission_date are deduped by the script in-memory against existing DB rows before insert (checking on funder_name + request_amount + status) because Postgres treats NULLs as distinct in unique indexes.

## 7. Auth, env, and Supabase setup

### Middleware changes (`dashboard/src/middleware.ts`)
- Accept `grants` as a third role value
- If role is `grants` and path doesn't start with `/grants`, redirect to `/grants`
- If role is `grants` and path is `/grants/settings`, redirect to `/grants` (settings is admin-only)
- Admin keeps access to everything

### Login page changes (`dashboard/src/app/login/page.tsx`)
- Add a third tile: **Grants Team**
- Grid becomes 3-column on desktop, stacks on mobile
- `/api/auth` today hard-codes validation for `admin` | `dev` only (`dashboard/src/app/api/auth/route.ts:6-7`) and selects the password by role. Extend the allowed role set to include `grants`, and extend the password lookup to return `process.env.GRANTS_PASSWORD` when role is `grants`.
- Successful grants login redirects to `/grants`

### New environment variables
```
GRANTS_PASSWORD=...                # login password for the grants role
SUPABASE_URL=...                   # project URL (e.g. https://xxx.supabase.co)
SUPABASE_SERVICE_ROLE_KEY=...      # SERVER-ONLY, never exposed to the client
```
Existing `SF_*`, `AUTH_PASSWORD`, `DEV_PASSWORD`, `RESEND_API_KEY` stay as-is. Add all three to `.env.local` locally and to the Vercel project env for prod.

### Supabase project setup
- Create a new Supabase project (free tier is adequate for JPF's scale — fewer than ~500 grants over years). Region `us-east-1`.
- SQL migrations stored in `dashboard/supabase/migrations/` applied via the Supabase CLI. The first migration creates the seven tables and the `grant-attachments` storage bucket.
- No Supabase Auth features used. No RLS policies. Storage bucket is private; server mints signed URLs on demand.
- Seed migration populates default `grant_templates` (Corporate Sponsor, Private Foundation, Blank). Seed of `field_definitions` decided during plan writing.
- Client library: `@supabase/supabase-js`, instantiated once in `dashboard/src/lib/supabase.ts` with the service-role key. A module-level runtime check throws if the module is imported from a client component.

### Manual setup the user performs during implementation
1. Create the Supabase project, hand me the URL + service-role key
2. Pick a grants-role password
3. Add all three env vars to Vercel project settings

## 8. Testing strategy

Existing repo has no test runner — validation is manual browser testing per feature. Keeping that pattern:

- **Per-PR manual checklist**: create grant → mark awarded → verify SF Opportunity appears → fill a report section → upload attachment → download via signed URL → delete as admin and confirm grants role cannot delete
- **SF write failure test**: temporarily mis-set `SF_PASSWORD` in a dev session, exercise the award flow, verify the red banner and retry behavior
- **CSV import test**: run the import script against a staging Supabase project (or with `--dry-run`) before running in prod
- **Role tests**: log in as each role, verify middleware redirects (grants → `/grants` when hitting `/campaigns`; grants → `/grants` when hitting `/grants/settings`)

## 9. Risks and mitigations

| Risk | Mitigation |
|---|---|
| SF write fails silently → Supabase and SF diverge | Visible red banner on grant detail; idempotent `/sync` retry endpoint; `sf_opportunity_id` stored so retry upserts instead of duplicating |
| CSV import fuzzy-matches the wrong SF Account for a funder | Match strictness tunable; unmatched rows logged; admin can edit `sf_account_id` on grant detail post-import |
| Service-role key accidentally exposed via client component | `supabase.ts` adds runtime check that throws if imported from a client context; key read only via server-side `process.env` |
| Attachment upload abuse (huge files, bad types) | Server-side size (< 25 MB) and content-type validation; private bucket + signed URLs |
| Cookie-as-role auth remains unsigned (pre-existing issue) | Out of scope for this project — flagged as a follow-up. Low risk since passwords gate role assignment. |
| Data loss (someone deletes a grant by accident) | Supabase automated daily backups (included on free tier). Grant delete is admin-only. Soft-delete considered for v2 if it becomes a real concern. |

## 10. Rollout

1. Build feature behind the new role; admin also sees it (for testing and backup access)
2. Deploy to prod with Supabase tables created and empty. Run the CSV import script pointed at prod to seed active grants.
3. Hand-verify a few imported grants with Conner. Have him mark one grant as awarded and confirm the matching SF Opportunity appears correctly.
4. Share login URL + grants password with Mark and Conner. Monitor usage for 2 weeks.
5. Collect feedback. Decide next priority based on actual use: usually participant attribution (v2) or budget line-items.

## 11. Appendices

### A. Source CSV columns (for field mapping)
From the active spreadsheet JPF provided: Funder, Notes, Status, Program, Request Amount, Submission Date, Award Date, Amount Awarded / Received, Receipt Date, Acknowledged, Grant Closes, Report Requirement.

Mapping to `grants` table:
- Funder → `funder_name`
- Notes → `notes`
- Status → `status` (+ `declined_date` extracted from any "Declined MM-DD-YYYY" variant)
- Program → split into `restriction` (restricted / unrestricted) and `program_name`
- Request Amount → `request_amount`
- Submission Date → `submission_date`
- Award Date → `award_date`
- Amount Awarded / Received → `amount_awarded` (if status = awarded) or `amount_received` (if status = received)
- Receipt Date → `receipt_date`
- Acknowledged → `acknowledged_date`
- Grant Closes → `grant_closes_date`
- Report Requirement → seed a `grant_reports` row if populated with a date

Natural grouping in the sheet (Corporate Sponsor vs Private Foundation) maps to `funder_type`.
