import React from "react";

import { StoryFn } from "@storybook/react";
import SearchBar from "../components/SearchBar";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
};

const Template: StoryFn = () => <SearchBar />;

export const Default = Template.bind({});
