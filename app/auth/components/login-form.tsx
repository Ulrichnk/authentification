"use client";
import { CardWrapper } from "./card-wrapper";

import { z } from "zod";

import { login } from "@/actions/login";
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
import { LoginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { startTransition, useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import FormError from "./form-error";
import FormSuccess from "./form-success";

export const LoginForm: React.FC = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider "
      : "";
  const router = useRouter();

  const [showTwoFactor, setShowTwoFactor] = useState(false);
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
      login(data)
        .then((response) => {
          if (response?.error) {
            form.reset();
            setError(response.error);
          }
          if (response?.success) {
            form.reset();
            setSuccess(response.success);
          }
          if (response?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch((error) => {
          setError("Something went wrong !");
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
      backButtonLabel="Create an account"
      BackButtonRef="/auth/register"
      headerDescription="Welcome back! Please login to your account."
      showSocial
      headerLabel="Login">
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          {showTwoFactor && (
            <>
             <FormField
            name="code"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="code">code</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    name="code"
                    placeholder=" 12345"
                    ></Input>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          /></>
          )}
          { !showTwoFactor &&(<>
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
          /></>)}
          <FormError message={error || urlError} />
          <FormSuccess message={success} />
          <Button type="submit" className=" w-full " disabled={isPending}>
            {showTwoFactor ? "Confirm" : "Login"}
          </Button>
        </form>{" "}
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
