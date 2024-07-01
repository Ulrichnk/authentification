"use client";
import { CardWrapper } from "./card-wrapper";

import { z } from "zod";

import { forgot } from "@/actions/forgot";
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
import { ForgotPasswordSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import FormError from "./form-error";
import FormSuccess from "./form-success";

export const ForgotPasswordForm: React.FC = () => {
  const [isPending, setIsPending] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof ForgotPasswordSchema>) => {
    // console.log(data.email, data.password);
    // console.log(data);
    setError("");
    setSuccess("");
    startTransition(() => {
      forgot(data).then((response) => {
        setError(response.error);
        setSuccess(response.success);
      });
    });
    // return <Alert>Check the console for form data.</Alert>;
  };

  return (
    <CardWrapper
      backButtonLabel="Back to login"
      BackButtonRef="/auth/login"
      headerDescription="Welcome back! Please reset your password."
      headerLabel="Forgot your password?">
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    name="email"
                    placeholder=" Input your email"
                    type="email"></Input>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className=" w-full " disabled={isPending}>
            Sent reset Email
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default ForgotPasswordForm;
