import React from "react";
import SearchBar from "@/components/SearchBar";
import Tabs from "@/components/Tabs";
import TabContent from "@/components/TabContent";
import TrendingSection from "@/components/TrendingSection";
import { RequestAccess } from "@/components/RequestAccess/RequestAccess";

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-4 text-center">Library</h1>
      <p className="text-black text-center mb-8">
        Browse for assets needed to report and present analysis.
      </p>
      <SearchBar />
      <Tabs />
      <TabContent />
      <TrendingSection />
      <RequestAccess />
    </div>
  );
};

export default Home;
