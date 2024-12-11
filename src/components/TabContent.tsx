import useLibraryStore from "@/store/librarystore";
import React from "react";


const TabContent: React.FC = () => {
  const { filteredData } = useLibraryStore();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {filteredData.map((item) => (
        <div key={item.id} className="p-4 border rounded shadow">
          <h3 className="font-bold">{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
      {filteredData.length === 0 && (
        <p className="text-gray-500">No items match your search query.</p>
      )}
    </div>
  );
};

export default TabContent;
