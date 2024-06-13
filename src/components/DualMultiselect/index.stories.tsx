import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import DualMultiSelect from ".";

export default {
  title: "Components/DualMultiSelect",
  component: DualMultiSelect,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof DualMultiSelect>;

const Template: StoryFn<typeof DualMultiSelect> = (args) => (
  <DualMultiSelect {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { id: 1, name: "Super Admin" },
    { id: 2, name: "Auditor General" },
    { id: 3, name: "Janitor" },
  ],
  selectedItems: [
    { id: 4, name: "Investigator" },
    { id: 5, name: "Accountant" },
  ],
  label: "Available Items",
  rightLabel: "Selected Items",
  filterLabel: "Search Items...",
  onAddRemove: (items) => console.log("Items changed:", items),
};
