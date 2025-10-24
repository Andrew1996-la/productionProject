import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { IStoreSchemeWithManager, StoreSchemeKeys } from 'app/providers/reduxProvider/config/storeScheme';
import { Reducer } from '@reduxjs/toolkit';

interface IProps {
    reducerName: StoreSchemeKeys;
    reducer: Reducer,
}

export const LazyReducers: FC<IProps> = (props) => {
    const { children, reducerName, reducer } = props;
    const store = useStore() as IStoreSchemeWithManager;

    useEffect(() => {
        store.reducerManager.add(reducerName, reducer);

        return () => store.reducerManager.remove(reducerName);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {children}
        </div>
    );
};
