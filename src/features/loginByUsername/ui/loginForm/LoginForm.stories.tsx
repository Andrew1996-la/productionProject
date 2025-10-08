import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginForm } from 'features/loginByUsername/ui/loginForm/LoginForm';

// описание компонента
export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

// шаблон (универсальный рендер)
const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

// Создание истории Primary
export const Primary = Template.bind({});
Primary.args = {

};
