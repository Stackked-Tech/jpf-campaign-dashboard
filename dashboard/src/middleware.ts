import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow login page, auth API, and static assets through
  if (
    pathname === "/login" ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.endsWith(".svg") ||
    pathname.endsWith(".png") ||
    pathname.endsWith(".ico")
  ) {
    return NextResponse.next();
  }

  const token = request.cookies.get("auth_token");

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  const role = token.value; // "admin" or "dev"

  // Dev cookie trying to access dashboard routes → redirect to /dev
  if (role === "dev" && !pathname.startsWith("/dev")) {
    return NextResponse.redirect(new URL("/dev", request.url));
  }

  // Admin cookie trying to access dev routes → redirect to /campaigns
  if (role === "admin" && pathname.startsWith("/dev")) {
    return NextResponse.redirect(new URL("/campaigns", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
