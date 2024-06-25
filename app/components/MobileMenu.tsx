"use client";
import Link from "next/link";
import { useState } from "react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" w-8 md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer "
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}>
        <div
          className={`"w-8 h-1 bg-pink-400 rounded-sm ' ${
            isOpen ? "rotate-45 w-6" : ""
          } origin-left ease-in-out duration-100`}></div>
        <div
          className={`"w-8 h-1 bg-pink-400 rounded-sm ' ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-100`}></div>
        <div
          className={`"w-8 h-1 bg-pink-400 rounded-sm ' ${
            isOpen ? "-rotate-45 w-6" : ""
          }  origin-left ease-in-out duration-100`}></div>
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