import { DeepPartial } from '@reduxjs/toolkit';
import { StoreScheme } from 'app/providers/reduxProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsernameSelector', () => {
    test('should return username', () => {
        const state: DeepPartial<StoreScheme> = {
            login: {
                username: 'Andrew',
            },
        };

        expect(getLoginUsername(state as StoreScheme)).toEqual('Andrew');
    });
    test('empty username', () => {
        const state: DeepPartial<StoreScheme> = {
            login: {},
        };

        expect(getLoginUsername(state as StoreScheme)).toEqual(undefined);
    });
});
