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
    { id: 1, name: "Elixir" },
    { id: 2, name: "Golang" },
    { id: 3, name: "Ruby on Rails" },
    { id: 4, name: "React" },
    { id: 5, name: "Vuejs" },
    { id: 6, name: "Angular" },
    { id: 7, name: "Bash" },
    { id: 8, name: "C#" },
    { id: 9, name: "Java" },
    { id: 12, name: "Python" },
  ],
  selectedItems: [
    { id: 10, name: "Rust" },
    { id: 11, name: "Haskell" },
  ],
  label: "Available Languages",
  rightLabel: "Selected Languages",
  filterLabel: "filter languages...",
  onAddRemove: (items) => console.log("Items changed:", items),
};
