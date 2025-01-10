import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/themeProvider";
import {AppRoutes} from "app/providers/routes";
import {Navbar} from "widgets/Navbar";

export function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRoutes />
        </div>
    )
}
