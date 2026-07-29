import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decrypt } from "@/lib/auth";

const protectedPrefix = "/admin";
const publicPaths = ["/admin/login"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = pathname.startsWith(protectedPrefix);
  const isPublic = publicPaths.some((p) => pathname.startsWith(p));

  if (!isProtected) {
    return NextResponse.next();
  }

  if (isPublic) {
    return NextResponse.next();
  }

  const sessionCookie = request.cookies.get("admin_session")?.value;
  const session = await decrypt(sessionCookie);

  if (!session) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
