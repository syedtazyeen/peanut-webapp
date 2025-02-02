import { create } from "zustand";

interface PageStore {
  pages: Page[];
  addPage: (page: Page) => void;
  removePage: (pageId: string) => void;
  clearPages: () => void;
}

const usePageStore = create<PageStore>((set) => ({
  pages: [],
  addPage: (page) => set((state) => ({ pages: [...state.pages, page] })),
  removePage: (pageId) =>
    set((state) => ({ pages: state.pages.filter((p) => p.id !== pageId) })),
  clearPages: () => set({ pages: [] }),
}));

export default usePageStore;
