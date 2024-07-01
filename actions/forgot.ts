"use server";

import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmail } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { ForgotPasswordSchema } from "@/schema";
import * as z from "zod";

export const forgot = async (values: z.infer<typeof ForgotPasswordSchema>) => {
  const validateFields = ForgotPasswordSchema.safeParse(values);
  if (!validateFields.success) {
    console.log(validateFields.error);
    return { error: "An error are throw" };
  }
  const { email } = validateFields.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return { error: "Email not found" };
  }

  const passwordResetToken=await generatePasswordResetToken(email); 
  await sendPasswordResetEmail(email, passwordResetToken.token);  
  return { success: "Resent email success " };
};
