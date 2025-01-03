import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

const appRoutesPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
}

export const routesConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: appRoutesPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: appRoutesPath.about,
        element: <AboutPage />,
    }
}