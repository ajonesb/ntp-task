import React from "react";
import { DATA } from "@/constants/data";

const TrendingSection: React.FC = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold mb-4 text-left">Trending</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {DATA.trending.map((item) => (
          <div key={item.id} className="p-4 border rounded-md shadow">
            <h3 className="font-bold">{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
