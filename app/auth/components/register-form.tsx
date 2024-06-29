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

import { Register } from "@/actions/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import FormError from "./form-error";
import FormSuccess from "./form-success";

const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
  name: z
    .string()
    .min(2, { message: "name must be at least characters" })
    .max(20, { message: "name must be at most 20 characters" }),
});

export const RegisterForm: React.FC = () => {
  const [isPending, setIsPending] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  function onSubmit(data: z.infer<typeof RegisterSchema>) {
    // console.log(data.email, data.password);
    // console.log(data);
    setError("");
    setSuccess("");
    startTransition(() => {
      Register(data).then((response) => {
        setError(response.error);
        setSuccess(response.success);
      });
    });
    // return <Alert>Check the console for form data.</Alert>;
  }

  return (
    <CardWrapper
      backButtonLabel="Login an existing account"
      BackButtonRef="/auth/login"
      headerDescription="Welcome back! Please Register to your account."
      showSocial
      headerLabel="Register">
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    name="name"
                    placeholder=" Input your name"
                    type="name"></Input>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
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
            Register
          </Button>
        </form>{" "}
      </Form>
    </CardWrapper>
  );
};

export default RegisterForm;
