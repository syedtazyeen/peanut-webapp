import React from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const buttonBase =
  "relative flex items-center gap-2 px-2 h-8 text-sm font-medium w-full rounded-lg";

interface SidebarButtonProps
  extends SidebarButton,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export default function SidebarButton({
  isActive,
  expanded,
  badge,
  label,
  icon: Icon,
  className,
  ...props
}: SidebarButtonProps) {
  function renderBadge({ type, value }: BadgeLabel) {
    switch (type) {
      case "NEW":
        return <Badge type="primary">New</Badge>;

      case "CUSTOM":
        return <Badge type="default">{value}</Badge>;

      case "COUNTER":
        return <Badge type="primary">{value}</Badge>;

      default:
        break;
    }
  }

  return (
    <button
      className={cn(
        buttonBase,
        isActive
          ? "bg-border dark:bg-accent text-accent dark:text-foreground shadow-sm"
          : "hover:bg-foreground/5 text-muted-foreground",
        className
      )}
      {...props}
    >
      <div className="w-fit flex items-center gap-2">
        <Icon className="size-4 z-20" />
        <span className={expanded ? "flex-1" : "hidden"}>{label}</span>
        {badge && renderBadge({ ...badge })}
      </div>
    </button>
  );
}
