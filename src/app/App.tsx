import { AppRoutes } from 'app/providers/routes';
import { useTheme } from 'app/providers/themeProvider';
import { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import '../shared/config/i18n/i18n';
import './styles/index.scss';
import { Counter } from 'entities/counter';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <Counter />
                <div className="content-wrapper">
                    <Sidebar />
                    <AppRoutes />
                </div>
            </Suspense>
        </div>
    );
}
