import { Suspense } from "react";
import LoginForm from "../components/login-form";

export default function LoginPage () {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

