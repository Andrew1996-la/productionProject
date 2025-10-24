import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { IStoreSchemeWithManager, StoreSchemeKeys } from 'app/providers/reduxProvider/config/storeScheme';
import { Reducer } from '@reduxjs/toolkit';

export type TReducersList = {
    [reducerName in StoreSchemeKeys]?: Reducer;
}

type ReducerItem = [StoreSchemeKeys, Reducer]

interface IProps {
    reducers: TReducersList,
    removeAfterUnmount?: boolean,
}

export const LazyReducers: FC<IProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;
    const store = useStore() as IStoreSchemeWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([reducerName, reducer]:ReducerItem) => {
            store.reducerManager.add(reducerName, reducer);
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([reducerName]:ReducerItem) => {
                    store.reducerManager.remove(reducerName);
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            { children }
        </>
    );
};
