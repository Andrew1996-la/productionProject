import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginModal } from 'features/loginByUsername';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

// описание компонента
export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

// шаблон (универсальный рендер)
const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

// Создание истории Primary
export const Primary = Template.bind({});
Primary.args = {
    isOpenModal: true,
};

Primary.decorators = [StoreDecorator({
    login: { username: '123', password: '234', isLoading: false },
})];
