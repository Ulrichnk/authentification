import { auth } from "@/auth";
import { redirect } from "next/navigation";
const home = async () => {
  const session = await auth();

  if (!session?.user) redirect("/");
  return (
    <div>
      <p>{session?.user?.name}</p>
    </div>
  );
};

export default home;
