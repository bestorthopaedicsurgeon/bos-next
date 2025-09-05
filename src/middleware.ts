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
  "/doctor/[slug]",  
  ...AUTH_PAGES,
];

const isDoctorSlugRoute = (pathname: string) => {
  // Match /doctor/ followed by one or more characters that are not slashes
  // and ensure it's not /doctor/edit or /doctor/registration
  return /^\/doctor\/[^\/]+$/.test(pathname) && 
         !['/doctor/edit', '/doctor/registration'].some(blocked => pathname.startsWith(blocked));
};

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // console.log("Token from middleware:", token);

  const { pathname } = req.nextUrl;

  // Authenticated users trying to visit /login or /register → redirect to home
  if (token && AUTH_PAGES.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Check if the current path matches any public route or is a doctor slug route
  const isPublicRoute = PUBLIC_ROUTES.some(route => {
    if (route === '/doctor/[slug]') {
      return isDoctorSlugRoute(pathname);
    }
    return pathname === route;
  });

  // Unauthenticated users trying to access protected routes
  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
