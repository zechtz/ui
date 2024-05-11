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
    onRatingSet: { action: "onRatingSet" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    onRatingSet: (rating: number) => console.log(rating),
  },
};
