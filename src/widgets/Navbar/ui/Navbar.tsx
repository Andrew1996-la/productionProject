import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './navbar.module.scss';
import {AppLink} from "shared/ui/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    classes?: string
}

export const Navbar:FC<NavbarProps> = (props) => {
    const {classes} = props;

    return (
        <div className={classNames(cls.navbar, {}, [classes])}>
            <ThemeSwitcher />
            <nav className={classNames(cls.links)}>
                <AppLink to='/'>Main page</AppLink>
                <AppLink to='/about'>About page</AppLink>
            </nav>
        </div>
    );
};