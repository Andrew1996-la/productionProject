import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { ReactNode } from 'react';
import i18nForTest from '../../config/i18n/i18nForTest';

export const renderWithTranslation = (component: ReactNode) => render(
    <I18nextProvider i18n={i18nForTest}>
        {component}
    </I18nextProvider>,
);
