import { Story } from '@storybook/react';
import { ReduxProvider, StoreScheme } from 'app/providers/reduxProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (store: DeepPartial<StoreScheme>) => (StoryComponent: Story) => (
    <ReduxProvider initialState={store as StoreScheme}>
        <StoryComponent />
    </ReduxProvider>
);
