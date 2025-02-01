import { cn } from "@/lib/utils";
import React from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

function Label({ children, className, required, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 group-focus-within:text-foreground transition-colors duration-100",
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-red-600">*</span>}
    </label>
  );
}

export { Label };
