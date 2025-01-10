import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './button.module.scss'

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    classes?: string
    theme?: ButtonTheme
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        classes,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.button, {}, [classes, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};