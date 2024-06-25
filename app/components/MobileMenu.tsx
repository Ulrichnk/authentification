"use client";
import Link from "next/link";
import { useState } from "react";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className=" bg-red-500 md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer "
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}>
        <div
          className={`"w-g h-1 bg-blue-500 rounded-sm' ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-100`}></div>
        <div
          className={`"w-g h-1 bg-blue-500 rounded-sm' ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-100`}></div>
        <div
          className={`"w-g h-1 bg-blue-500 rounded-sm' ${
            isOpen ? "rotate-45" : ""
          } origin-left ease-in-out duration-100`}></div>
      </div>
      {isOpen && (
        <div>
          <Link href="/">Home</Link>
          <Link href="/">Womans</Link>
          <Link href="/">Mens</Link>
          <Link href="/">Services</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
