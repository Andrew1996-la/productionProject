import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './text.module.scss';

export enum ETextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface ITextProps {
    classes?: string,
    title?: string,
    text?: string,
    textTheme?: ETextTheme,
}

export const Text: FC<ITextProps> = (props) => {
    const {
        classes,
        title,
        text,
        textTheme = ETextTheme.PRIMARY,
    } = props;

    return (
        <div
            data-testid="textWrapper"
            className={classNames(cls.textWrapper, { [cls[textTheme]]: true }, [classes])}
        >
            {title && <p data-testid="title" className={cls.title}>{title}</p>}
            {text && <p data-testid="text" className={cls.text}>{text}</p>}
        </div>
    );
};
