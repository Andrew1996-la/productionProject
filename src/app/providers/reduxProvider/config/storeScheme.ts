import { CounterScheme } from 'entities/counter';
import { IUserSchema } from 'entities/user';
import { ILoginByUsernameSchema } from 'features/loginByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

export interface StoreScheme {
    counter: CounterScheme,
    userData: IUserSchema,

    // async reducers
    login?: ILoginByUsernameSchema
}

export type StoreSchemeKeys = keyof StoreScheme

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<StoreScheme>,
    reduce: (state: StoreScheme, action: AnyAction) => CombinedState<StoreScheme>,
    add: (key: StoreSchemeKeys, reducer: Reducer) => void,
    remove: (key: StoreSchemeKeys) => void,
}

export interface IStoreSchemeWithManager extends EnhancedStore<StoreScheme> {
    reducerManager: IReducerManager
}
