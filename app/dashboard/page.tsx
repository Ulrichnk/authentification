import { auth } from "@/auth";
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
  return <div>dashboard</div>;
};

export default DashboardPages;
