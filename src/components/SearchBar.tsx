import React from "react";
import useLibraryStore from "@/store/librarystore";

const SearchBar: React.FC = () => {
  const { setSearchQuery } = useLibraryStore();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Type to search..."
        onChange={handleSearch}
        className="p-2 border rounded w-full"
      />
    </div>
  );
};

export default SearchBar;
