import React from "react";
import { cn } from "@/lib/utils";
import { emptyMenu, primaryMenu } from "../_lib/menu";
import SidebarGroup from "./sidebar-group";
import SvgLetter from "@/components/common/svg-letter";
import { ChevronDown, FileIcon } from "lucide-react";
import usePageStore from "@/store/page";

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
        <div className="my-2 py-2 px-1 flex items-center gap-2 rounded-lg hover:bg-foreground/5 cursor-pointer">
          <div className="size-6 rounded-full overflow-hidden">
            <SvgLetter letter="A" />
          </div>
          <p className="font-medium text-sm">workspace</p>
          <span className="rounded-md">
            <ChevronDown className="size-4" />
          </span>
        </div>
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
