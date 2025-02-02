import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg" | "icon";
  color?: "primary" | "secondary" | "danger" | "success";
  variant?: "solid" | "outline" | "ghost";
}

function Button({
  size = "md",
  color = "primary",
  variant = "solid",
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-lg font-medium transition-all focus:outline-none";

  const sizeStyles = {
    sm: "px-1 h-8 text-sm",
    md: "px-3 h-9 text-base",
    lg: "px-4 h-10 text-lg",
    icon: "p-1.5 size-8",
  };

  const colorStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-primary/70",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    success: "bg-green-500 text-white hover:bg-green-600",
  };

  const variantStyles = {
    solid: "",
    outline: "",
    ghost: "bg-transparent text-current hover:bg-foreground/5",
  };

  return (
    <button
      className={cn(
        baseStyles,
        sizeStyles[size],
        colorStyles[color],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };
