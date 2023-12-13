import { HOME_ROUTE, BASKET_ROUTE } from './utils';

import HomePage from '../pages/homePage/HomePage';
import BasketPage from '../pages/basketPage/BasketPage';

export const homeRoute = {
    path: HOME_ROUTE,
    Component: HomePage,
};

export const basketRoute = {
    path: BASKET_ROUTE,
    Component: BasketPage,
};
