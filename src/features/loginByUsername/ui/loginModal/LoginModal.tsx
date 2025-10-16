import { Modal } from 'shared/ui/Modal';
import { FC, Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { LoginFormAsync } from '../loginForm/LoginForm.async';

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
            <Suspense fallback={<Loader />}>
                <LoginFormAsync />
            </Suspense>
        </Modal>
    );
};
