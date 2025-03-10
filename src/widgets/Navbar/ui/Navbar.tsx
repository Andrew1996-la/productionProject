import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './navbar.module.scss';

interface NavbarProps {
    classes?: string
}

export const Navbar:FC<NavbarProps> = (props) => {
    const { t } = useTranslation();
    const { classes } = props;

    return (
        <div className={classNames(cls.navbar, {}, [classes])}>
            <nav className={classNames(cls.links)}>
                <AppLink to="/">{t('меню.главная')}</AppLink>
                <AppLink to="/about">{t('меню.о нас')}</AppLink>
            </nav>
        </div>
    );
};
