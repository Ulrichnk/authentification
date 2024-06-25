import { dancing_script } from "@/app/ui/font";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export const Navbar = () => {
  return (
    <>
      {/* <div className=" absolute bottom-4 left-4 ">
        <span className="text-2xl text-pink-300">Echoppe Parfaite</span>
        <span className="sm:hidden ">XS</span>
        <span className="hidden sm:block md:hidden ">SM</span>
        <span className="hidden md:block lg:hidden ">MD</span>
        <span className="hidden lg:block sm:hidden xl:hidden">LG</span>
        <span className="hidden xl:block lg:hidden ">XL</span>
      </div> */}
      <div className=" px-12 py-5 flex items-center justify-between max-md:hidden shadow-md ">
        <span className="bg-red-200">
          {" "}
          <Link
            href="/"
            className={`${dancing_script.className} font-bold text-2xl text-pink-300 md:hover:text-pink-400`}>
            ECHOPPE PARFAITE
          </Link>
        </span>

        <div className="flex space-x-2">
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
          <div className=" m-2">
            <Link href="/signin"> Se connecter</Link>
          </div>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
              <AvatarFallback>PP</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div className=" ">
        <MobileMenu />
      </div>
    </>
  );
};

export default Navbar;
