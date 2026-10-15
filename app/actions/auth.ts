"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { deleteSession, setSession } from "../_lib/session";

const API_URL = "http://127.0.0.1:3001/users";

export const loginAction = async (prevState: any, formData: FormData) => {
  let isSuccess = false;

  try {
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();

    // Fetch users list from json-server
    const response = await axios.get(API_URL);
    const users = response.data;

    // Find matching user manually
    const user = users.find(
      (u: any) => u.email === email && u.password === password
    );

    if (!user) {
      return { error: "Invalid Credentials" };
    }

    await setSession({
      name: user.name,
      email: user.email,
      id: user.id,
    });

    isSuccess = true;
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Failed to Login. Please check server or credentials." };
  }

  if (isSuccess) {
    redirect("/contact");
  }
};

export const logoutAction = async () => {
  await deleteSession();
  redirect("/login");
};