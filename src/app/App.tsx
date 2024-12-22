import './styles/index.scss';
import {Route, Routes} from "react-router";
import {Link} from "react-router-dom";
import {Suspense} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {useTheme} from "app/providers/themeProvider";

export function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>Main page</Link>
            <Link to='/about'>About page</Link>
            <button onClick={toggleTheme}>toggle theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}
