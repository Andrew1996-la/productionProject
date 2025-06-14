import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { AppLinkTheme } from 'shared/ui/AppLink/types';
import cls from './applink.module.scss';

interface AppLinkProps extends LinkProps{
    classes?: string
    theme?: AppLinkTheme
}

export const AppLink:FC<AppLinkProps> = (props) => {
    const {
        to,
        classes,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.link, {}, [classes, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
