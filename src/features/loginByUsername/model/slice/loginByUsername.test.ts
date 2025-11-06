import { DeepPartial } from '@reduxjs/toolkit';
import { ILoginByUsernameSchema, loginByUserNameReducer } from 'features/loginByUsername';
import { loginByUserNameActions } from 'features/loginByUsername/model/slice/loginByUsername';

describe('loginByUsername slice', () => {
    test('set username', () => {
        const state: DeepPartial<ILoginByUsernameSchema> = {
            username: 'admin',
        };

        expect(loginByUserNameReducer(
            state as ILoginByUsernameSchema,
            loginByUserNameActions.setUsername('123'),
        )).toEqual({ username: '123' });
    });
    test('set password', () => {
        const state: DeepPartial<ILoginByUsernameSchema> = {
            password: '123',
        };

        expect(loginByUserNameReducer(
            state as ILoginByUsernameSchema,
            loginByUserNameActions.setPassword('555'),
        )).toEqual({ password: '555' });
    });
});
