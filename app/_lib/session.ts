import { cookies } from "next/headers";
import type { UserType } from "@/types/user";

// Set session cookie
export const setSession = async (user: UserType) => {
  const cookieStore = await cookies();

  cookieStore.set("session", JSON.stringify(user), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
};

// Get session cookie   
export const getSession =
  async (): Promise<UserType | null> => {
    const cookieStore = await cookies();
    const session = cookieStore.get("session")?.value;

    if (!session) return null;

    try {
      return JSON.parse(session) as UserType;
    } catch {
      return null;
    }
  };

// Delete session cookie
export const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("session");
};
