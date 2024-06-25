import { dancing_script } from "@/app/ui/font";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="">
          {" "}
          <Link
            href="/"
            className={`${dancing_script.className} font-bold text-4xl text-pink-300 md:hover:text-pink-400`}>
            ECHOPPE PARFAITE
          </Link>
        </div>

        <div className="flex space-x-1">
          <div>
            {" "}
            <Link href="\"> Womans</Link>
          </div>
          <div>
            {" "}
            <Link href="\"> Men</Link>
          </div>
          <div>
            {" "}
            <Link href="\"> Child</Link>
          </div>
        </div>

        <div className="flex">
          {" "}
          <div className="">
            {" "}
            <Link href="/signin"> Se connecter</Link>
          </div>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>PP</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="">
          <MobileMenu />
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
