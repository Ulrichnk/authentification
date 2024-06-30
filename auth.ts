import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { getUserById } from "./data/user";
import { db } from "./lib/db";

// declare module "@/auth/core"{
//    interface Session {
//     user:{
//       role: ADMIN|USER
//     }& DefaultSession["user"]
//    }
// }
// const prisma = new PrismaClient();
export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: { 
    signIn: "/auth/slogin",
    error:"/auth/error",
    signOut: "/auth/signout",
    newUser: "/auth/signup",
   },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: {
          emailVerified: new Date(),
        },
      });
    },
  },
  callbacks: {
    // async signIn({ user }) {
    //   if (user.id == undefined) {
    //     return false;
    //   }
    //   const existingUser = await getUserById(user.id);
    //   if (!existingUser || !existingUser.emailVerified) {
    //     return false;
    //   }
    //   return true;
    // },
    async session({ token, session }) {
      console.log({ sessionToken: token });
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) {
        return token;
      }
      const existingUser = await getUserById(token.sub);
      if (!existingUser) {
        return token;
      }
      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
