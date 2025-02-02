type PageType = "PRIVATE" | "TEAM";

type Page = {
  id: string;
  spaceId: string;
  name?: string;
  type: PageType;
};
