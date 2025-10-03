import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ReduxProvider, StoreScheme } from 'app/providers/reduxProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import i18nForTest from '../../config/i18n/i18nForTest';

interface IProps {
    component: ReactNode;
    initialState?: DeepPartial<StoreScheme>;
}

export const renderWithTranslation = (props: IProps) => {
    const { component, initialState } = props;

    return render(
        <ReduxProvider initialState={initialState as StoreScheme}>
            <MemoryRouter>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </ReduxProvider>,
    );
};
