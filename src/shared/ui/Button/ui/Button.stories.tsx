import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeType } from 'app/providers/themeProvider';
import { Button, ButtonTheme } from './Button';

// описание компонента
export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

// шаблон (универсальный рендер)
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Создание истории Primary
export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const DarkOutline = Template.bind({});
DarkOutline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
DarkOutline.decorators = [ThemeDecorator(ThemeType.Dark)];
