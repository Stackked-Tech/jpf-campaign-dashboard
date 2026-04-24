-- Instrumentl opportunities — pre-award pipeline from the Instrumentl grants-research tool.
-- Sibling of grants (SF mirror): this table holds pursuits that aren't yet SF Opportunities.
-- When one is submitted/won it can be linked via sf_opportunity_id → grants.id.

create extension if not exists "pgcrypto";

create table instrumentl_opportunities (
  id uuid primary key default gen_random_uuid(),

  -- Core fields from the Instrumentl report
  opportunity_name text not null,
  account_name text,
  internal_deadline date,
  deadline date,
  status text,

  -- Amount: scalar (midpoint for ranges, bound for Up-to/More-than) — SF-compatible for sync
  amount numeric(18, 2),
  -- Original amount phrasing when the source was a range/bounded expression
  amount_range text,
  -- True when the funder's figure represents in-kind support, not cash
  is_in_kind boolean not null default false,

  next_task_and_notes text,

  -- Link to SF Opportunity (grants.id) once this pursuit is submitted into SF
  sf_opportunity_id text references grants(id) on delete set null,

  -- Audit
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  synced_at timestamptz
);

create index instrumentl_opportunities_status_idx on instrumentl_opportunities(status);
create index instrumentl_opportunities_deadline_idx on instrumentl_opportunities(deadline);
create index instrumentl_opportunities_internal_deadline_idx on instrumentl_opportunities(internal_deadline);
create index instrumentl_opportunities_sf_opportunity_id_idx
  on instrumentl_opportunities(sf_opportunity_id)
  where sf_opportunity_id is not null;

-- updated_at trigger
create or replace function set_updated_at() returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger instrumentl_opportunities_set_updated_at
  before update on instrumentl_opportunities
  for each row execute function set_updated_at();
