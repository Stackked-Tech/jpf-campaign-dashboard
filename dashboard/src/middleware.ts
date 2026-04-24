import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Root always shows the portal picker — even for already-authenticated
  // users. Lets staff switch between admin / grants / dev portals without
  // manually clearing cookies.
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

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
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const role = token.value; // "admin" | "dev" | "grants"

  // API routes are allowed past role-scoping — they're called from the
  // portal pages and have their own per-route auth inside the handlers.
  // Without this, e.g. a grants-role user POSTing /api/grants/[id]/tasks
  // would get redirected to /grants (HTML), breaking client fetches.
  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Dev cookie → locked to /dev
  if (role === "dev" && !pathname.startsWith("/dev")) {
    return NextResponse.redirect(new URL("/dev", request.url));
  }

  // Grants cookie → locked to the /grants portal (including /grants/settings).
  if (role === "grants" && !pathname.startsWith("/grants")) {
    return NextResponse.redirect(new URL("/grants", request.url));
  }

  // Admin: unrestricted
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
