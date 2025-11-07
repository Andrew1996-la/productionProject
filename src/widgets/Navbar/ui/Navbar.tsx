import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/loginByUsername';
import { getUserAuthData } from 'entities/user/model/selectors/getUserAuthData/getUserAuthData';
import { useSelector } from 'react-redux';
import { userActions } from 'entities/user';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import cls from './navbar.module.scss';

interface NavbarProps {
    classes?: string
}

export const Navbar:FC<NavbarProps> = (props) => {
    const { classes } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useAppDispatch();
    const isAuth = useSelector(getUserAuthData);

    const openAuthModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const closeAuthModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const logout = useCallback(() => {
        dispatch(userActions.logout());
        closeAuthModal();
    }, [dispatch, closeAuthModal]);

    return (
        <nav className={classNames(cls.navbar, {}, [classes])}>
            {isAuth
                ? (
                    <div className={cls.links}>
                        <Button
                            onClick={logout}
                            theme={ButtonTheme.CLEAR_INVERTED}
                        >
                            {t('выйти')}
                        </Button>
                    </div>
                )
                : (
                    <div className={cls.links}>
                        <Button
                            onClick={openAuthModal}
                            theme={ButtonTheme.CLEAR_INVERTED}
                        >
                            {t('войти')}
                        </Button>
                    </div>
                )}

            <LoginModal
                closeModal={closeAuthModal}
                isOpenModal={isAuthModal}
            />
        </nav>
    );
};
