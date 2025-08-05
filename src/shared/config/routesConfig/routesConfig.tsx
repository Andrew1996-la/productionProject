import { RouteProps } from 'react-router-dom';
import NotFound from 'pages/NotFound/ui/NotFound';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound',
}

const appRoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: appRoutesPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: appRoutesPath.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: appRoutesPath.notFound,
        element: <NotFound />,
    },
};
