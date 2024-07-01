import { Suspense } from "react";
import LoginForm from "../components/login-form";

const LoginPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
};

export default LoginPage;
