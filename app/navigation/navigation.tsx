import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

const Navigation = () => {
  const user = undefined;
  const isAdmin = undefined;
  return (
    <nav
      className="sticky z-[100] h-14 inset-x-0 top-0 w-full 
    border-b border-gray-200 bg-white/75
     backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div
          className=" flex h-14 items-center
             justify-between border-b border-zinc-200">
          {/* <div className="flex items-center justify-between h-full">
                    <div className="flex items-center space-x-4">
                        <Link href="/" className="text-lg font-bold">Logo</Link>
                        <ul className="flex items-center space-x-4">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className=" px-1 flex items-center space-x-4">
                        <Link href="/login">Login</Link>
                        <Link href="/register">Register</Link>
                    </div>
                </div> */}
          <Link href="/" className="font-semibold z-40 text-pink-500">
            Echoppe <span className="text-pink-500"> Parfaite</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {/* <ul className="flex items-center space-x-4 h-full">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul> */}
            {user ? (
              <>
                <Link
                  href=""
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  Sign out
                </Link>
                {isAdmin ? (
                  <Link
                    href="/admin/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}>
                    Dashboard
                  </Link>
                ) : null}
                <Link
                  href="/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  Create case
                  <ArrowRight className=" ml-1.5 h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/auth/register"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  Sign up
                  <ArrowRight className=" ml-1.5 h-5 w-5" />
                </Link>
                <Link
                  href="/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}>
                  Login
                  <ArrowRight className=" ml-1.5 h-5 w-5" />
                </Link>
                <div className="h-8 w-px bg-zinc-200 hidden sm:block"></div>
                <Link
                  href="/auth/login"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}>
                  Create case
                  <ArrowRight className=" ml-1.5 h-5 w-5" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navigation;
