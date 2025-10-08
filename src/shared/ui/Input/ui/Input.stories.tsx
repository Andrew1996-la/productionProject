import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from 'shared/ui/Input/ui/Input';

// описание компонента
export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

// шаблон (универсальный рендер)
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// Создание истории Primary
export const Primary = Template.bind({});
Primary.args = {
    value: 'this is input',
    autoFocus: true,
};
