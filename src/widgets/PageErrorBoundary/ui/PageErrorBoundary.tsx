import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import cls from './pageErrorBoundary.module.scss';


export const PageErrorBoundary = () => {
    const {t} = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className={classNames(cls.errorPage, {}, [])}>
            <h1>{t('что-то пошло не так. перезагрузите страницу')}</h1>
            <button onClick={reloadPage}>{t('перезагрузить')}</button>
        </div>
    );
};