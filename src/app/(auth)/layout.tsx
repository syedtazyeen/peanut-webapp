import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen">
      <div className="fixed top-0 left-0 z-10 p-4 flex items-center gap-2">
        <img className="size-6" src="/images/logo.png" />
        <p className="text-sm font-semibold">Peanut</p>
      </div>
      <div className="w-full max-w-96 m-auto">{children}</div>
    </div>
  );
}
