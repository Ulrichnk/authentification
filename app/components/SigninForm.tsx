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

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least characters" })
    .max(20, { message: "Username must be at most 20 characters" }),
  email: z.string().email(),
  password: z.string().min(6),
});

export const SigninForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", email: "", password: "" },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data.username, data.email, data.password);
    return <Alert>Check the console for form data.</Alert>;
  }
  return (
    <div className="w-full h-screen flex justify-center  items-center">
      <Card className=" w-[350px]  shadow-lg">
        <CardHeader className="flex items-center ">
          <CardTitle>Sign In</CardTitle>

          <CardDescription className="justify-center items-center">
            Sign in/log in
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            {" "}
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="username"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <FormControl>
                      <Input
                        //   className=" ring-2 ring-opacity-40 ring-pink-300
                        //  rounded-md mx-1  focus:outline-none focus:ring-2
                        //   focus:ring-pink-300 focus:ring-opacity-50"
                        //   {...field}
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
              {/* <label htmlFor="username">Username</label>
              <Input name="username" placeholder=" Input your username"></Input>
              <label htmlFor="email">Email</label>
              <Input name="email" placeholder=" Input your email"></Input>
              <label htmlFor="password">Password</label>
              <Input
                name=" password"
                placeholder=" Input your password"></Input> */}

              <div className="flex justify-around m-5">
                <Button type="submit" size="lg" className=" mr-5">
                  Signin
                </Button>
                <Button size="lg" className="mr-5">
                  Login
                </Button>
              </div>
            </form>{" "}
          </Form>
          <p className="flex item-center"> ou </p>
        </CardContent>

        <CardFooter className="flex flex-wrap ">
          <Button>Signin with google</Button>
          <Button>Signin with facebook</Button>
          <Button>Signin with tik tok</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SigninForm;
