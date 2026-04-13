-- Create private bucket for grant attachments. Signed URLs are minted
-- server-side; no anonymous public access.
insert into storage.buckets (id, name, public)
values ('grant-attachments', 'grant-attachments', false)
on conflict (id) do nothing;
