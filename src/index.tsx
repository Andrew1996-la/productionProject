import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from 'app/providers/themeProvider';
import { App } from 'app/App';
import { ErrorBoundary } from 'react-error-boundary';
import { PageErrorBoundary } from 'widgets/PageErrorBoundary';
import { Suspense } from 'react';

render(
    <ErrorBoundary fallback={<Suspense fallback=""><PageErrorBoundary /></Suspense>}>
        <BrowserRouter>
            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root'),
);
