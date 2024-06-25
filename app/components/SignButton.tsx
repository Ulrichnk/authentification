import { Button } from "@/components/ui/button";
import { doSocialLogin } from "../utils";
const SignButton = ({ ...props }) => {
  return (
    <form action={doSocialLogin}>
      <Button type="submit" name="action" value="google">
        Signin with google
      </Button>
      <Button type="submit" name="action" value="facebook">
        Signin with facebook
      </Button>
      <Button type="submit" name="action" value="tik_tok">
        Signin with tik tok
      </Button>
      s
    </form>
  );
};
export default SignButton;
