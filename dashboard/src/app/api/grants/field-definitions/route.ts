import { NextRequest, NextResponse } from "next/server";
import { getFieldDefinitions } from "@/lib/grants/queries";

export async function GET(request: NextRequest) {
  try {
    const templateId = request.nextUrl.searchParams.get("template_id");
    const defs = await getFieldDefinitions(templateId);
    return NextResponse.json({ definitions: defs });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
