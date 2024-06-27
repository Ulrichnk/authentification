import { Button } from "@/components/ui/button";
import { doSignOut } from "../utils";

export const SignOutButton = ({ ...props }) => {
  return (
    <form action={doSignOut}>
      <Button type="submit">Sign out</Button>
    </form>
  );
};
export default SignOutButton;
