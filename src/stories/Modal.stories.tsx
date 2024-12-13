import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Modal } from "@/components/Modal/Modal";

// Default export for Storybook
export default {
  title: "Components/Modal", // The component group in Storybook
  component: Modal, // The component itself
  argTypes: {
    onClose: { action: "onClose" }, // Adds an action to log when onClose is called
  },
} as Meta<typeof Modal>;

// Template for creating stories
const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

// Default Modal Story
export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  title: "Example Modal",
  children: <p>This is a modal example.</p>,
};
