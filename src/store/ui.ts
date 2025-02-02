import { create } from "zustand";

interface UiStore {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const useUiStore = create<UiStore>((set) => ({
  collapsed: false,
  setCollapsed: (collapsed) => set({ collapsed }),
}));

export default useUiStore;
