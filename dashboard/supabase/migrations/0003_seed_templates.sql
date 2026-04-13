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
