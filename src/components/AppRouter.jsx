import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { basketRoute, homeRoute } from '../routes/routes';

const AppRouter = () => {
    return (
        <Routes>
            <Route
                key={homeRoute.path}
                path="*"
                Component={homeRoute.Component}
            />
            <Route
                key={basketRoute.path}
                path={basketRoute.path}
                Component={basketRoute.Component}
            />
        </Routes>
    );
};

export default AppRouter;
