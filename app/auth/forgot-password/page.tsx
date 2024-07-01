import { Suspense } from "react";
import ForgotPasswordForm from "../components/forgot-password-form";

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen ">
      <Suspense>
        {" "}
        <ForgotPasswordForm />
      </Suspense>
    </div>
  );
};

export default ForgotPassword;
