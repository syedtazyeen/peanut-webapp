import React from "react";
import Link from "next/link";
import RegisterForm from "../_components/register-form";

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
          Create a new account
        </p>
      </div>
      <RegisterForm />
      <div>
        <p className="text-muted-foreground text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="cursor-pointer text-foreground hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
