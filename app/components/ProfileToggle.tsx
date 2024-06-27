"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "next-auth";
import { useEffect, useState } from "react";
import { getUser } from "../utils";

export const ProfileToggle = () => {
  // const [user, setUser] = useState({});
  // const response = getUser();
  // response.then((data) => {
  //   user ? setUser(data) : console.log("no user");
  // });
  const [user, setUser] = useState<User | null>({
    name: "",
    email: "",
    image: "",
    id: "1",
  });

  useEffect(() => {
    const response = getUser();
    response.then((data) => {
      user == null || data == undefined
        ? console.log("no user")
        : setUser(data);
    });
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Avatar>
            <AvatarImage
              src={user?.image || "https://github.com/shadcn.png"}
              alt="Profile"
            />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {" "}
        <DropdownMenuItem>{user?.name || "not connected"}</DropdownMenuItem>
        <DropdownMenuItem> {user?.email || "not connected"}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
