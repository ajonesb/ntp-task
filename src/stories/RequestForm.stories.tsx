import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { RequestData } from "@/pages/api/requestService";
import { RequestForm } from "@/components/RequestForm/RequestForm";

// Define metadata for the component
export default {
  title: "Components/RequestForm",
  component: RequestForm,
  argTypes: {
    onSubmit: { action: "submitted" }, // Logs submission in Storybook's actions panel
    onCancel: { action: "cancelled" }, // Logs cancellation
  },
} as Meta<typeof RequestForm>;

// Template for the component's stories
const Template: StoryFn<typeof RequestForm> = (args) => (
  <RequestForm {...args} />
);

// Default Story
export const Default = Template.bind({});
Default.args = {
  onSubmit: (data: RequestData) => {
    console.log("Submitted data:", data);
  },
  onCancel: () => {
    console.log("Cancel button clicked");
  },
};
