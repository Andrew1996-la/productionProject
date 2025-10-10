import { FC } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginData } from 'features/loginByUsername/model/selectors/getLoginData/getLoginData';
import { fetchLoginByUserName, loginByUserNameActions } from 'features/loginByUsername';
import { ETextTheme, Text } from 'shared/ui/Text';
import cls from './loginForm.module.scss';

export const LoginForm: FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error,
    } = useSelector(getLoginData);

    const handleUsername = (value: string) => {
        dispatch(loginByUserNameActions.setUsername(value));
    };

    const handlePassword = (value: string) => {
        dispatch(loginByUserNameActions.setPassword(value));
    };

    const handleSubmit = () => {
        dispatch(fetchLoginByUserName({ username, password }));
    };

    return (
        <div className={cls.loginForm}>
            {error && (
                <Text
                    textTheme={ETextTheme.ERROR}
                    text={t('вы ввели неправильный логин или пароль')}
                />
            )}

            <Input
                value={username}
                onChange={handleUsername}
                classes={cls.loginInput}
                autoFocus
                placeholder={t('введите имя пользователя')}
            />
            <Input
                value={password}
                onChange={handlePassword}
                classes={cls.loginInput}
                placeholder={t('введите пароль')}
            />

            <Button
                className={cls.loginBtn}
                onClick={handleSubmit}
            >
                {t('войти')}
            </Button>
        </div>
    );
};
