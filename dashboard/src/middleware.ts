import { NextRequest, NextResponse } from "next/server";

const ADMIN_ONLY_GRANTS_PATHS = ["/grants/settings"];

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

  // Dev cookie → locked to /dev
  if (role === "dev" && !pathname.startsWith("/dev")) {
    return NextResponse.redirect(new URL("/dev", request.url));
  }

  // Grants cookie → locked to /grants, and cannot reach admin-only grants paths
  if (role === "grants") {
    if (!pathname.startsWith("/grants")) {
      return NextResponse.redirect(new URL("/grants", request.url));
    }
    if (ADMIN_ONLY_GRANTS_PATHS.some((p) => pathname.startsWith(p))) {
      return NextResponse.redirect(new URL("/grants", request.url));
    }
  }

  // Admin: unrestricted
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
