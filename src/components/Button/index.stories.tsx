import { StoryFn, Meta } from '@storybook/react';
import { HiOutlineMail, HiOutlineArrowRight } from 'react-icons/hi';
import Button, { ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text', description: 'Button label' },
    startIcon: { control: false, description: 'Icon to display at the start' },
    endIcon: { control: false, description: 'Icon to display at the end' },
    onClick: { action: 'clicked', description: 'Click handler' },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'warn', 'error'],
      },
      description: 'Button color',
    },
    variant: {
      control: {
        type: 'select',
        options: ['solid', 'outline', 'ghost'],
      },
      description: 'Button variant',
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  color: 'primary',
  variant: 'solid',
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  children: 'Button',
  startIcon: <HiOutlineMail className="h-5 w-5" />,
  color: 'primary',
  variant: 'solid',
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  children: 'Button',
  endIcon: <HiOutlineArrowRight className="h-5 w-5" />,
  color: 'primary',
  variant: 'solid',
};

export const WithBothIcons = Template.bind({});
WithBothIcons.args = {
  children: 'Button',
  startIcon: <HiOutlineMail className="h-5 w-5" />,
  endIcon: <HiOutlineArrowRight className="h-5 w-5" />,
  color: 'primary',
  variant: 'solid',
};

export const PrimarySolid = Template.bind({});
PrimarySolid.args = {
  children: 'Primary Solid Button',
  color: 'primary',
  variant: 'solid',
};

export const SecondaryOutline = Template.bind({});
SecondaryOutline.args = {
  children: 'Secondary Outline Button',
  color: 'secondary',
  variant: 'outline',
};

export const WarnGhost = Template.bind({});
WarnGhost.args = {
  children: 'Warn Ghost Button',
  color: 'warn',
  variant: 'ghost',
};

export const ErrorSolid = Template.bind({});
ErrorSolid.args = {
  children: 'Error Solid Button',
  color: 'error',
  variant: 'solid',
};

