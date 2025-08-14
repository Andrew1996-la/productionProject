import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import cls from './langswitcher.module.scss';

export enum LangSwitcherTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface LangSwitcherProps {
    classes?: string
    theme?: LangSwitcherTheme
    short?: boolean;
}

export const LangSwitcher:FC<LangSwitcherProps> = (props) => {
    const { t, i18n } = useTranslation();
    const { classes, theme = LangSwitcherTheme.PRIMARY, short } = props;

    const changeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={changeLang}
            className={classNames('', {}, [classes, cls[theme]])}
        >
            {short ? t('язык краткий') : t('язык') }
        </Button>
    );
};
