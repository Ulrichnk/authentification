"use client";
import { CardWrapper } from "./card-wrapper";

import { z } from "zod";

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

import { login } from "@/actions/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { startTransition, useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import FormError from "./form-error";
import FormSuccess from "./form-success";

const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "" },
  });

  function onSubmit(data: z.infer<typeof LoginSchema>) {
    // console.log(data.email, data.password);
    // console.log(data);
    setError("");
    setSuccess("");
    startTransition(() => {
      login(data).then((response) => {
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
  }, [success,setSuccess]);
  return (
    <CardWrapper
      backButtonLabel="Create an account"
      BackButtonRef="/auth/register"
      headerDescription="Welcome back! Please login to your account."
      showSocial
      headerLabel="Login">
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

                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button type="submit" className=" w-full " disabled={isPending}>
            Login
          </Button>
        </form>{" "}
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
