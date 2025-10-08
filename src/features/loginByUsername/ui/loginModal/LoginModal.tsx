import { Modal } from 'shared/ui/Modal';
import { FC } from 'react';
import { LoginForm } from '../loginForm/LoginForm';

export interface ILoginModalProps {
    closeModal: () => void;
    isOpenModal: boolean;
}

export const LoginModal: FC<ILoginModalProps> = (props) => {
    const { closeModal, isOpenModal } = props;

    return (
        <Modal
            closeModal={closeModal}
            isOpenModal={isOpenModal}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
