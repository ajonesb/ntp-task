import React from "react";
import useLibraryStore from "@/store/librarystore";
import { Button } from "./Button/Button";
import { TabKey } from "@/types/library";

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
    <div className="max-w-[700px] flex space-x-4 mb-4 mx-auto">
      {tabs.map((tab) => (
        <Button
          key={tab}
          label={tab.charAt(0).toUpperCase() + tab.slice(1)}
          className={`p-5 ${activeTab === tab ? "font-bold border-b-2" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </Button>
      ))}
    </div>
  );
};

export default Tabs;
