import React from "react";
import LoginForm from "../_components/login-form";
import Link from "next/link";

export const metadata = {
  title: "Login",
  description: "",
};

export default function Login() {
  return (
    <div className="py-8">
      <div className="h-48 flex flex-col justify-center">
        <p className="text-2xl font-bold">Collaborate. Organize. Achieve.</p>
        <p className="text-2xl font-semibold text-muted-foreground">
          Log in to your account
        </p>
      </div>
      <LoginForm />
      <div>
        <p className="text-muted-foreground text-sm">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="cursor-pointer text-foreground hover:underline"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
