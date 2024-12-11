// store/libraryStore.ts
import { create } from "zustand";
import { DATA } from "@/constants/data";

type TabKey = "featured" | "kpis" | "layouts" | "storyboards" | "trending";

interface LibraryState {
  activeTab: TabKey;
  searchQuery: string;
  filteredData: { id: number; name: string; description: string }[];
  setActiveTab: (tab: TabKey) => void;
  setSearchQuery: (query: string) => void;
  fetchData: (tab: TabKey) => void;
}

// Function to search across all tabs
const searchAllTabs = (query: string) => {
  const trimmedQuery = query.toLowerCase();
  let results: any[] = [];

  // Search through all tabs
  Object.entries(DATA).forEach(([tab, items]) => {
    const matchingItems = items.filter(
      (item) =>
        item.name.toLowerCase().includes(trimmedQuery) ||
        item.description.toLowerCase().includes(trimmedQuery)
    );
    results = [...results, ...matchingItems];
  });

  return results;
};

const useLibraryStore = create<LibraryState>((set) => ({
  activeTab: "featured",
  searchQuery: "",
  filteredData: DATA.featured,

  setActiveTab: (tab) => {
    set((state) => {
      if (state.searchQuery) {
        // If there's a search query, keep showing search results
        return {
          activeTab: tab,
          filteredData: searchAllTabs(state.searchQuery),
        };
      }
      // If no search query, show all items in the selected tab
      return {
        activeTab: tab,
        filteredData: DATA[tab],
      };
    });
  },

  setSearchQuery: (query) => {
    set((state) => {
      const trimmedQuery = query.trim();

      if (!trimmedQuery) {
        // If search is empty, show current tab's content
        return {
          searchQuery: "",
          filteredData: DATA[state.activeTab],
        };
      }

      // Search across all tabs
      const results = searchAllTabs(trimmedQuery);

      return {
        searchQuery: trimmedQuery,
        filteredData: results,
      };
    });
  },

  fetchData: (tab) => {
    set({ filteredData: DATA[tab] });
  },
}));

export default useLibraryStore;
