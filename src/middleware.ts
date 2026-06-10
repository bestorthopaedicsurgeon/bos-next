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
  "/blog/[slug]",
  "/how-to-leave-review",
  "/book-appointment",
  "/how-to-make-surgeons-profile",
  "/how-to-make-doctors-profile",
  "/faq",
  "/terms-of-use",
  "/privacy-policy",
  "/legal-disclaimer",
  "/review-policy",
  
  ...AUTH_PAGES,
];  

const isDoctorSlugRoute = (pathname: string) => {
  // Match /doctor/ followed by one or more characters that are not slashes
  // and ensure it's not /doctor/edit or /doctor/registration
  return /^\/doctor\/[^\/]+$/.test(pathname) &&
    !["/doctor/edit", "/doctor/registration"].some((blocked) => pathname.startsWith(blocked));
};

const isBlogSlugRoute = (pathname: string) => {
  return /^\/blog\/[^\/]+$/.test(pathname);
};

// Public SEO location landing pages: /best-orthopaedic-surgeons/<location>
const isLocationRoute = (pathname: string) => {
  return /^\/best-orthopaedic-surgeons\/[^\/]+$/.test(pathname);
};

// Public SEO subspecialty landing pages: /best-<subspecialty>-surgeons and
// the subspecialty x location matrix /best-<subspecialty>-surgeons/<location>
const isSubspecialtyRoute = (pathname: string) => {
  return /^\/best-[a-z-]+-surgeons(\/[a-z-]+)?$/.test(pathname);
};

// Metadata / image convention routes and crawler files that must always be
// reachable by tokenless crawlers (they would otherwise hit the default-deny
// redirect to /login below and never serve their content).
const isMetadataRoute = (pathname: string) =>
  /^\/(opengraph-image|twitter-image|icon|apple-icon|manifest|sitemap|robots)/.test(
    pathname
  );

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Let Open Graph / Twitter card images and metadata routes through untouched.
  if (isMetadataRoute(pathname)) {
    return NextResponse.next();
  }

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Authenticated users trying to visit /login or /register → redirect to home
  if (token && AUTH_PAGES.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Check if the current path matches any public route, a doctor/blog slug
  // route, or an SEO location landing page.
  const isPublicRoute =
    isLocationRoute(pathname) ||
    isSubspecialtyRoute(pathname) ||
    PUBLIC_ROUTES.some((route) => {
      if (route === "/doctor/[slug]") {
        return isDoctorSlugRoute(pathname);
      }
      if (route === "/blog/[slug]") {
        return isBlogSlugRoute(pathname);
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
  // Exclude API, Next internals, and metadata/image convention routes
  // (opengraph-image, twitter-image, sitemap, robots, icons) so tokenless
  // crawlers can reach them instead of being redirected to /login.
  matcher: [
    "/((?!api|_next/static|_next/image|opengraph-image|twitter-image|sitemap|robots|icon|apple-icon|manifest|bos_favicon.svg|.*\\..*).*)",
  ],
};
