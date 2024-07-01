import { db } from "./db";

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await db.passwordRestToken.findUnique({
      where: { token },
    });
    return passwordResetToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.passwordRestToken.findFirst({
      where: { email },
    });
    return passwordResetToken;
  } catch {
    return null;
  }
};
