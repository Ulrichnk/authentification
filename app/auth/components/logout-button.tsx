import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  return (
    <form action={logout}>
      <Button variant="default" size="sm" type="submit">
        Sign out
      </Button>
    </form>
  );
};

export default LogoutButton;
