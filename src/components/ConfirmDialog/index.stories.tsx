import { StoryFn, Meta } from "@storybook/react";
import { useEffect, useState } from "react";
import ConfirmDialog from ".";

export default {
  title: "Components/ConfirmDialog",
  component: ConfirmDialog,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select", options: ["info", "warn", "error"] },
      description: "Variant of the confirm dialog",
    },
    title: { control: "text", description: "Title of the dialog" },
    message: { control: "text", description: "Message of the dialog" },
    isOpen: { control: "boolean", description: "Is the dialog open" },
    onConfirm: {
      action: "confirmed",
      description: "Callback for confirm action",
    },
    onCancel: { action: "canceled", description: "Callback for cancel action" },
  },
} as Meta<typeof ConfirmDialog>;

const Template: StoryFn<typeof ConfirmDialog> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  useEffect(() => {
    setIsOpen(args.isOpen);
  }, [args.isOpen]);

  const handleConfirm = () => {
    args.onConfirm();
    setIsOpen(false);
  };

  const handleCancel = () => {
    args.onCancel();
    setIsOpen(false);
  };

  return (
    <ConfirmDialog
      {...args}
      isOpen={isOpen}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

export const Info = Template.bind({});
Info.args = {
  variant: "info",
  title: "Information",
  message: "This is an informational message.",
  isOpen: true,
};

export const Warn = Template.bind({});
Warn.args = {
  variant: "warn",
  title: "Warning",
  message: "This is a warning message.",
  isOpen: true,
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  title: "Error",
  message: "This is an error message.",
  isOpen: true,
};
