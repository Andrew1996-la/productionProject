import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './loader.module.scss';

interface LoaderProps {
    classes?: string
}

export const Loader:FC<LoaderProps> = (props) => {
    const {classes} = props;

    return (
        <span className={classNames(cls.loader, {}, [classes])}>
        </span>
    );
};