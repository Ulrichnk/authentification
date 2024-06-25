"use server";

import { signIn } from "@/auth";

export async function doSocialSignin(provider: string) {
  const response = await fetch(`/api/auth/signin/${provider}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
  } else {
    const error = await response.json();
    console.error(error);
  }
}

export async function doSocialLogin(formData: any) {
  const action = formData.get("action");
  console.log(action);
  if (action) {
    await signIn(action, { redirectTo: "/home" });
  }
}
