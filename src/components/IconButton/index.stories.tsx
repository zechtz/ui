import { StoryFn, Meta } from '@storybook/react';
import { HiOutlineMail, HiOutlineArrowRight } from 'react-icons/hi';
import IconButton, { IconButtonProps } from '.';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Button label' },
    startIcon: { control: false, description: 'Icon to display at the start' },
    endIcon: { control: false, description: 'Icon to display at the end' },
    onClick: { action: 'clicked', description: 'Click handler' },
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'warn', 'error'],
      },
      description: 'Button variant',
    },
  },
} as Meta<typeof IconButton>;

const Template: StoryFn<IconButtonProps> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  variant: 'primary',
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  children: 'Button',
  startIcon: <HiOutlineMail className="h-5 w-5" />,
  variant: 'primary',
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  children: 'Button',
  endIcon: <HiOutlineArrowRight className="h-5 w-5" />,
  variant: 'primary',
};

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  children: 'Button',
  startIcon: <HiOutlineMail className="h-5 w-5" />,
  endIcon: <HiOutlineArrowRight className="h-5 w-5" />,
  variant: 'primary',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary Button',
  variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
};

export const Warn = Template.bind({});
Warn.args = {
  children: 'Warn Button',
  variant: 'warn',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error Button',
  variant: 'error',
};

