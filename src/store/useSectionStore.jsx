import { create } from "zustand";

export const useSectionStore = create((set) => ({
  selectedSection: "",
  updateSelectedSection: (sectionName) =>
    set(() => ({ selectedSection: sectionName })),
}));
