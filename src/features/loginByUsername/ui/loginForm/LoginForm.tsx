import { FC } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import cls from './loginForm.module.scss';

export const LoginForm: FC = () => {
    const { t } = useTranslation();

    return (
        <div className={cls.loginForm}>
            <Input classes={cls.loginInput} autoFocus placeholder={t('введите имя пользователя')} />
            <Input classes={cls.loginInput} placeholder={t('введите пароль')} />

            <Button className={cls.loginBtn}>
                {t('войти')}
            </Button>
        </div>
    );
};
