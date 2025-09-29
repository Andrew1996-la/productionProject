import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { ThemeType } from 'app/providers/themeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalPrimary = Template.bind({});
ModalPrimary.args = {
    children: 'text modal test',
    isOpenModal: true,
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'text modal test',
    isOpenModal: true,
};

Dark.decorators = [ThemeDecorator(ThemeType.Dark)];
