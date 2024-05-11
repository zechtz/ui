import { Meta, StoryObj } from "@storybook/react";
import StarRating from ".";

const meta: Meta<typeof StarRating> = {
  component: StarRating,
  title: "Components/StarRating",
  tags: ["autodocs"],
  args: {
    maxStars: 5,
  },
  argTypes: {
    onSetRating: { action: "onSetRating" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    onSetRating: (rating: number) => console.log(rating),
  },
};
