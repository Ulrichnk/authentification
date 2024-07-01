"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { getPasswordResetTokenByToken } from "@/lib/password-reset-token";
import { NewPasswordSchema } from "@/schema";
import bcrypt from "bcryptjs";
import * as z from "zod";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  if (!token) {
    return { error: "Token not found" };
  }
  const validateFields = NewPasswordSchema.safeParse(values);
  if (!validateFields.success) {
    console.log(validateFields.error);
    return { error: "Invalid Fields" };
  }
  const { password } = validateFields.data;
  const existingToken = await getPasswordResetTokenByToken(token);
  if (!existingToken) {
    return { error: "Invalid token" };
  }
  const hasExpired = new Date(existingToken.expires) < new Date();
  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) {
    return { error: "Email does not exist !" };
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });
  await db.passwordRestToken.delete({ where: { id: existingToken.id } });

  return { success: "Password updated with success ! " };
};
