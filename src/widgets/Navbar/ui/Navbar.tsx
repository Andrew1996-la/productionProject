import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/loginByUsername';
import { getUserAuthData } from 'entities/user/model/selectors/getUserAuthData/getUserAuthData';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/user';
import cls from './navbar.module.scss';

interface NavbarProps {
    classes?: string
}

export const Navbar:FC<NavbarProps> = (props) => {
    const { classes } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const dispatch = useDispatch();
    const isAuth = useSelector(getUserAuthData);

    const closeAuthModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    const logout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (isAuth) {
        return (
            <nav className={classNames(cls.navbar, {}, [classes])}>
                <div className={cls.links}>
                    <Button
                        onClick={logout}
                        theme={ButtonTheme.CLEAR_INVERTED}
                    >
                        {t('выйти')}
                    </Button>
                </div>
            </nav>
        );
    }

    return (
        <nav className={classNames(cls.navbar, {}, [classes])}>
            <div className={cls.links}>
                <Button
                    onClick={closeAuthModal}
                    theme={ButtonTheme.CLEAR_INVERTED}
                >
                    {t('войти')}
                </Button>
            </div>

            <LoginModal
                closeModal={() => closeAuthModal()}
                isOpenModal={isAuthModal}
            >
                test modal
            </LoginModal>
        </nav>
    );
};
