import { Suspense } from "react";
import ResetPasswordForm from "../components/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Suspense>
        {" "}
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
