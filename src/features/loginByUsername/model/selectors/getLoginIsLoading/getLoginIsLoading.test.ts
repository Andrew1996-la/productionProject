import { DeepPartial } from '@reduxjs/toolkit';
import { StoreScheme } from 'app/providers/reduxProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoadingSelector', () => {
    test('should return true', () => {
        const state: DeepPartial<StoreScheme> = {
            login: {
                isLoading: true,
            },
        };

        expect(getLoginIsLoading(state as StoreScheme)).toEqual(true);
    });
    test('should return false', () => {
        const state: DeepPartial<StoreScheme> = {
            login: {},
        };

        expect(getLoginIsLoading(state as StoreScheme)).toEqual(false);
    });
});
