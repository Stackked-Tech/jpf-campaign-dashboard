# Grants UI — Design Spec (v2)

**Date:** 2026-04-24
**Status:** Approved for implementation planning
**Supersedes:** `2026-04-13-grants-hub-design.md` (v1 — never deployed; schema dropped on 2026-04-23)

## Context and change from v1

The v1 design positioned Grants Hub as a standalone module with its own schema, linked to Salesforce via foreign keys. During implementation the user reversed course:

1. Dropped the v1 schema entirely (all 7 tables + 4 enums) on 2026-04-23.
2. Rebuilt `grants` as a **1:1 mirror of the SF `Opportunity` object** (142 columns, snake_cased) — imported all 90 SF Opportunities with `RecordType = Grant`.
3. Created `instrumentl_opportunities` as a sibling table holding 90 Instrumentl pipeline pursuits.

This spec describes the UI that sits on top of that revised data model.

The 14 files from v1 (`src/app/(grants)/*`, `src/app/api/grants/*`, `src/components/grants/*`, `src/lib/grants/*`) reference the dropped schema and will be removed in a cleanup commit before new work begins.

## Goal

A staff-facing UI for managing JPF's grant portfolio (pre-award pursuits + post-award reporting + attachments + tasks + notes) with per-record push-back to Salesforce. Primary users: Mark and Conner.

## 1. Scope

### In scope
- Dashboard landing view with KPI cards and filterable list
- Grant detail page with inline-editable fields and per-record Sync-to-SF
- Per-grant operational entities: reports, tasks, attachments, notes
- Admin-configurable custom fields (add-only, dashboard-only — no SF sync)
- Cross-grant reports calendar view
- Unified view across SF-mirror grants and Instrumentl pipeline pursuits

### Out of scope (deferred)
- AI-assisted grant discovery/writing
- QuickBooks budget-actuals integration
- Brian Mar external-CRM ingest
- Program participant attribution
- User accounts / role model (stays on the existing `AUTH_PASSWORD` cookie)
- Notifications (email, Slack, in-app toast beyond save confirmations)
- Bulk actions (multi-select + operate)
- Saved views / custom filter presets

## 2. Information Architecture

Routes added to the existing `(dashboard)` route group, so they inherit `NavSidebar`, auth cookie, and theme.

```
/grants                  Landing (KPI cards + filterable list)
/grants/[id]             Detail (two-column: core + sidebar)
/grants/settings         Admin: custom field designer
/grants/reports          Cross-grant reports calendar (v1.1)
```

Nav: new "Grants" entry in `NavSidebar` alongside Campaigns / Invoices / Schedule.

Unified view: `/grants` shows both SF-mirror rows and Instrumentl-pipeline rows, distinguished by a source badge. No automatic deduplication; users manually link duplicates via a per-row "Link to SF grant…" action.

## 3. Data Model

Five new tables plus dynamic columns on `grants`. All land in a single migration `supabase/migrations/0006_grants_ui_schema.sql`.

### 3.1 `grant_reports`
Simple tracking (chosen over structured sections): each row records a report's schedule and submission state. The actual content of the report is an uploaded file in `grant_attachments` with `report_id` set back to this row (§3.3).
```sql
id               uuid primary key default gen_random_uuid()
grant_id         text not null references grants(id) on delete cascade
name             text not null
due_date         date not null
submitted_date   date
notes            text
status           text check (status in ('not_started','in_progress','submitted','waived'))
created_at       timestamptz not null default now()
updated_at       timestamptz not null default now()
```
Index on `(grant_id, due_date)`. Partial index `where submitted_date is null` for overdue queries.

### 3.2 `grant_tasks`
```sql
id             uuid primary key default gen_random_uuid()
grant_id       text not null references grants(id) on delete cascade
label          text not null
due_date       date
completed_at   timestamptz
sort_order     int not null default 0
created_at     timestamptz not null default now()
```
Index on `grant_id`.

### 3.3 `grant_attachments`
```sql
id             uuid primary key default gen_random_uuid()
grant_id       text not null references grants(id) on delete cascade
report_id      uuid references grant_reports(id) on delete set null   -- nullable; set when the file is a report submission
filename       text not null
storage_path   text not null
content_type   text not null
size_bytes     bigint not null
category       text                         -- free text: "award_letter", "proposal", "report_submission", etc.
uploaded_at    timestamptz not null default now()
```
Storage bucket: `grant-attachments`, private, signed-URL access.

A report's submitted file is a row in `grant_attachments` with `report_id` set. The reports panel displays the file inline on the report row; the general "Files" panel shows all attachments for the grant (with a subtle indicator when a file is tied to a report).

### 3.4 `grant_notes`
```sql
id          uuid primary key default gen_random_uuid()
grant_id    text not null references grants(id) on delete cascade
body        text not null
author      text not null default 'admin'
created_at  timestamptz not null default now()
```
Index on `grant_id`. Ordered by `created_at desc` for display.

### 3.5 `field_definitions`
Metadata-as-source-of-truth for custom fields. Real columns are created on `grants` via a reconciliation step driven by this table.
```sql
id                  uuid primary key default gen_random_uuid()
key                 text unique not null           -- snake_case, prefix enforced 'cf_'
label               text not null
field_type          text not null check (field_type in
                      ('text','long_text','number','currency','date','bool',
                       'select','multi_select'))
options             jsonb                          -- array of strings for select types
sort_order          int not null default 0
is_hidden_default   boolean not null default false
created_at          timestamptz not null default now()
updated_at          timestamptz not null default now()
```

### 3.6 Addition to `grants`
```sql
alter table grants add column last_synced_snapshot jsonb;
```
Captures the values last pushed to SF so the sync-to-SF modal can compute a reliable diff.

### 3.7 Reconciliation semantics (custom fields)
- Adding a field: handler inserts into `field_definitions`, then executes `ALTER TABLE grants ADD COLUMN cf_<key> <pg_type>`. Failure of the `ALTER` rolls back the `INSERT`.
- Editing a field: updates only `label`, `sort_order`, `is_hidden_default`, or `options` (add-only for options). Never touches the column itself.
- Deleting a field: not supported from the UI. If a field is truly unused, an engineer runs a migration.
- Reconciliation CLI (`scripts/reconcile-custom-fields.ts`): compares `field_definitions` to `information_schema.columns` and creates any missing columns. Runs in dev after checkout; manual on prod if ever needed (not part of normal flow because field adds happen in-request).

## 4. Landing Page — `/grants`

### Layout
- Header strip: page title, search box (funder/name), `+ New grant` button
- KPI row: 4 cards, each click-to-filter
  - FY Awarded — sum of `amount` where status in {awarded, received} and close_date within current FY
  - Pipeline Value — sum of `amount` (or midpoint `amount` for Instrumentl) where status is pre-award
  - Reports Due — count of `grant_reports` where `submitted_date is null` within next 30 days; overdue count highlighted
  - Renewals Next 90d — grants where `npsp_grant_period_end_date_c` falls within next 90 days
- Filter bar: Status, Source, Owner, Deadline range, Amount range, Program area, custom `select` fields — all multi-select
- List: dense table, 50/page, sticky header, per-row kebab menu
- Footer: row count + pagination

### Default columns
| Column | Source |
|---|---|
| Funder | `Account.Name` (SF) or `instrumentl.account_name` |
| Name | `grants.name` or `instrumentl.opportunity_name` |
| Status | `stage_name` or `status`, chip-styled |
| Amount | `amount` (SF) or `amount` (Instrumentl midpoint). Range shown on hover for Instrumentl. |
| Internal deadline | `instrumentl.internal_deadline` or `grants.close_date` |
| External deadline | `instrumentl.deadline` (Instrumentl only) |
| Next action | Earlier of: nearest-due open task OR nearest-due unsubmitted report |
| Source | `[SF]` / `[Instrumentl]` / `[Linked]` badge |

Column picker menu lets users show/hide any other field including custom fields.

### Unified-view dedup
- Instrumentl rows display alongside SF rows; no automatic merging.
- Per-row action "Link to SF grant…" opens a picker showing fuzzy-match candidates from `grants`, ranked by the F1 scorer already in `scripts/match-instrumentl-to-grants.mjs`.
- Linking writes `instrumentl_opportunities.sf_opportunity_id` and changes the row's source badge to `[Linked]`.
- Linked rows are hidden from default list but visible when the "Show linked" filter toggle is on.

### States
- Empty: "No grants yet. Import from Salesforce or add manually."
- Filtered empty: "No grants match these filters. [Clear filters]"
- Loading: skeleton rows
- Per-row sync error: inline banner on that row

## 5. Grant Detail Page — `/grants/[id]`

### Layout (two-column)
Main column (wide) + right sidebar (fixed width). Top strip spans both columns.

```
┌────────────────────────────────────────────┬──────────────┐
│  Breadcrumb: Grants / <funder>             │              │
│  <Grant name>                              │              │
│  <funder> · <status> · <amount>  [Sync SF] │              │
├────────────────────────────────────────────┤              │
│  Tabs: Core fields | Custom fields | Activity              │
│                                            │   Reports    │
│  <editable field rows>                     │   Tasks      │
│  ↓ Show all 142 SF fields                  │   Files      │
│                                            │   Notes      │
└────────────────────────────────────────────┴──────────────┘
```

### Main column — tabs
- **Core fields** — curated list of 18 SF-mirror columns (hardcoded in `src/lib/grants/core-fields.ts`):
  - Funder (resolved via `account_id` → Account.Name)
  - `stage_name`, `amount`, `close_date`
  - `npsp_requested_amount_c`, `npe01_payments_made_c`, `npe01_amount_outstanding_c`
  - `npsp_grant_period_start_date_c`, `npsp_grant_period_end_date_c`
  - `npsp_grant_program_area_s_c`, `npsp_acknowledgment_date_c`, `npsp_acknowledgment_status_c`
  - `type`, `partner_engagement_type_c`, `description`
  - `owner_id`, `record_type_id`, `created_date`
- `Show all 142 SF fields` expander reveals the rest, grouped by prefix (SF system / NPSP / custom `_c`).
- **Custom fields** — all rows from `field_definitions` rendered by `sort_order`. Same inline-edit pattern.
- **Activity** — combined feed: `grant_notes` + system-authored entries written when sync happens or a field changes.

### Inline editing
- Hover: dotted underline. Click: editor appropriate to type.
- Saves: `Enter` or blur. `Esc` cancels. `Cmd+Z` reverts within the session.
- Optimistic UI; reverts on server error with a toast.
- SF-mirror fields indicate `[SF]` on hover ("Will sync to Salesforce"). Custom fields indicate `[Dashboard]`.

### Sync-to-Salesforce flow
1. `GET /api/grants/[id]/sync` returns the diff `current → last_synced_snapshot` for SF-mirror fields only.
2. Modal displays per-field rows with checkboxes (all checked by default).
3. User confirms → `POST /api/grants/[id]/sync` with the selected keys.
4. Server calls `jsforce.Opportunity.update(id, {...})`, captures new `SystemModstamp`, updates `last_synced_snapshot` with the just-pushed values.
5. Success → toast; failure → banner in modal with SF error text, state preserved for retry.

Custom fields never appear in this diff — they don't sync.

### Right sidebar panels (all collapsible, default open)
- **Reports** — sorted by `due_date`. Overdue rows red. Inline edit on click. `+ Add report` opens inline form.
- **Tasks** — checklist. Checkbox toggles `completed_at`. Click text to rename. Drag handle to reorder.
- **Files** — thumbnail + name. Click opens signed URL in new tab. Drag-drop upload or `+ Upload`. Category dropdown on upload.
- **Notes** — latest 5 + "See all" jumps to Activity tab. `+ Add note` textarea inline.

## 6. Custom Field Designer — `/grants/settings`

Settings page section: "Custom fields". Drag-to-reorder list + `+ Add field` button.

### List row
```
⋮⋮  <label>  <type>  <visible|hidden>  [Edit]
```
Drag handle rearranges; drop updates `sort_order`. Visibility toggle updates `is_hidden_default`. Edit opens a slide-over.

### Add flow (slide-over)
Inputs: Label, Key (auto-slug, editable, `cf_` prefix enforced), Type, Options (if select), default Visibility.

Validation:
- Label: 1–60 chars
- Key: `^cf_[a-z0-9_]{2,40}$`, unique in `field_definitions.key` AND unique against `information_schema.columns.column_name` on `grants`
- Options (for selects): at least 2, each 1–40 chars, unique

On Create (single request wrapped in a Postgres transaction):
1. `BEGIN`
2. Validate
3. `INSERT INTO field_definitions`
4. `ALTER TABLE grants ADD COLUMN <key> <pg_type>`
5. If any step fails: `ROLLBACK` (undoes both insert and ALTER), return error
6. Success: `COMMIT`, return new row

(Postgres supports DDL inside transactions, so this is atomic.)

### Edit flow
Editable: `label`, `is_hidden_default`, `sort_order`, `options` (add-only).
Locked: `key`, `field_type`.

### Not supported (by design)
- Delete field
- Change field type
- Remove options
- Field-level permissions

## 7. Component & File Structure

```
src/app/(dashboard)/grants/
  page.tsx                             server component: list + filters
  [id]/page.tsx                        server component: detail wrapper
  settings/page.tsx                    custom-field designer
  reports/page.tsx                     cross-grant reports view (v1.1)

src/app/api/grants/
  route.ts                             GET list w/ filters
  [id]/route.ts                        GET detail, PATCH single field
  [id]/sync/route.ts                   GET diff, POST apply
  [id]/reports/route.ts                GET/POST
  [id]/reports/[rid]/route.ts          PATCH/DELETE
  [id]/tasks/route.ts                  GET/POST
  [id]/tasks/[tid]/route.ts            PATCH/DELETE
  [id]/attachments/route.ts            GET list, POST upload
  [id]/attachments/[aid]/route.ts      GET signed URL, DELETE
  [id]/notes/route.ts                  GET/POST
  field-definitions/route.ts           GET list, POST create (runs ALTER)
  field-definitions/[did]/route.ts     PATCH (label/order/visibility/options)
  instrumentl/link/route.ts            POST link Instrumentl → SF grant

src/components/grants/
  grants-list.tsx
  grants-list-row.tsx
  kpi-cards.tsx
  grant-detail.tsx
  grant-header.tsx
  grant-fields/
    field-row.tsx
    field-editor.tsx
    core-fields-tab.tsx
    custom-fields-tab.tsx
    all-fields-expander.tsx
  grant-sidebar/
    reports-panel.tsx
    tasks-panel.tsx
    attachments-panel.tsx
    notes-panel.tsx
  sync-to-sf-modal.tsx
  custom-field-designer/
    field-list.tsx
    add-field-slideover.tsx
    edit-field-slideover.tsx
  instrumentl-link-picker.tsx

src/lib/grants/
  queries.ts
  mutations.ts
  sf-sync.ts
  reconcile-fields.ts
  core-fields.ts
  types.ts
```

## 8. Data Flow

### Single-field edit
User blurs editor → optimistic update → `PATCH /api/grants/[id]` `{ <column>: <value> }` → server validates column is in allowed set (SF-mirror ∪ field_definitions.keys) → writes to Supabase → toast on success, revert + error toast on failure.

### Sync-to-SF
Modal open → `GET /api/grants/[id]/sync` computes diff server-side using `last_synced_snapshot` → user confirms → `POST /api/grants/[id]/sync` pushes via jsforce → server updates `last_synced_snapshot` → fresh `SystemModstamp` reflected on next list fetch.

### Field creation
Designer submit → `POST /api/grants/field-definitions` → insert metadata → ALTER TABLE → if either fails the whole operation is rolled back → new field immediately available in detail views.

## 9. Error Handling

| Failure | Surface | Behavior |
|---|---|---|
| Supabase write fails | Field edit | Toast with PG error; optimistic state reverts |
| SF sync network error | Sync modal | Inline banner; state preserved; retry button |
| SF field validation rejection | Sync modal | Per-row error under the offending field |
| ALTER TABLE fails on field create | Designer slide-over | Slide-over shows PG error; field_definitions rollback; nothing created |
| File upload fails | Attachments panel | Toast + retry affordance; partial uploads cleaned up |
| SF connection unavailable | Any sync path | "Salesforce connection unavailable — try again in a minute"; next request rebuilds the jsforce token |

No silent failures. Every write confirms success to the user.

## 10. Testing

No test runner currently configured. Introducing `vitest` solely for three units of pure logic:
- `reconcile-fields.ts` — given a `field_definitions` row + existing columns, produce correct DDL
- `sf-sync.ts` diff generator — given current values + `last_synced_snapshot`, produce correct changed-fields set
- Custom-field key validator — regex + reserved list

Plus a snapshot test for the `/api/grants?…` query builder.

Manual QA via a `docs/grants-ui-qa-checklist.md` created in Phase 1. No E2E, no component tests, no visual regression — not justified for a 2-user internal tool.

## 11. Cleanup of v1 Remnants

Single commit before Phase 1 begins:

```
chore(grants): remove v1 schema code

Removes:
- src/app/(grants)/                    (7 pages + layout)
- src/app/api/grants/[id]/             (tasks, notes, reports, award, sync,
                                        attachments — old schema routes)
- src/app/api/grants/templates/
- src/app/api/grants/field-definitions/ (old shape)
- src/components/grants/
- src/lib/grants/

Scripts kept:
- scripts/import-grants-csv.ts         (historical reference)
- scripts/import-sf-grants.mjs         (still in use)
- scripts/import-instrumentl-pdf.mjs   (still in use)
- scripts/match-instrumentl-to-grants.mjs (reference — still useful)
```

TypeScript build should continue to pass; none of these files are imported by rendered routes.

## 12. Phased Rollout

| Phase | Deliverable | Est. effort |
|---|---|---|
| 0 | Cleanup commit + new migration (reports / tasks / attachments / notes / field_definitions) | ½ day |
| 1 | Landing `/grants` (list + KPIs + filters, read-only) | 2 days |
| 2 | Detail `/grants/[id]` (two-column, read-only, no sidebar panels) | 1.5 days |
| 3 | Inline editing + Sync-to-SF modal | 2 days |
| 4 | Sidebar panels (reports, tasks, attachments, notes) | 3 days |
| 5 | Custom field designer + reconciliation CLI | 2 days |
| 6 | Instrumentl link picker + cross-grant `/grants/reports` | 1.5 days |

**Total: ~12.5 focused days.** Natural pause point after Phase 4: full operational workflow minus extensibility.

## 13. Open Items (not blocking approval)

- **Core-fields list** — confirm the 18 SF columns proposed in §5 before Phase 2 starts.
- **Notifications** — no alerts in scope. Revisit after Phase 4 if needed.
- **Fuzzy-match picker content** — confirm minimum info shown per SF candidate in the Instrumentl link picker (proposed: funder name, record type, close date, amount).

## 14. Design Decisions (from brainstorming session)

1. **Scope:** Option C (essentials + reporting lifecycle + attachments + tasks) + custom-field designer.
2. **Custom fields:** Real columns on `grants`, add-only from UI. Metadata in `field_definitions`; reconciliation creates columns on demand. No delete. No SF sync for custom fields.
3. **Pipeline/grants relationship:** Unified view — one list across SF-mirror and Instrumentl pipeline, no automatic dedup; manual link action per row.
4. **Landing:** Dashboard + List (A) — KPI cards above a filterable table, matches the April-meeting priority on reporting alerts.
5. **Detail:** Two-column (C) — main content + persistent sidebar so reports/tasks/attachments stay visible while editing.
6. **Reports:** Simple tracking (A) — `{name, due_date, submitted_date, notes, uploaded_file}`. Structured sections are a later upgrade.
7. **Auth:** Keep the existing `AUTH_PASSWORD` cookie pattern. No user accounts yet.
