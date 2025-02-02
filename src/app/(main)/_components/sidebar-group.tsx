import React from "react";
import { cn } from "@/lib/utils";
import { PlusIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import SidebarButton from "./sidebar-button";
import usePageStore from "@/store/page";

interface SidebarGroupProps {
  menu: SidebarButton[];
  name?: string;
  expanded?: boolean;
  groupType?: PageType;
}

const buttonBase =
  "relative flex items-center gap-2 px-2 h-8 text-sm font-medium w-full rounded-lg";

export default function SidebarGroup({
  name,
  menu,
  expanded,
  groupType,
}: SidebarGroupProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { addPage } = usePageStore();

  function handleNavigation(pageId: string) {
    console.log(pageId);
    router.push(pageId);
  }

  function handleCreatePage() {
    const newPage: Page = {
      id: new Date().getTime().toString(),
      spaceId: new Date().getTime().toString(),
      type: groupType || "PRIVATE",
    };
    addPage(newPage);
    router.push(newPage.id);
  }

  return (
    <div>
      {name && (
        <button
          className={cn(
            buttonBase,
            "flex items-center justify-between text-xs font-semibold group",
            "hover:bg-foreground/5 text-muted-foreground"
          )}
        >
          {name}
          <div className="flex items-center gap-1">
            <span className="hidden group-hover:block rounded-md p-0.5 hover:bg-foreground/5">
              <PlusIcon className="size-4" />
            </span>
          </div>
        </button>
      )}
      <nav className="flex-1 w-full space-y-1">
        {menu.map(({ pageId, ...item }, index) => {
          if (!pageId)
            return (
              <SidebarButton
                key={index}
                icon={PlusIcon}
                label={"Add a page"}
                expanded={expanded}
                onClick={handleCreatePage}
              />
            );
          return (
            <SidebarButton
              key={index}
              isActive={pathname.startsWith(`/${pageId}`)}
              expanded={expanded}
              onClick={() => handleNavigation(pageId)}
              {...item}
            />
          );
        })}
      </nav>
    </div>
  );
}
