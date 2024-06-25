"use server";
import { dancing_script } from "@/app/ui/font";
import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export const Navbar = async () => {
  const session = await auth();

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
      <div className=" px-12 py-5 flex justify-between items-center max-md:hidden shadow-md ">
        <span className="">
          {" "}
          <Link
            href="/"
            className={`${dancing_script.className} font-bold text-2xl text-pink-300 md:hover:text-pink-400`}>
            ECHOPPE PARFAITE
          </Link>
        </span>

        <div className="flex space-x-20">
          <div>
            {" "}
            <Link
              href="\"
              className="hover:text-pink-300 ease-out duration-200">
              {" "}
              Womans
            </Link>
          </div>
          <div>
            {" "}
            <Link
              href="\"
              className="hover:text-pink-300 ease-out duration-200">
              {" "}
              Men
            </Link>
          </div>
          <div>
            {" "}
            <Link
              href="\"
              className="hover:text-pink-300 ease-out duration-200">
              {" "}
              Child
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <Input type="search" name="search" id="search" placeholder="Search" />
          <SearchIcon />
        </div>
        <div className="flex">
          {" "}
          <div className="">
            <Button>
              {" "}
              <Link href="/signin">Se connecter/ S&apos;inscrire </Link>
            </Button>
          </div>
          <div>
            <Avatar>
              <AvatarImage
                src={session?.user?.image || "https://github.com/shadcn.png"}
                alt="Profile"
              />
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
