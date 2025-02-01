import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  size?: "sm" | "md" | "lg";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  clearable?: boolean;
  error?: string;
};

function Input(
  {
    className,
    type,
    size,
    startIcon,
    endIcon,
    clearable,
    value,
    onChange,
    error,
    ...props
  }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const sizes = {
    sm: "h-8 text-sm px-2",
    md: "h-10 text-base px-3",
    lg: "h-12 text-lg px-4",
  };

  return (
    <div className={cn("relative flex items-center w-full", className)}>
      {startIcon && <span className="absolute left-2">{startIcon}</span>}
      <input
        type={type}
        className={cn(
          "flex w-full rounded-xl outline-none border transition-colors duration-100",
          sizes[size || "md"],
          startIcon ? "pl-8" : "",
          endIcon || clearable ? "pr-8" : "",
          error
            ? "border-red-600 focus-within:border-red-600"
            : "focus-within:border-foreground"
        )}
        ref={ref}
        value={value}
        onChange={onChange}
        {...props}
      />
      {clearable && value && (
        <button
          type="button"
          className="absolute right-2 text-gray-500 hover:text-gray-700"
          onClick={() =>
            onChange?.({
              target: { value: "" },
            } as React.ChangeEvent<HTMLInputElement>)
          }
        >
          <X size={16} />
        </button>
      )}
      {endIcon && !clearable && (
        <span className="absolute right-2">{endIcon}</span>
      )}
    </div>
  );
}

const ForwardedInput = React.forwardRef(Input);
ForwardedInput.displayName = "Input";

export { ForwardedInput as Input };
