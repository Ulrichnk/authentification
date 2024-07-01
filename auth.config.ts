import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { getUserByEmail } from "./data/user";
import { LoginSchema } from "./schema";
export default {
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
    // signOut: "/auth/signout",
    // newUser: "/auth/signup",
  },
  providers: [
    // CredentialsProvider({
    //   async authorize(credentials) {
    //     if (!credentials) {
    //       throw new Error("Invalid Credentials: No credentials provided");
    //       return { error: "Invalid Credentials: No credentials provided" };
    //     }
    //     try {
    //       const validatedFields = LoginSchema.safeParse(credentials);
    //       if (!validatedFields.success) {
    //         return { error: "Invalid Credentials: Validation failed" };
    //       }

    //       const { email, password } = validatedFields.data;
    //       const user = await getUserByEmail(email);
    //       if (!user) {
    //         return { error: "User not found" };
    //       }

    //       if (!user.password) {
    //         return {
    //           error:
    //             "Email already exists, please login with Google or Facebook",
    //         };
    //       }

    //       const passwordMatch = await bcrypt.compare(password, user.password);
    //       if (!passwordMatch) {
    //         return { error: "Incorrect password, please try again" };
    //       }

    //       return user;
    //     } catch (error: any) {
    //       // You can log the error here for debugging purposes
    //       console.error("Authorization error:", error.message);
    //       return { error: "Authorization failed" };
    //     }
    //   },
    // }),
    CredentialsProvider({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (!validatedFields.success) {
          return null;
        } else {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            return null;
          }
          return user;
        }
        return null;
      },
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
    // TikTok,
    // facebook,
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.AUTH_FACEBOOK_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // TikTokProvider({
    //   clientId: process.env.AUTH_TIKTOK_CLIENT_ID,
    //   clientSecret: process.env.AUTH_TIKTOK_CLIENT_SECRET,
    //   authorization: {
    //     params: {
    //       prompt: "consent",
    //       access_type: "offline",
    //       response_type: "code",
    //     },
    //   },
    // }),
  ], // Add providers with an empty array for now
} satisfies NextAuthConfig;
