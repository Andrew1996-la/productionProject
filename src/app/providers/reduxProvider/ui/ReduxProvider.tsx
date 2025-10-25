import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore, StoreScheme } from '..';

interface IProps {
    children: ReactNode;
    initialState?: StoreScheme;
    asyncReducer?: DeepPartial<ReducersMapObject<StoreScheme>>
}

export const ReduxProvider: FC<IProps> = ({ children, initialState, asyncReducer }) => {
    const store = createReduxStore(initialState, asyncReducer as ReducersMapObject<StoreScheme>);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
