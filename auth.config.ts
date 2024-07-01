import bcrypt from "bcryptjs";
import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { getUserByEmail } from "./data/user";
import { LoginSchema } from "./type";
export default {
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
        if (credentials == null) {
          throw new Error("Invalid Credentials");
        }
        try {
          const validatedFields = LoginSchema.safeParse(credentials);
          if (!validatedFields.success) {
            throw new Error("Invalid credentials");
          } else {
            const { email, password } = validatedFields.data;
            const user = await getUserByEmail(email);
            if (!user) {
              throw new Error("User Don't found");
            }
            if (!user.password) {
              throw new Error(
                "Email already exists, please login with google or facebook"
              );
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
              throw new Error("Password don't match, please try again.");
            }
            return user;
          }
        } catch (e) {
          // console.log(e);
          throw new Error("Credentials null");
          return null;
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
