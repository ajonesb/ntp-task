import React from "react";

const TrendingSection: React.FC = () => {
  const trendingItems = [
    { name: "Trending 1", description: "Description for Trending 1" },
    { name: "Trending 2", description: "Description for Trending 2" },
    { name: "Trending 3", description: "Description for Trending 3" },
    { name: "Trending 4", description: "Description for Trending 4" },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Trending</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {trendingItems.map((item, index) => (
          <div key={index} className="p-4 border rounded-md shadow">
            <h3 className="font-bold">{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
