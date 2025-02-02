import React from "react";
import { cn } from "@/lib/utils";
import { emptyMenu, primaryMenu } from "../_lib/menu";
import SidebarGroup from "./sidebar-group";
import SvgLetter from "@/components/common/svg-letter";
import { ChevronDown, FileIcon, GripHorizontal } from "lucide-react";
import usePageStore from "@/store/page";
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import SidebarProfile from "./sidebar-profile";

export default function SidebarContent({ expanded }: { expanded: boolean }) {
  const { pages } = usePageStore();

  function getMapMenu(type: PageType): SidebarButton[] {
    return pages
      .filter((page) => page.type === type)
      .map((item) => {
        const menuItem: SidebarButton = {
          icon: FileIcon,
          label: item.name || "Untitled",
          pageId: item.id,
        };
        return menuItem;
      });
  }

  const spaceMenu = getMapMenu("TEAM");
  const privateMenu = getMapMenu("PRIVATE");

  return (
    <div className="flex">
      <div
        className={cn(
          "h-full bg-popover space-y-4 px-2",
          expanded ? "w-56 border" : "w-0 hidden",
          "transition-all duration-200 ease-in-out"
        )}
      >
        <SidebarProfile />
        <SidebarGroup expanded={expanded} menu={primaryMenu} />
        <SidebarGroup
          name="Workspace"
          expanded={expanded}
          groupType="TEAM"
          menu={spaceMenu.length === 0 ? emptyMenu : spaceMenu}
        />
        <SidebarGroup
          name="Private"
          expanded={expanded}
          menu={privateMenu.length === 0 ? emptyMenu : privateMenu}
          groupType="PRIVATE"
        />
      </div>
      <div
        className={cn(
          "h-full",
          expanded ? "w-0 hidden" : "w-4 cursor-ew-resize",
          "transition-all duration-200 ease-in-out"
        )}
      />
    </div>
  );
}
