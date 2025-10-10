import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ETextTheme, Text } from 'shared/ui/Text';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeType } from 'app/providers/themeProvider';

// описание компонента
export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

// шаблон (универсальный рендер)
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const PrimaryText = Template.bind({});
PrimaryText.args = {
    title: 'testing title',
    text: 'testing text',
};

export const ErrorText = Template.bind({});
ErrorText.args = {
    title: 'testing title',
    text: 'testing text',
    textTheme: ETextTheme.ERROR,
};

export const PrimaryTextDark = Template.bind({});
PrimaryTextDark.args = {
    title: 'testing title',
    text: 'testing text',
};

export const ErrorTextDark = Template.bind({});
ErrorTextDark.args = {
    title: 'testing title',
    text: 'testing text',
    textTheme: ETextTheme.ERROR,
};

PrimaryTextDark.decorators = [ThemeDecorator(ThemeType.Dark)];
ErrorTextDark.decorators = [ThemeDecorator(ThemeType.Dark)];
