import { Meta, StoryObj } from "@storybook/react";
import { Typography } from ".";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "span", "p"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "base", "lg", "xl", "2xl", "3xl"],
    },
    weight: {
      control: { type: "select" },
      options: ["thin", "normal", "medium", "semibold", "bold", "black"],
    },
    align: {
      control: { type: "select" },
      options: ["left", "center", "right", "justify"],
    },
    italic: {
      control: { type: "boolean" },
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
    size: "base",
    weight: "normal",
    align: "left",
    italic: false,
  },
};

export const Heading: Story = {
  args: {
    children: "This is a heading.",
    as: "h1",
    size: "3xl",
    weight: "bold",
    align: "center",
    italic: false,
  },
};

export const Paragraph: Story = {
  args: {
    children: "This is a paragraph.",
    as: "p",
    size: "base",
    weight: "normal",
    align: "left",
    italic: false,
  },
};
