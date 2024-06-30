"use server";

import { signIn } from "@/auth";
import { LoginSchema } from "@/type";
import { AuthError } from "next-auth";
import { z } from "zod";

export const login = async (data: z.infer<typeof LoginSchema>) => {
  console.log(data);

  const validateFields = LoginSchema.safeParse(data);
  if (!validateFields.success) {
    console.log(validateFields.error);
    return { error: "Invalid fields" };
  }

  const { email, password } = validateFields.data;
  try {
    await signIn("credentials", { email, password, redirect: false});

    return { success: true };
  } catch (error) {
    console.log("votre erreur",error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials." };
        default:
          return { error: "Something went wrong." };
      }
    }
  }
};
