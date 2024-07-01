"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerficationToken } from "@/lib/tokens";
import { LoginSchema } from "@/schema";
import { AuthError } from "next-auth";
import { send } from "process";
import { z } from "zod";

export const login = async (data: z.infer<typeof LoginSchema>) => {
  console.log(data);

  const validateFields = LoginSchema.safeParse(data);
  if (!validateFields.success) {
    console.log(validateFields.error);
    return { error: "Invalid fields ! " };
  }

  const { email, password } = validateFields.data;
  const existingUser = await getUserByEmail(email);
  if (!existingUser || !existingUser.email || existingUser.password) {
    if (!existingUser) {
      return { error: "User not found" };
    }
    if (existingUser && !existingUser.email) {
      return { error: "Email already in use, please log with another way" };
    }
  }
  if (!existingUser.emailVerified) {
    const verficationToken = await generateVerficationToken(existingUser.email);
    await sendVerificationEmail(verficationToken.email, verficationToken.token);
    return { success: "Confirmation email sent" };
  }

  try {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    // res.then((response:any) => {console.log(response)});

    return { success: "true" };
  } catch (error) {
    console.error(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials !" };
        default:
          return { error: "Something went wrong !" };
      }
    }
    return { error: "Something went wrong with the type !" };
  }
};
