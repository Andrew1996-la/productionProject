import {FC, Suspense} from "react";
import {Route, Routes} from "react-router";
import {routesConfig} from "shared/config/routesConfig/routesConfig";

export const AppRoutes: FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routesConfig).map(({path, element}) => {
                    return <Route key={path} path={path} element={(
                        <div className='page-content'>
                            {element}
                        </div>
                    )} />
                })}
            </Routes>
        </Suspense>
    );
};