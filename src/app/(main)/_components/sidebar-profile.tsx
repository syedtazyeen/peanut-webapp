import React from "react";
import SvgLetter from "@/components/common/svg-letter";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import {
  Dropdown,
  DropdownContent,
  DropdownTrigger,
} from "@/components/ui/dropdown";
import SpaceLink from "./space-link";
import useUserStore from "@/store/user";
import { createClient } from "@/supabase/client";
import { useRouter } from "next/navigation";

export default function SidebarProfile() {
  const router = useRouter();
  const { user } = useUserStore();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="my-2 py-2 px-1 flex items-center gap-2 rounded-lg hover:bg-foreground/5 cursor-pointer">
          <div className="size-6 rounded-full overflow-hidden">
            <SvgLetter letter="A" />
          </div>
          <p className="font-medium text-sm">workspace</p>
          <span className="rounded-md">
            <ChevronDown className="size-4" />
          </span>
        </div>
      </DropdownTrigger>
      <DropdownContent>
        <div className="divide-y divide-foreground/5 w-72">
          <div className="p-2 space-y-2">
            <div className="flex items-center gap-2">
              <span className="size-9 rounded-lg overflow-hidden group-hover:hidden">
                <SvgLetter letter="W" size={36} />
              </span>
              <div>
                <p className="text-sm font-medium line-clamp-1">Workspace</p>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>
          <div className="py-2 space-y-1">
            <Label className="text-xs px-2">Your workspaces</Label>
            <div className="py-1">
              <SpaceLink />
            </div>
          </div>
          <div className="p-2">
            <button
              onClick={handleLogout}
              className={cn(
                "w-full text-start px-4 h-8 rounded-lg text-sm font-medium",
                "text-red-500 hover:bg-red-500/10"
              )}
            >
              Logout
            </button>
          </div>
        </div>
      </DropdownContent>
    </Dropdown>
  );
}
