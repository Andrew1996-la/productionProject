import { DeepPartial } from '@reduxjs/toolkit';
import { StoreScheme } from 'app/providers/reduxProvider';
import { getLoginError } from './getLoginError';

describe('getLoginErrorSelector', () => {
    test('should return error message', () => {
        const state: DeepPartial<StoreScheme> = {
            login: {
                error: 'error',
            },
        };

        expect(getLoginError(state as StoreScheme)).toEqual('error');
    });
    test('empty error', () => {
        const state: DeepPartial<StoreScheme> = {
            login: {},
        };

        expect(getLoginError(state as StoreScheme)).toEqual(undefined);
    });
});
