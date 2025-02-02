import { create } from "zustand";

interface SpaceStore {
  spaceId?: string;
  setSpaceId: (id: string) => void;
}

const useSpaceStore = create<SpaceStore>((set) => ({
  setSpaceId: (spaceId) => set({ spaceId }),
}));

export default useSpaceStore;
