import { StoryFn, Meta } from '@storybook/react';
import LanguageSwitcher, { LanguageSwitcherProps }  from '.';

export default {
  title: 'Components/LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
  argTypes: {
    initialLanguage: {
      control: { type: 'text' },
      description: 'Initial language to be selected',
    },
  },
} as Meta<typeof LanguageSwitcher>;

const Template: StoryFn<LanguageSwitcherProps> = (args) => <LanguageSwitcher {...args} />;

export const Default = Template.bind({});
Default.args = {
  initialLanguage: 'Português',
};

