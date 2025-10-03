import { getCounter } from 'entities/counter/model/selectors/getCounter/getCounter';
import { StoreScheme } from 'app/providers/reduxProvider';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getCounter', () => {
    test('should be return counter', () => {
        const store: DeepPartial<StoreScheme> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounter(store as StoreScheme)).toEqual({ value: 10 });
    });
});
