import { StoryFn, Meta } from "@storybook/react";
import { useEffect, useState } from "react";
import Preloader from ".";

export default {
  title: "Components/Preloader",
  component: Preloader,
  tags: ["autodocs"],
  argTypes: {
    loaderColor: {
      control: { type: "text" },
      description: "Color of the loader spinner (e.g., 'blue-500', 'gray-900')",
    },
    textColor: {
      control: { type: "text" },
      description: "Color of the loading text (e.g., 'blue-500', 'gray-900')",
    },
    isLoading: {
      control: { type: "boolean" },
      description: "Toggle the preloader on/off",
    },
    size: {
      control: {
        type: "select",
        options: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "8",
          "10",
          "12",
          "16",
          "20",
          "24",
          "32",
          "40",
          "48",
          "56",
          "64",
        ],
      },
      description: "Size of the loader (e.g., '20', '40')",
    },
  },
} as Meta<typeof Preloader>;

const Template: StoryFn<typeof Preloader> = (args) => {
  const [isLoading, setIsLoading] = useState(args.isLoading);

  useEffect(() => {
    setIsLoading(args.isLoading);
  }, [args.isLoading]);

  return <Preloader {...args} isLoading={isLoading} />;
};

export const Default = Template.bind({});
Default.args = {
  loaderColor: "gray-500",
  textColor: "gray-500",
  isLoading: true,
  size: "12",
};
