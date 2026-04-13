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
