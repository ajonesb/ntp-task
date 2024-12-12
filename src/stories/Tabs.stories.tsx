import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Tabs from "@/components/Tabs";
import useLibraryStore from "@/store/librarystore";

// Mock Zustand Store for Storybook
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
  title: "Components/Tabs",
  component: Tabs,
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
} as Meta<typeof Tabs>;

// Template for the component's stories
const Template: StoryFn = () => <Tabs />;

// Default Story (Default Active Tab)
export const Default = Template.bind({});
Default.decorators = [
  mockZustandState({
    activeTab: "featured",
  }),
];

// With Active Tab as "KPIs"
export const ActiveTabKpis = Template.bind({});
ActiveTabKpis.decorators = [
  mockZustandState({
    activeTab: "kpis",
  }),
];

// With Active Tab as "Layouts"
export const ActiveTabLayouts = Template.bind({});
ActiveTabLayouts.decorators = [
  mockZustandState({
    activeTab: "layouts",
  }),
];

// With Active Tab as "Storyboards"
export const ActiveTabStoryboards = Template.bind({});
ActiveTabStoryboards.decorators = [
  mockZustandState({
    activeTab: "storyboards",
  }),
];

// With Active Tab as "Trending"
export const ActiveTabTrending = Template.bind({});
ActiveTabTrending.decorators = [
  mockZustandState({
    activeTab: "trending",
  }),
];
