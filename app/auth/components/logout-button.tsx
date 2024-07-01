import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  return (
    <>
      <Button variant="default" size='sm' type="submit" onClick={logout}>
        Sign out
      </Button>
    </>
  );
};

export default LogoutButton;
