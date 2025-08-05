import { useTranslation } from 'react-i18next';
import cls from './NotFound.module.scss';

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <div className={cls.notFound}>
            <h1>{t('страница не наидена')}</h1>
        </div>
    );
};

export default NotFound;
