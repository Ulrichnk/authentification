import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  //   return await db.user.findUnique({ where: { email } });
  try {
    const user = await db.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
    //   return await db.user.findUnique({ where: { id } });
    try {
        const user = await db.user.findUnique({ where: { id } });
        return user;
    } catch {
        return null;
    }
}