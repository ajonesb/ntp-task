import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import TabContent from "@/components/TabContent";
import { DATA } from "@/constants/data";
import useLibraryStore from "@/store/librarystore";

// Custom decorator for Zustand mock
const mockZustandState = (
  stateOverrides: Partial<ReturnType<typeof useLibraryStore>>
) => {
  return (Story: any) => {
    const originalState = useLibraryStore.getState();
    useLibraryStore.setState({ ...originalState, ...stateOverrides });
    return <Story />;
  };
};

// Default export for Storybook
export default {
  title: "Components/TabContent",
  component: TabContent,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "20px", maxWidth: "800px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof TabContent>;

// Template for the component's stories
const Template: StoryFn = () => <TabContent />;

// Default Story
export const Default = Template.bind({});
Default.decorators = [
  mockZustandState({
    filteredData: DATA.featured,
    activeTab: "featured",
    searchQuery: "",
  }),
];

// With Search Query
export const WithSearchQuery = Template.bind({});
WithSearchQuery.decorators = [
  mockZustandState({
    filteredData: DATA.featured.filter((item) =>
      item.name.toLowerCase().includes("feature")
    ),
    activeTab: "featured",
    searchQuery: "feature",
  }),
];

// With No Matches
export const NoMatches = Template.bind({});
NoMatches.decorators = [
  mockZustandState({
    filteredData: [],
    activeTab: "kpis",
    searchQuery: "unknown",
  }),
];
