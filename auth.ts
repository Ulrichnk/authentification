import { authConfig } from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();
export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma),

  providers: [
    Credentials({
      credentials: {
        // username: { label: "Username",type: "text"},
        password: { label: "Password", type: "password" },
        email: { label: "Email", type: "email" },
      },
      // authorize: async (credentials) =>{
      //   const email = credentials.email as string | undefined;
      //   const password = credentials.password as string | undefined;
      //   if (!email || !password) {
      //     throw new CredentialsSignin("Please enter your email and password.");
      //   }
      //   const user = await getUserByEmail(email)
      //   if(!user){
      //     // throw new CredentialsSignin(cause"No user found")
      //     throw new Error("Invalid email or password")
      //   }  if(!password){
      //     // throw new CredentialsSignin(cause"No user found")
      //     throw new Error("Invalid email or password")
      //   }
      //   const isMatched=await compare(password,user.password)
      //   if(!isMatched){
      //     throw new Error("Password did not match")
      //   }

      // },
    }),

    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
