import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";
import cls from './applink.module.scss'

enum AppLinkTheme {
    PRIMARY='primary',
    SECONDARY='secondary',
}

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