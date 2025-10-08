import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/loginByUsername';
import cls from './navbar.module.scss';

interface NavbarProps {
    classes?: string
}

export const Navbar:FC<NavbarProps> = (props) => {
    const { classes } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const toggleAuthModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <nav className={classNames(cls.navbar, {}, [classes])}>
            <div className={cls.links}>
                <Button
                    onClick={toggleAuthModal}
                    theme={ButtonTheme.CLEAR_INVERTED}
                >
                    {t('войти')}
                </Button>
            </div>

            <LoginModal
                closeModal={() => toggleAuthModal()}
                isOpenModal={isAuthModal}
            >
                test modal
            </LoginModal>
        </nav>
    );
};
