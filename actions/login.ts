"use server";

import { signIn } from "@/auth";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { sendTwoFactorTokenEmail, sendVerificationEmail } from "@/lib/mail";
import { generateTwoFactorToken, generateVerficationToken } from "@/lib/tokens";
import { LoginSchema } from "@/schema";
import { AuthError } from "next-auth";
import { z } from "zod";

export const login = async (data: z.infer<typeof LoginSchema>) => {
  console.log(data);

  const validateFields = LoginSchema.safeParse(data);
  if (!validateFields.success) {
    console.log(validateFields.error);
    return { error: "Invalid fields ! " };
  }

  const { email, password, code } = validateFields.data;
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
  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code && existingUser.email) {
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);
      if (!twoFactorToken) {
        return { error: "Invalid code  !" };
      }
      if (twoFactorToken.token !== code) {
        return { error: "Invalid code !" };
      }
      const hasExpired = new Date(twoFactorToken.expires) < new Date();
      if (hasExpired) {
        return { error: "Code has expired !" };
      }
      await db.twoFactorToken.delete({
        where: { id: twoFactorToken.id },
      });

      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser.id
      );

      if (existingConfirmation) {
        await db.twoFactorConfirmation.delete({
          where: { id: existingConfirmation.id },
        });
      }
      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id,
        },
      });
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email);
      await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);
      return { twoFactor: true };
    }
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
