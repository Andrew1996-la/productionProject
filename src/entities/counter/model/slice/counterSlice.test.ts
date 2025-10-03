import { counterActions, counterReducer, CounterScheme } from 'entities/counter';

describe('counterSlice', () => {
    test('increment', () => {
        const store: CounterScheme = { value: 10 };

        expect(
            counterReducer(store, counterActions.increment()),
        ).toEqual({ value: 11 });
    });

    test('decrement', () => {
        const store: CounterScheme = { value: 10 };

        expect(
            counterReducer(store, counterActions.decrement()),
        ).toEqual({ value: 9 });
    });
});
