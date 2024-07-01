import { Suspense } from "react";
import { NewVerificationForm } from "../components/new-verification-form";

export default function NewVerificationPage() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Suspense>
        <NewVerificationForm />
      </Suspense>
    </div>
  );
}
