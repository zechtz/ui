import { StoryFn, Meta } from "@storybook/react";
import Flex from ".";

export default {
  title: "Components/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "object" },
      description: "Flex direction (row or column), supports breakpoints",
    },
    justify: {
      control: { type: "object" },
      description: "Justify content, supports breakpoints",
    },
    align: {
      control: { type: "object" },
      description: "Align items, supports breakpoints",
    },
    gap: {
      control: { type: "object" },
      description: "Gap between flex items, supports breakpoints",
    },
  },
} as Meta<typeof Flex>;

const Template: StoryFn<typeof Flex> = (args) => (
  <Flex {...args}>
    <div className="bg-red-200 p-4">Item 1</div>
    <div className="bg-blue-200 p-4">Item 2</div>
    <div className="bg-green-200 p-4">Item 3</div>
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  direction: { sm: "row", md: "col" },
  justify: { sm: "start", md: "center" },
  align: { sm: "start", md: "center" },
  gap: { sm: "4", md: "6" },
};
