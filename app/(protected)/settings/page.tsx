"use client";
import LogoutButton from "@/app/auth/components/logout-button";
import { useCurrentUser } from "@/hooks/use-current-user";
import ProtectedLayout from "../layout";

const SettingsPages = async () => {
  // const [user, setUser] = useState<User | undefined | null>();
  // useCurrentUser().then((res) => setUser(res));
  const user = await useCurrentUser();
  return (
    <ProtectedLayout>
      {JSON.stringify(user)}
      {/* <form action={logout}>
        <Button type="submit">Sign out</Button>
      </form> */}
      <LogoutButton />
    </ProtectedLayout>
  );
};

export default SettingsPages;
