import { cn } from "@/lib/utils";
import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: "outline" | "default" | "primary" | "danger" | "success" | "warning";
  size?: "xs" | "sm" | "md" | "lg" | "icon";
}

const typeClasses = {
  default: "bg-foreground text-background",
  outline: "border bg-foreground/5 text-foreground",
  primary: "border border-primary bg-primary/10 text-primary",
  danger: "bg-red-600 text-white",
  success: "bg-green-600 text-white",
  warning: "bg-yellow-500 text-white",
};

const sizeClasses = {
  xs: "text-[0.55rem] px-1.5 h-4",
  sm: "text-xs px-2 py-0.5",
  md: "text-sm px-3 py-1.5",
  lg: "text-base px-4 py-2",
  icon: "w-8 h-8 flex items-center justify-center rounded-full",
};

const Badge: React.FC<BadgeProps> = ({
  children,
  type = "default",
  size = "xs",
  className,
  ...props
}) => {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        typeClasses[type],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export { Badge };
