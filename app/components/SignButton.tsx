import { Button } from "@/components/ui/button";
import { doSocialLogin } from "../utils";
const SignButton = ({ ...props }) => {
  return (
    <form action={doSocialLogin} className="grid grid-cols-2 gap-3 items-center">
      <Button type="submit" name="action" value="google">
        Sign in with google
      </Button>
      <Button type="submit" name="action" value="facebook">
        Sign in with facebook
      </Button>
      <Button type="submit" name="action" value="tik_tok">
        Sign in with tik tok
      </Button>
    </form>
  );
};
export default SignButton;
