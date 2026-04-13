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
