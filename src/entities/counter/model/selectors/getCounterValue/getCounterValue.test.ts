import { getCounter } from 'entities/counter/model/selectors/getCounter/getCounter';
import { StoreScheme } from 'app/providers/reduxProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';

describe('getCounter', () => {
    test('should be return counter', () => {
        const store: DeepPartial<StoreScheme> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(store as StoreScheme)).toEqual(10);
    });
});
