import NextAuth from "next-auth";
import { NextRequest } from "next/server";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  // matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

// export default async function middleware(req: NextRequest) {
//   console.log("ROUTE", req.nextUrl.pathname);
//   // return NextResponse.redirect(new URL('/admin/dashboard', req.url))
// }

export { auth as middleware } from "@/auth";

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
