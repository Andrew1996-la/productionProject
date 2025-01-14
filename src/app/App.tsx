import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/themeProvider";
import {AppRoutes} from "app/providers/routes";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import '../shared/config/i18n/i18n';
import {Suspense} from "react";

export function App() {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className='content-wrapper'>
                    <Sidebar />
                    <AppRoutes />
                </div>
            </Suspense>
        </div>
    )
}
