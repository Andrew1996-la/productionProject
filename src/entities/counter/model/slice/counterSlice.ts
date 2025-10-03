import { createSlice } from '@reduxjs/toolkit';
import { CounterScheme } from 'entities/counter/model/types/counterScheme';

const initialState: CounterScheme = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: CounterScheme) => {
            state.value += 1;
        },
        decrement: (state: CounterScheme) => {
            state.value -= 1;
        },
    },
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
