import useLibraryStore from "@/store/librarystore";
import React from "react";

const TabContent: React.FC = () => {
  const { filteredData, activeTab } = useLibraryStore();

  return (
    <div>
      {/* Title Section */}
      <div className="mt-10 mb-10">
        <h2 className="text-3xl font-bold mb-4 text-left">
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h2>
        <p className="text-gray-600">Curated top picks from this week</p>
      </div>

      {/* Content Grid */}
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
    </div>
  );
};

export default TabContent;
