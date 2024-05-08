import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = false;

  // If the user is not authenticated, redirect to the login page
  if (!isLoggedIn) {
    return redirect("/login");
  }
}
