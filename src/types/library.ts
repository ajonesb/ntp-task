export type TabKey =
  | "featured"
  | "kpis"
  | "layouts"
  | "storyboards"
  | "trending";

export interface LibraryItem {
  id: number;
  name: string;
  description: string;
}

export interface LibraryState {
  activeTab: TabKey;
  searchQuery: string;
  filteredData: LibraryItem[];
  setActiveTab: (tab: TabKey) => void;
  setSearchQuery: (query: string) => void;
}
