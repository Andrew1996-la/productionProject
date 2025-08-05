import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';

enum AppRoutes {
    MAIN = 'Main',
    ABOUT = 'About',
    NOT_FOUND = 'NotFound',
}

const appRoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: appRoutesPath.Main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: appRoutesPath.About,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: appRoutesPath.NotFound,
        element: <NotFound />,
    },
};
