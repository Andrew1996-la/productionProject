import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeType } from 'app/providers/themeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import NotFound from './NotFound';

export default {
    title: 'pages/NotFound',
    component: NotFound,
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = () => <NotFound />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeType.Dark)];
