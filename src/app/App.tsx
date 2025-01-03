import './styles/index.scss';
import {Link} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/themeProvider";
import {AppRoutes} from "app/providers/routes";

export function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>Main page</Link>
            <Link to='/about'>About page</Link>
            <button onClick={toggleTheme}>toggle theme</button>
            <AppRoutes />
        </div>
    )
}
