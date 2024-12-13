import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // Задержка создано специально для проверки отрабатывания Suspens
   setTimeout(() => resolve(import('./MainPage')), 1500);
}));
