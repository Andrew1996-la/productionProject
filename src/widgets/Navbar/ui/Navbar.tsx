import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './navbar.module.scss';

interface NavbarProps {
    classes?: string
}

export const Navbar:FC<NavbarProps> = (props) => {
    const { classes } = props;

    return (
        <div className={classNames(cls.navbar, {}, [classes])} />
    );
};
