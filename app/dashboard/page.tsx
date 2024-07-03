import { auth } from "@/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormError from "../auth/components/form-error";

const DashboardPages = async () => {
  const session = await auth();
  if (!session || !session.user) {
    return (
      <div className="w-full h-full justify-center items-center">
        <FormError message="You are not authorized to view this page" />
      </div>
    );
  }
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardPages;
