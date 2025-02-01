import * as React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  size?: "sm" | "md" | "lg";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  clearable?: boolean;
};

function Textarea(
  {
    className,
    size,
    startIcon,
    endIcon,
    clearable,
    value,
    onChange,
    ...props
  }: TextareaProps,
  ref: React.Ref<HTMLTextAreaElement>
) {
  const sizes = {
    sm: "h-14 text-sm px-2 py-1.5",
    md: "h-16 text-base px-3 py-1.5",
    lg: "h-24 text-lg px-4 py-1.5",
  };

  return (
    <div className={cn("relative flex items-center w-full", className)}>
      {startIcon && <span className="absolute left-2">{startIcon}</span>}
      <textarea
        className={cn(
          "flex w-full rounded-xl outline-none border resize-none focus-within:border-foreground transition-colors duration-100",
          sizes[size || "md"],
          startIcon ? "pl-8" : "",
          endIcon || clearable ? "pr-8" : ""
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
            } as React.ChangeEvent<HTMLTextAreaElement>)
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

const ForwardedTextarea = React.forwardRef(Textarea);
ForwardedTextarea.displayName = "Textarea";

export { ForwardedTextarea as Textarea };
