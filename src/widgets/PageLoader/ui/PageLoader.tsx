import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {Loader} from "shared/ui/Loader";
import cls from './pageLoader.module.scss';

interface PageLoaderProps {
    classes?: string
}

export const PageLoader:FC<PageLoaderProps> = (props) => {
    const {classes} = props;

    return (
        <div className={classNames(cls.pageLoader, {}, [classes])}>
            <Loader />
        </div>
    );
};