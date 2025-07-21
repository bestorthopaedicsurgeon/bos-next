import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_PAGES = ["/login", "/signup"];
const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/doctor-registration",
  "/surgeons",
  "/blog",
  "/contactUs",
  ...AUTH_PAGES,
];

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // console.log("Token from middleware:", token);

  const { pathname } = req.nextUrl;

  // 🔒 Authenticated users trying to visit /login or /register → redirect to home
  if (token && AUTH_PAGES.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Unauthenticated users trying to access protected routes
  const isProtected = !PUBLIC_ROUTES.includes(pathname);
  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
