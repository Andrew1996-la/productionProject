import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLinkTheme } from 'shared/ui/AppLink/types';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeType } from 'app/providers/themeProvider';
import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        colors: { control: 'color' },
        theme: {
            control: 'select',
            options: Object.values(AppLinkTheme),
        },
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY,
    to: '/',
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Link',
    theme: AppLinkTheme.SECONDARY,
    to: '/',
};
Dark.decorators = [ThemeDecorator(ThemeType.Dark)];
