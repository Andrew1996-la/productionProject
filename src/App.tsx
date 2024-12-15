import './styles/index.scss';
import {Route, Routes} from "react-router";
import {Link} from "react-router-dom";
import {Suspense} from "react";
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";

export function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Link to='/'>Main page</Link>
            <Link to='/about'>About page</Link>
            <button onClick={toggleTheme}>toggle theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}
