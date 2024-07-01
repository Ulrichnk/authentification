"use client";

import { newVerfication } from "@/actions/new-verification";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { CardWrapper } from "./card-wrapper";
import FormError from "./form-error";
import FormSuccess from "./form-success";

export const NewVerificationForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const onSubmit = useCallback(async () => {
    if (success) {
      router.push("/auth/settings");
    }
    if (!token) {
      setError("Missing token!");
      return;
    }
    newVerfication(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong !");
      });
  }, [token, success]);

  useEffect(() => {
    if (success) {
      router.push("/settings");
    }
    onSubmit();
  }, [onSubmit]);

  return (
    <>
      <CardWrapper
        headerLabel="Auth"
        headerDescription="Confirming your verfication."
        backButtonLabel="Back to login"
        BackButtonRef="/auth/login">
        <div className="flex flex-col justify-center items-center h-[150px] w-[350px]">
          {!success && !error && <BeatLoader color="#2563EB" />}
          <FormSuccess message={success} />
          {!success && <FormError message={error} />}
        </div>
      </CardWrapper>
    </>
  );
};

export default NewVerificationForm;
