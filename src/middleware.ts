import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "./supabase/middleware";

const publicRoutes = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const supabase = createClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (publicRoutes.includes(pathname)) {
    if (user) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (!publicRoutes.some((route) => pathname.startsWith(route))) {
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico|ist|images/).*)"], // Adjust matcher as needed
};
