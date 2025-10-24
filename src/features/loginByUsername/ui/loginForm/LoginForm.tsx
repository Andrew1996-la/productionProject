import { FC } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { ETextTheme, Text } from 'shared/ui/Text';
import { LazyReducers } from 'shared/lib/lazyReducers/LazyReducers';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './loginForm.module.scss';
import { fetchLoginByUserName } from '../../model/services/fetchLoginByUserName/fetchLoginByUserName';
import { loginByUserNameActions, loginByUserNameReducer } from '../../model/slice/loginByUsername';

const LoginForm: FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

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
        <LazyReducers reducerName="login" reducer={loginByUserNameReducer}>
            <div className={cls.loginForm}>
                <Text title={t('авторизация')} />
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
                    disabled={isLoading}
                    autoFocus
                    placeholder={t('введите имя пользователя')}
                />
                <Input
                    value={password}
                    onChange={handlePassword}
                    classes={cls.loginInput}
                    disabled={isLoading}
                    placeholder={t('введите пароль')}
                />

                <Button
                    className={cls.loginBtn}
                    onClick={handleSubmit}
                    disabled={isLoading}
                >
                    {t('войти')}
                </Button>
            </div>
        </LazyReducers>

    );
};

export default LoginForm;
