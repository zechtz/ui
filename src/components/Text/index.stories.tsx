import { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "span", "p"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is default text.",
    as: "span",
  },
};

export const Heading: Story = {
  args: {
    children: "This is a heading.",
    as: "h1",
  },
};

export const Paragraph: Story = {
  args: {
    children: "This is a paragraph.",
    as: "p",
  },
};
