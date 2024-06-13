import { Meta, StoryObj } from "@storybook/react";
import { Code } from ".";

const meta: Meta<typeof Code> = {
  title: "Components/Code",
  component: Code,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["code", "pre"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "base", "lg", "xl"],
    },
    color: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
    language: {
      control: { type: "text" },
    },
    showLineNumbers: {
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "const example = 'Hello, World!';",
    as: "code",
    size: "base",
    color: "dark",
    language: "javascript",
    showLineNumbers: true,
  },
};

export const LargeCode: Story = {
  args: {
    children: "function greet() {\n  console.log('Hello, World!');\n}",
    as: "pre",
    size: "lg",
    color: "dark",
    language: "javascript",
    showLineNumbers: true,
  },
};

export const LightCode: Story = {
  args: {
    children: "<h1>Hello, World!</h1>",
    as: "code",
    size: "base",
    color: "light",
    language: "html",
    showLineNumbers: true,
  },
};
