import { HomeIcon, MessageCircle, PlusIcon, Settings } from "lucide-react";

export const primaryMenu: SidebarButton[] = [
  {
    label: "Home",
    icon: HomeIcon,
    pageId: "home",
  },
  {
    label: "Ask AI",
    icon: MessageCircle,
    pageId: "chat",
    badge: { type: "NEW" },
  },
  {
    label: "Settings",
    icon: Settings,
    pageId: "settings",
  },
];

export const emptyMenu: SidebarButton[] = [
  {
    label: "Add a page",
    icon: PlusIcon
  },
];
