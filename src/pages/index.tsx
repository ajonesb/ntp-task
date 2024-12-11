import React from "react";
import SearchBar from "@/components/SearchBar";
import Tabs from "@/components/Tabs";
import TabContent from "@/components/TabContent";
import TrendingSection from "@/components/TrendingSection";

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Library</h1>
      <SearchBar />
      <Tabs />
      <TabContent />
      <TrendingSection />
    </div>
  );
};

export default Home;
