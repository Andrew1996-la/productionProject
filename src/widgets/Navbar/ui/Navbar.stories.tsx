import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeType } from 'app/providers/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        color: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const DarkLogin = Template.bind({});
DarkLogin.args = {};
DarkLogin.decorators = [
    ThemeDecorator(ThemeType.Dark),
    StoreDecorator({ login: { username: '123', password: '234', isLoading: false } }),
];

export const LightLogin = Template.bind({});
LightLogin.args = {};
LightLogin.decorators = [
    StoreDecorator({ login: { username: '123', password: '234', isLoading: false } }),
];

export const DarkLogout = Template.bind({});
DarkLogout.args = {};
DarkLogout.decorators = [
    ThemeDecorator(ThemeType.Dark),
    StoreDecorator({ userData: { authData: {} } }),
];

export const LightLogout = Template.bind({});
LightLogout.args = {};
LightLogout.decorators = [
    StoreDecorator({ userData: { authData: {} } }),
];
