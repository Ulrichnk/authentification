"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
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
   const res= await signIn("credentials", {
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
          return { error: "Invalid credentials." };
        default:
          return { error: "Something went wrong." };
      }
    }
    return { error: "Something went wrong with the type." };

  }
};
