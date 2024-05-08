import { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "be parts correct potatoes dides donkey extra climate happily freedom relationship type unit tall hung call cat window steady world front graph particular pick",
  },
};
