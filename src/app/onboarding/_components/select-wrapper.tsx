import { cn } from "@/lib/utils";
import React, { HtmlHTMLAttributes } from "react";

interface SelectWrapperProps extends HtmlHTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  children: React.ReactNode;
}

export default function SelectWrapper({
  selected,
  children,
  className,
  ...props
}: SelectWrapperProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-xl border cursor-pointer hover:bg-border/50 transition-colors duration-200",
        selected
          ? "border-primary shadow-md shadow-primary/20"
          : "border-border",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
