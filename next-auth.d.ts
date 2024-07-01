import { DefaultSession } from "next-auth";
export type ExtendedUser = DefaultSession["user"] & {
  role: ADMIN | USER;
};
declare module "next-auth" {
  interface Session {
    user: {
      role: ADMIN | USER;
    } & DefaultSession["user"];
  }
}

import {JWT} from "@/auth/core/jwt";
declare module "@/auth/core/jwt"{
  interface JWT{
    role?: ADMIN|USER
  }
}
