import { Suspense } from "react";
import NewPasswordForm from "../components/new-password-form";

export default function newPasswordPage() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Suspense>
        {" "}
        <NewPasswordForm />
      </Suspense>
    </div>
  );
}
