import { Story } from '@storybook/react';
import { ReduxProvider, StoreScheme } from 'app/providers/reduxProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginByUserNameReducer } from 'features/loginByUsername';

const defaultLoginReducers: DeepPartial<ReducersMapObject<StoreScheme>> = {
    login: loginByUserNameReducer,
};

export const StoreDecorator = (
    store: DeepPartial<StoreScheme>,
    asyncReducers: DeepPartial<ReducersMapObject<StoreScheme>>,
) => (StoryComponent: Story) => (
    <ReduxProvider
        initialState={store as StoreScheme}
        asyncReducer={{ ...defaultLoginReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </ReduxProvider>
);
