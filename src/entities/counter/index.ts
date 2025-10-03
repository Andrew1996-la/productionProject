import { Counter } from './ui/Counter';
import type { CounterScheme } from './model/types/counterScheme';
import { counterActions, counterReducer } from './model/slice/counterSlice';

export {
    Counter,
    CounterScheme,
    counterActions,
    counterReducer,
};
