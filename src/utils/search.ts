import { DATA } from "@/constants/data";
import { LibraryItem } from "@/types/library";

export const searchAllTabs = (query: string): LibraryItem[] => {
  const trimmedQuery = query.toLowerCase();

  let results: LibraryItem[] = [];

  Object.entries(DATA).forEach(([section, items]) => {
    // Check if section name matches
    if (section.toLowerCase().includes(trimmedQuery)) {
      results = [...results, ...items];
    } else {
      // Check if any items match
      const matchingItems = items.filter(
        (item) =>
          item.name.toLowerCase().includes(trimmedQuery) ||
          item.description.toLowerCase().includes(trimmedQuery)
      );
      results = [...results, ...matchingItems];
    }
  });

  return results;
};
