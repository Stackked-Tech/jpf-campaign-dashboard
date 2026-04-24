-- RPC function for adding a custom field to the grants table.
-- Handles field_definitions insert + ALTER TABLE inside a single transaction
-- so that an ALTER failure rolls back the metadata insert.
-- Reference: docs/superpowers/specs/2026-04-24-grants-ui-design.md §6

create or replace function add_custom_field(
  p_key text,
  p_label text,
  p_field_type text,
  p_options jsonb,
  p_sort_order int,
  p_is_hidden_default boolean
)
returns field_definitions
language plpgsql
security definer
set search_path = public
as $$
declare
  result field_definitions;
  sql_type text;
begin
  -- Validate key shape
  if p_key !~ '^cf_[a-z0-9_]{2,40}$' then
    raise exception 'Invalid key format: %. Must be cf_<snake_case>', p_key;
  end if;

  -- Map field_type -> PG type
  sql_type := case p_field_type
    when 'text' then 'text'
    when 'long_text' then 'text'
    when 'number' then 'numeric(18,4)'
    when 'currency' then 'numeric(18,2)'
    when 'date' then 'date'
    when 'bool' then 'boolean'
    when 'select' then 'text'
    when 'multi_select' then 'jsonb'
    else null
  end;

  if sql_type is null then
    raise exception 'Invalid field_type: %', p_field_type;
  end if;

  -- Guard: column must not already exist
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'grants'
      and column_name = p_key
  ) then
    raise exception 'Column already exists on grants: %', p_key;
  end if;

  -- Insert metadata first (unique constraint on key catches dupes)
  insert into field_definitions (
    key, label, field_type, options, sort_order, is_hidden_default
  )
  values (
    p_key, p_label, p_field_type, p_options, p_sort_order, p_is_hidden_default
  )
  returning * into result;

  -- Add the column. If this raises, the prior insert is rolled back.
  execute format('alter table grants add column %I %s', p_key, sql_type);

  return result;
end;
$$;

-- Grant execute to authenticated + anon (service_role bypasses grants anyway)
grant execute on function add_custom_field(text, text, text, jsonb, int, boolean) to anon, authenticated, service_role;

-- Companion: reconcile function used by scripts/reconcile-custom-fields.ts
-- Idempotently adds any missing columns for existing field_definitions rows.
create or replace function reconcile_custom_fields()
returns table (key text, status text)
language plpgsql
security definer
set search_path = public
as $$
declare
  def record;
  sql_type text;
  existing_count int;
begin
  for def in
    select * from field_definitions order by sort_order
  loop
    sql_type := case def.field_type
      when 'text' then 'text'
      when 'long_text' then 'text'
      when 'number' then 'numeric(18,4)'
      when 'currency' then 'numeric(18,2)'
      when 'date' then 'date'
      when 'bool' then 'boolean'
      when 'select' then 'text'
      when 'multi_select' then 'jsonb'
      else null
    end;

    select count(*) into existing_count
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'grants'
      and column_name = def.key;

    if existing_count = 0 and sql_type is not null then
      execute format('alter table grants add column %I %s', def.key, sql_type);
      key := def.key;
      status := 'added';
      return next;
    else
      key := def.key;
      status := 'exists';
      return next;
    end if;
  end loop;
end;
$$;

grant execute on function reconcile_custom_fields() to anon, authenticated, service_role;
