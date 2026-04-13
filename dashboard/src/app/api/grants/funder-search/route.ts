import { NextRequest, NextResponse } from "next/server";
import { queryAll } from "@/lib/salesforce";

interface AccountHit { Id: string; Name: string; Type: string | null; }

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim();
  if (!q || q.length < 2) return NextResponse.json({ results: [] });
  const safe = q.replace(/'/g, "\\'");
  try {
    const records = await queryAll<AccountHit>(`
      SELECT Id, Name, Type FROM Account
      WHERE Name LIKE '%${safe}%' ORDER BY Name LIMIT 20
    `);
    return NextResponse.json({
      results: records.map((r) => ({ id: r.Id, name: r.Name, type: r.Type })),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
