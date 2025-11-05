import { DeepPartial } from '@reduxjs/toolkit';
import { StoreScheme } from 'app/providers/reduxProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPasswordSelector', () => {
    test('should return error password', () => {
        const state: DeepPartial<StoreScheme> = {
            login: {
                password: '642',
            },
        };

        expect(getLoginPassword(state as StoreScheme)).toEqual('642');
    });
    test('empty password', () => {
        const state: DeepPartial<StoreScheme> = {
            login: {},
        };

        expect(getLoginPassword(state as StoreScheme)).toEqual(undefined);
    });
});
