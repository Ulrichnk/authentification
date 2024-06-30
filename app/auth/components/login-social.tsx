import { doSocialLogin } from "@/app/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const LogSocial = ({ ...props }) => {
  return (
    <form
      action={doSocialLogin}
      className="flex h-full w-full items-center justify-center">
      <Button variant="outline" type="submit" name="action" value="google">
        <FcGoogle
          className={buttonVariants({ size: "icon", variant: "ghost1" })}
        />
      </Button>
      <Button variant="outline" type="submit" name="action" value="facebook">
        <FaFacebook
          className={buttonVariants({ size: "icon", variant: "ghost1" })}
        />
      </Button>
      <Button variant="outline" type="submit" name="action" value="TiTok">
        <FaTiktok
          className={buttonVariants({ size: "icon", variant: "ghost1" })}
        />
      </Button>
    </form>
  );
};
export default LogSocial;
