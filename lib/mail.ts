import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "2FA Code",
    html: `<h1>2FA Code</h1>
    <p>Your 2FA code : ${token}</p>`,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${process.env.SITE_URL}/auth/new-password?token=${token}`;
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `<h1>Reset your password</h1>
  <p>Click the link below to reset your password</p>
  <a href="${resetLink}">Reset password</a>`,
  });
};

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${process.env.SITE_URL}/auth/new-verification?token=${token}`;
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    html: `
      <h1>Confirm your email</h1>
      <p>Click the link below to confirm your email address</p>
      <a href="${confirmLink}">Confirm email</a>
    `,
  });
};
