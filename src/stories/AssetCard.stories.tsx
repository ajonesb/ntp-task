import React from "react";

import { StoryFn } from "@storybook/react";
import AssetCard from "../components/AssetCard";
import type { AssetCardProps } from "../components/AssetCard";

export default {
  title: "Components/AssetCard",
  component: AssetCard,
};



const Template: StoryFn<AssetCardProps> = (args: AssetCardProps) => <AssetCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Sample Asset",
  description: "This is a sample description for an asset.",
};
