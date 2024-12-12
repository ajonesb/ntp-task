import useLibraryStore from "@/store/librarystore";
import React from "react";
import { DATA } from "@/constants/data";

const TabContent: React.FC = () => {
  const { filteredData, activeTab, searchQuery } = useLibraryStore();

  // Show matching sections based on search query
  const matchingSections = searchQuery
    ? Object.keys(DATA).filter((section) =>
        section.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [activeTab];

  return (
    <>
      {matchingSections.map((section) => (
        <div key={section}>
          <div className="mt-10 mb-10">
            <h2 className="text-3xl font-bold mb-4 text-left">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </h2>
            <p className="text-gray-600">Curated top picks from this week</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredData.map((item) => (
              <div key={item.id} className="p-4 border rounded shadow">
                <h3 className="font-bold">{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {filteredData.length === 0 && (
        <p className="text-gray-500">No items match your search query.</p>
      )}
    </>
  );
};

export default TabContent;
