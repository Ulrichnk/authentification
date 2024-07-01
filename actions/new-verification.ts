"use server";

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { db } from "@/lib/db";

export const newVerfication = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);
  if (!existingToken) {
    // throw new Error("Invalid token")
    return { error: "Token doesn't exists  !" };
  }
  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    // throw new Error("User not found")
    return { error: "Email does not exist !" };
  }
  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });
  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });
  return { success: "Email verified !" };
};
