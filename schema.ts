import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  code:z.optional(z.string().min(6, { message: "Code is required" })),
});
export const NewPasswordSchema = z.object({
  password: z.string() ,
});
export const ForgotPasswordSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
  name: z
    .string()
    .min(2, { message: "Username must be at least characters" })
    .max(20, { message: "Username must be at most 20 characters" }),
});
