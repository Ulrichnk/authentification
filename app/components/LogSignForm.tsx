import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";
import SigninForm from "./SigninForm";

export const LogSignForm = () => {
  return (
    <div className="flex justify-center items-center">
      {" "}
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signin">Signin</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="signin">
          <SigninForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LogSignForm;
