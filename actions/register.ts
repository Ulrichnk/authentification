"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/type";
import bcrypt from "bcryptjs";
import { z } from "zod";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  console.log(values);

  const validateFields = RegisterSchema.safeParse(values);
  if (!validateFields.success) {
    console.log(validateFields.error);
    return { error: "An error are throw" };
  }
  const { name, email, password } = validateFields.data;
  const hash = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already in use" };
  }
  await db.user.create({ data: { name, email, password: hash } });

  // TODO:verification token email

  return { success: "User Created" };
};
