import { Meta, StoryObj } from "@storybook/react";
import Light from ".";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "Components/Light",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      options: ["green", "yellow", "red"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: "green",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
  },
};

export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};

export const Grouped: Story = {
  render: () => (
    <div className="flex flex-col gap-1 w-max">
      <Light variant="red" />
      <Light variant="yellow" />
      <Light variant="green" />
    </div>
  ),
};
