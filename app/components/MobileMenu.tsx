"use client";
import Link from "next/link";
import { useState } from "react";
import { ProfileToggle } from "./ProfileToggle";
import { ThemeButton } from "./ThemeButton";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" md:hidden">
      <div className="md:hidden flex justify-between ">
        <div
          className=" grid gap-2 cursor-pointer w-8"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}>
          <div
            className={`"w-8 h-1 bg-pink-400 rounded-sm ' ${
              isOpen ? "rotate-45 w-11" : ""
            } origin-left ease-in-out duration-100`}></div>
          <div
            className={`"w-8 h-1 bg-pink-400 rounded-sm ' ${
              isOpen ? "opacity-0" : ""
            } ease-in-out duration-100`}></div>
          <div
            className={`"w-8 h-1 bg-pink-400 rounded-sm ' ${
              isOpen ? "-rotate-45 w-11" : ""
            }  origin-left ease-in-out duration-100`}></div>
        </div>

        <span className=" px-5 md:hidden ">
          {" "}
          <Link
            href="/"
            className={`font-bold text-2xl text-pink-300 md:hover:text-pink-400`}>
            LOGO
          </Link>
        </span>
        <div className="flex ">
          <ProfileToggle />
          <ThemeButton />
        </div>
      </div>

      {isOpen && (
        <div className="absolute w-full h-screen bg-white justify-center flex flex-col items-center ">
          <Link href="/" className=" hover:text-pink-300 ease-out duration-200">
            Home
          </Link>
          <Link href="/" className=" hover:text-pink-300 ease-out duration-200">
            Womans
          </Link>
          <Link href="/" className=" hover:text-pink-300 ease-out duration-200">
            Mens
          </Link>
          <Link href="/" className=" hover:text-pink-300 ease-out duration-200">
            Services
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
