import { auth } from "@/auth";
import { User } from "@prisma/client";

export const useCurrentUser = async () => {
  // const { data: session, status } =useSession();
  // return { session, status };
  const session = await auth();
  if (!session?.user) return null;

  const user = session.user as User;
  console.log({ user});

  return user;
};


export const requiredCurrentUser = async () => {
  const user = await useCurrentUser();
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}
