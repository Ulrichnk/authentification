"use server";

import { getUserByEmail } from "@/data/user";
import { ResetPasswordSchema } from "@/schema";
import * as z from "zod";

export const reset = async (values: z.infer<typeof ResetPasswordSchema>) => {
  const validateFields = ResetPasswordSchema.safeParse(values);
  if (!validateFields.success) {
    console.log(validateFields.error);
    return { error: "An error are throw" };
  }
  const { password } = validateFields.data;
  const existingUser = await getUserByEmail(password);
  if (!existingUser) {
    return { error: "Email not found" };
  }
  return { success: "Resent password success " };
};
