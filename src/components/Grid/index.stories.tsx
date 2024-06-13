import { Meta, StoryFn } from "@storybook/react";
import Grid from ".";

export default {
  title: "Components/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    columns: {
      control: { type: "number", min: 1, max: 12 },
      description: "Number of columns in the grid",
    },
    gap: {
      control: { type: "text" },
      description: "Gap between grid items",
    },
  },
} as Meta<typeof Grid>;

const Template: StoryFn<typeof Grid> = (args) => (
  <Grid {...args}>
    <div className="bg-red-200 p-4">Item 1</div>
    <div className="bg-blue-200 p-4">Item 2</div>
    <div className="bg-green-200 p-4">Item 3</div>
    <div className="bg-yellow-200 p-4">Item 4</div>
    <div className="bg-purple-200 p-4">Item 5</div>
    <div className="bg-pink-200 p-4">Item 6</div>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  columns: 3,
  gap: "4",
};
