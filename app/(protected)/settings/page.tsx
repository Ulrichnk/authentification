import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ProtectedLayout from "../layout";
import LogoutButton from "@/app/auth/components/logout-button";

export default async function SettingsPages() {
  // const [user, setUser] = useState<User | undefined | null>();
  // useCurrentUser().then((res) => setUser(res));
  const user = await auth();
  return (
    <ProtectedLayout>
      {JSON.stringify(user)}
      {/* <form action={logout}>
        <Button type="submit">Sign out</Button>
      </form> */}
     <LogoutButton/>
    </ProtectedLayout>
  );
}
