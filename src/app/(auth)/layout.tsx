import Loader from "@/components/ui/loader";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen">
      <div className="w-full max-w-96 m-auto">
        <div>Login</div>
        <div>{children}</div>
      </div>
    </div>
  );
}
