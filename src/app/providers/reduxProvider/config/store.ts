import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { StoreScheme } from './storeScheme';

export function createReduxStore(initialState?: StoreScheme) {
    return configureStore({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
