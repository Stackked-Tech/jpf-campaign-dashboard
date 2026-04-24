-- Expand grant_tasks to capture task type and description.
-- Reference: user feedback 2026-04-24 — tasks panel should record
-- title + type + description + due date, with explicit mark-as-done.

alter table grant_tasks add column if not exists task_type text;
alter table grant_tasks add column if not exists description text;
