import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { routesConfig } from 'shared/config/routesConfig/routesConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRoutes: FC = () => (
    <Routes>
        {Object.values(routesConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-content">{element}</div>
                    </Suspense>
                )}
            />
        ))}
    </Routes>
);
