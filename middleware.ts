// export default NextAuth(authConfig).auth;
import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "./route";

const { auth } = NextAuth(authConfig);

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

export async function middleware(req: any) {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  // console.log("ROUTE", req.nextUrl.pathname);
  // // return NextResponse.redirect(new URL('/admin/dashboard', req.url))
  // console.log("isLoggedIn", isLoggedIn);

  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoutes) {
    return null;
  }
  if (isAuthRoutes) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }
  if (!isLoggedIn && !isPublicRoutes) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  return null;
}

// export { auth as middleware } from "@/auth";

// import { auth } from "@/auth";
// // export default NextAuth(authConfig).auth;

// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   // matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
//   // matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],

// };

// export default auth((req) => {
//   console.log("ROUTE", req.nextUrl.pathname);
// });

// export { auth as middleware } from "@/auth";
