import { AboutPage } from 'pages/AboutPage';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeType } from 'app/providers/themeProvider';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => (
    <AboutPage {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(ThemeType.Light)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeType.Dark)];
