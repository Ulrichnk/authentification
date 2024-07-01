"use server"

import { signOut } from "@/auth";

export const logout = async () => {
    //some serve stuff
    await signOut();
    return { success: "Logged out" };
}