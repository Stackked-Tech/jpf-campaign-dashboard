import { NextRequest, NextResponse } from "next/server";

type Role = "admin" | "dev" | "grants";

const PASSWORD_ENV: Record<Role, string | undefined> = {
  admin: process.env.AUTH_PASSWORD,
  dev: process.env.DEV_PASSWORD,
  grants: process.env.GRANTS_PASSWORD,
};

function isRole(value: unknown): value is Role {
  return value === "admin" || value === "dev" || value === "grants";
}

export async function POST(request: NextRequest) {
  const { role, password } = await request.json();

  if (!isRole(role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  const expectedPassword = PASSWORD_ENV[role];

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
