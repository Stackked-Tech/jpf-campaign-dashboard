import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { role, password } = await request.json();

  if (role !== "admin" && role !== "dev") {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  const expectedPassword =
    role === "admin" ? process.env.AUTH_PASSWORD : process.env.DEV_PASSWORD;

  if (!expectedPassword) {
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    );
  }

  if (password !== expectedPassword) {
    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });

  response.cookies.set("auth_token", role, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set("auth_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/",
  });
  return response;
}
