import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/themeProvider";
import {AppRoutes} from "app/providers/routes";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

export function App() {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content-wrapper'>
                <Sidebar />
                <AppRoutes />
            </div>
        </div>
    )
}
