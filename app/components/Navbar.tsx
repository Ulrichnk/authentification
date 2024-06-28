"use server";
import { dancing_script } from "@/app/ui/font";
import { auth } from "@/auth";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { LogSignForm } from "./LogSignForm";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileMenu from "./MobileMenu";
import { ProfileToggle } from "./ProfileToggle";
import { ThemeButton } from "./ThemeButton";
import { Categories } from "./categories";
import SignOutButton from "./signOutButton";

export const Navbar = async () => {
  const session = await auth();
  // className=" sticky z-[100] inset-x-0 top-0 w-auto border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all"
  return (
    <>
      <nav className=" sticky z-[100] inset-x-0 top-0 w-auto border-b border-gray-200 bg-white/75 transition-all">
        <MaxWidthWrapper >
          <div className="flex flex-col justify-center  px-12  max-md:hidden       
           
          ">
            {/* <div className=" absolute bottom-4 left-4 ">
        <span className="text-2xl text-pink-300">Echoppe Parfaite</span>
        <span className="sm:hidden ">XS</span>
        <span className="hidden sm:block md:hidden ">SM</span>
        <span className="hidden md:block lg:hidden ">MD</span>
        <span className="hidden lg:block sm:hidden xl:hidden">LG</span>
        <span className="hidden xl:block lg:hidden ">XL</span>
      </div> */}
            <div className="flex justify-between items-center max-md:hidden ">
              {" "}
              <div className="">
                {" "}
                <Link
                  href="/"
                  className={`${dancing_script.className} font-bold text-2xl text-pink-300 md:hover:text-pink-400`}>
                  LOGO
                </Link>
              </div>
              {/* search button et login avatar */}
              <div className="flex justify-end space-x-2">
                <div id="search" className="flex items-center ">
                  <Input
                    className=" h-7"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Search"
                  />
                  <SearchIcon />
                </div>
                <>
                  {!session ? (
                    <Dialog>
                      <DialogTrigger className=" bg-pink-300 rounded-lg p-1 text-xs ">
                        Se connecter/ S&apos;inscrire
                      </DialogTrigger>
                      <DialogContent>
                        <LogSignForm />
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <SignOutButton />
                  )}
                </>

                <ProfileToggle />
                <ThemeButton />
              </div>
            </div>{" "}
            <div className="flex justify-center items-center">
              {" "}
              <Categories />
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
      <MobileMenu />
    </>
  );
};

export default Navbar;
