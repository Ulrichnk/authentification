"use server";

import { LoginSchema } from "@/type";
import { z } from "zod";

export const login = async (data: z.infer<typeof LoginSchema>) => {
  console.log(data);

  const validateFields = LoginSchema.safeParse(data);
  if (!validateFields.success) {
    console.log(validateFields.error);
    return { error: "Invalid fields" };
  }

  return { success: "Email sent" };
};
