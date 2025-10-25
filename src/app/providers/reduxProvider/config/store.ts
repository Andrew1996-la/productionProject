import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/counter';
import { userReducer } from 'entities/user';
import { createReducerManager } from 'app/providers/reduxProvider/config/reducerManager';
import { IReducerManager, StoreScheme } from './storeScheme';

export function createReduxStore(
    initialState?: StoreScheme,
    asyncReducer?: ReducersMapObject<StoreScheme>,
) {
    const rootReducer: ReducersMapObject<StoreScheme> = {
        ...asyncReducer,
        counter: counterReducer,
        userData: userReducer,
    };

    const reducerManager: IReducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
