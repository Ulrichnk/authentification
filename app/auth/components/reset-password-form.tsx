"use client";
import { CardWrapper } from "./card-wrapper";

import { z } from "zod";

import { reset } from "@/actions/reset";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ResetPasswordSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import FormError from "./form-error";
import FormSuccess from "./form-success";

export const ResetPasswordForm: React.FC = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: { password: "" },
  });

  function onSubmit(data: z.infer<typeof ResetPasswordSchema>) {
    // console.log(data.email, data.password);
    // console.log(data);
    setError("");
    setSuccess("");
    startTransition(() => {
      reset(data).then((response) => {
        setError(response.error);
        setSuccess(response.success);
      });
    });
    // return <Alert>Check the console for form data.</Alert>;
  }
  useEffect(() => {
    if (success == "true") {
      router.push("/settings");
    }
  }, [success, setSuccess]);
  return (
    <CardWrapper
      backButtonLabel="Reset you password"
      BackButtonRef="/auth/login"
      headerDescription="Welcome back! Please reset your password."
      headerLabel="Forgot your password?">
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password">Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    name="password"
                    placeholder="********"
                    type="password"></Input>
                </FormControl>
                <Button
                  variant="link"
                  size="sm"
                  asChild
                  className=" px-0 font-normal text-sm">
                  <Link href="/auth/forgot-password">Forgot Password?</Link>
                </Button>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className=" w-full " disabled={isPending}>
          Reset password
          </Button>
        </form>{" "}
      </Form>
    </CardWrapper>
  );
};

export default ResetPasswordForm;
