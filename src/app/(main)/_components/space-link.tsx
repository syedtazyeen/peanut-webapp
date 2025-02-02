import React from "react";
import SvgLetter from "@/components/common/svg-letter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GripHorizontal } from "lucide-react";

export default function SpaceLink() {
  return (
    <Button
      size="sm"
      variant="ghost"
      className={cn("w-full text-start px-2 h-10 rounded-none", "flex items-center gap-2 group")}
    >
      <span className="size-6 rounded-lg overflow-hidden group-hover:hidden">
        <SvgLetter letter="W" size={24} />
      </span>
      <span className="hidden group-hover:block">
        <GripHorizontal className="text-muted-foreground size-6 p-1" />
      </span>
      workspace 1
    </Button>
  );
}
