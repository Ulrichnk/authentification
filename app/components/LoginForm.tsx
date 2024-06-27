"use client";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Alert } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SignButton from "./SignButton";

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least characters" })
    .max(20, { message: "Username must be at most 20 characters" }),
  email: z.string().email(),
  password: z.string().min(6),
});

export const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", email: "", password: "" },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data.username, data.email, data.password);
    return <Alert>Check the console for form data.</Alert>;
  }
  return (
    <>
      <Card className=" w-[400px]  shadow-lg">
        <CardHeader className="flex items-center ">
          <CardTitle>Log In</CardTitle>

          <CardDescription className="justify-center items-center">
            login with your username
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="username"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <FormControl>
                      <Input
                        name="username"
                        placeholder=" Input your username"></Input>
                    </FormControl>
                    <FormDescription>
                      {form.formState.errors.username?.message}
                    </FormDescription>
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
                        name="email"
                        placeholder=" Input your email"></Input>
                    </FormControl>
                    <FormDescription>
                      {form.formState.errors.email?.message}
                    </FormDescription>
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
                        name="password"
                        placeholder=" Input your password"></Input>
                    </FormControl>
                    <FormDescription>
                      {form.formState.errors.password?.message}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-around m-5">
                <Button size="lg" className="mr-5">
                  Login
                </Button>
              </div>
            </form>{" "}
          </Form>
          <p className="flex item-center"> ou </p>
        </CardContent>

        <CardFooter className="">
          <SignButton />
        </CardFooter>
      </Card>
    </>
  );
};

export default LoginForm;
