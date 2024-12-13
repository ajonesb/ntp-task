import { create } from "zustand";
import { DATA } from "@/constants/data";
import { LibraryState, TabKey } from "@/types/library";
import { searchAllTabs } from "@/utils/search";

const initialTab: TabKey = "featured";

const useLibraryStore = create<LibraryState>((set) => ({
  activeTab: initialTab,
  searchQuery: "",
  filteredData: DATA[initialTab],

  setActiveTab: (tab) =>
    set((state) => ({
      activeTab: tab,
      filteredData: state.searchQuery
        ? searchAllTabs(state.searchQuery)
        : DATA[tab],
    })),

  setSearchQuery: (query) =>
    set((state) => {
      const trimmedQuery = query.trim();
      return {
        searchQuery: trimmedQuery,
        filteredData: trimmedQuery
          ? searchAllTabs(trimmedQuery)
          : DATA[state.activeTab],
      };
    }),
}));

export default useLibraryStore;
