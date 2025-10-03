import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';
import { createReduxStore, StoreScheme } from '..';

interface IProps {
    children: ReactNode;
    initialState?: StoreScheme;
}

export const ReduxProvider: FC<IProps> = ({ children, initialState }) => {
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
