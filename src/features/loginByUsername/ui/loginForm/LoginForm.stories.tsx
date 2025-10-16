import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import LoginForm from './LoginForm';

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

Primary.decorators = [StoreDecorator({
    login: { username: '123', password: '234', isLoading: false },
})];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.decorators = [StoreDecorator({
    login: {
        username: '123', password: '234', isLoading: false, error: 'error',
    },
})];

export const PrimaryWithLoading = Template.bind({});
PrimaryWithLoading.decorators = [StoreDecorator({
    login: {
        username: '123', password: '234', isLoading: true,
    },
})];
