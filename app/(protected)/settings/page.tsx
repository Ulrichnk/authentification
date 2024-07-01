import { logout } from "@/actions/logout";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SettingsPages = async () => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={logout}>
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default SettingsPages;
