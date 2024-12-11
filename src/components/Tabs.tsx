import React from "react";
import useLibraryStore from "@/store/librarystore";

type TabKey = "featured" | "kpis" | "layouts" | "storyboards" | "trending";

const Tabs: React.FC = () => {
  const { activeTab, setActiveTab } = useLibraryStore();

  const tabs: TabKey[] = [
    "featured",
    "kpis",
    "layouts",
    "storyboards",
    "trending",
  ];

  return (
    <div className="flex space-x-4 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`p-2 ${activeTab === tab ? "font-bold border-b-2" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
