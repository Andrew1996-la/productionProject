import { FC, useState } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { LangSwitcherTheme } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import { appRoutesPath } from 'shared/config/routesConfig/routesConfig';
import cls from './sidebar.module.scss';

interface SidebarProps {
    classes?: string
}

export const Sidebar:FC<SidebarProps> = (props) => {
    const { classes } = props;
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const toggleCollapsed = (): void => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [classes])}
        >
            <Button
                type="button"
                square
                theme={ButtonTheme.BACKGROUND_INVERTED}
                data-testid="sidebar-btn"
                onClick={toggleCollapsed}
                className={cls.collapseBtn}
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <nav className={classNames(cls.links)}>
                <AppLink to={appRoutesPath.Main} className={classNames(cls.link)}>
                    <MainIcon className={classNames(cls.icon)} />
                    <span className={classNames(cls.linkText)}>{t('меню.главная')}</span>
                </AppLink>
                <AppLink to={appRoutesPath.About} className={classNames(cls.link)}>
                    <AboutIcon className={classNames(cls.icon)} />
                    <span className={classNames(cls.linkText)}>{t('меню.о нас')}</span>
                </AppLink>
            </nav>

            <div className={cls.switcher}>
                <ThemeSwitcher />
                <LangSwitcher
                    short={collapsed}
                    theme={LangSwitcherTheme.PRIMARY}
                />
            </div>
        </div>
    );
};
