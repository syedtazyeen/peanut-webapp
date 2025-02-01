import React from "react";
import { cn } from "@/lib/utils";

type LoaderProps = {
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary";
  text?: string;
};

const sizeVariants = {
  sm: "w-1.5 h-1.5",
  md: "w-2 h-2",
  lg: "w-4 h-4",
};

const colorVariants = {
  default: "bg-foreground",
  primary: "bg-primary",
};

const Loader: React.FC<LoaderProps> = ({
  size = "md",
  color = "default",
  text,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex space-x-1">

      </div>
      {text && <span className="text-sm">{text}</span>}
    </div>
  );
};

export default Loader;
