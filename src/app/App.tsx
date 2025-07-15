import { AppRoutes } from 'app/providers/routes';
import { useTheme } from 'app/providers/themeProvider';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import '../shared/config/i18n/i18n';
import './styles/index.scss';

export function App() {
    const { theme } = useTheme();

    useEffect(() => {
        if (Math.random() > 0.5) {
            throw new Error();
        }
    }, []);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-wrapper">
                    <Sidebar />
                    <AppRoutes />
                </div>
            </Suspense>
        </div>
    );
}
