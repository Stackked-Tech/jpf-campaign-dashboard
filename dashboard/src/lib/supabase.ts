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
