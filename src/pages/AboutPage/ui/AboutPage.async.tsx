import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Задержка создано специально для проверки отрабатывания Suspens
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
