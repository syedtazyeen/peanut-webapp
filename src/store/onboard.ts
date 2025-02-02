import { create } from "zustand";

interface OnboardStore {
  stage: number;
  setStage: (stage: number) => void;
  dataPurpose?: OnboardDataPurpose;
  setDataPurpose: (value: OnboardDataPurpose) => void;
  dataName?: string;
  setDataName: (value: string) => void;
  dataDescription?: string;
  setDataDescription: (value: string) => void;
}

const useOnboardStore = create<OnboardStore>((set) => ({
  stage: 0,
  setStage: (stage) => set({ stage }),
  setDataPurpose: (dataPurpose) => set({ dataPurpose }),
  setDataName: (dataName) => set({ dataName }),
  setDataDescription: (dataDescription) => set({ dataDescription }),
}));

export default useOnboardStore;
