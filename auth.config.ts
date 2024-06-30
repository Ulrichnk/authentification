import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import TikTokProvider from "next-auth/providers/tiktok";
import { getUserByEmail } from "./data/user";
import { LoginSchema } from "./type";
export default {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials == null) {
          return null;
        }
        try {
          const validatedFields = LoginSchema.safeParse(credentials);
          if (!validatedFields.success) {
            throw new Error("Invalid credentials");
          } else {
            const { email, password } = validatedFields.data;
            const user = await getUserByEmail(email);
            if (!user || !user.password) {
              throw new Error("Invalid credentials");
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
              throw new Error("Invalid credentials");
            }
            return user;
          }
        } catch (e) {
          console.log(e);
          throw new Error("Credentials null");
        }
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
