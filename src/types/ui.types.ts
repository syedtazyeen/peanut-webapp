type SidebarButton = {
  icon: React.ComponentType<any>;
  label: string;
  pageId?: string;
  badge?: BadgeLabel;
  expanded?: boolean;
};

type BadgeType = "NEW" | "CUSTOM" | "COUNTER";

type BadgeLabel = {
  value?: string;
  type: BadgeType;
};
