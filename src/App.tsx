import './index.scss';
import {Routes, Route } from "react-router";
import MainPage from "./Pages/MainPage/MainPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import {Link} from "react-router-dom";
import {Suspense} from "react";
import {MainPageAsync} from "./Pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./Pages/AboutPage/AboutPage.async";

export function App() {
    return (
        <div className='app'>
            <Link to='/'>Main page</Link>
            <Link to='/about'>About page</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}
