import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { StoreScheme } from './storeScheme';

export function createReduxStore(initialState?: StoreScheme) {
    const rootReducer = combineReducers<StoreScheme>({
        counter: counterReducer,
        authData: userReducer,
    });

    return configureStore({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
