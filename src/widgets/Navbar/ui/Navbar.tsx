import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import cls from './navbar.module.scss';

interface NavbarProps {
    classes?: string
}

export const Navbar:FC<NavbarProps> = (props) => {
    const { classes } = props;
    const [isAuthModal, setIsAuthModal] = useState(false);

    const toggleAuthModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <nav className={classNames(cls.navbar, {}, [classes])}>
            <Button onClick={toggleAuthModal} theme={ButtonTheme.CLEAR_INVERTED}>Войти</Button>

            <Modal
                closeModal={() => toggleAuthModal()}
                isOpenModal={isAuthModal}
            >
                test modal
            </Modal>
        </nav>
    );
};
