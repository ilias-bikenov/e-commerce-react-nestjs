import Admin from './pages/Admin';
import Auth from './pages/Auth';
import Basket from './pages/Basket';
import Item from './pages/ItemPage';
import Shop from './pages/Shop';
import {
  ADMIN_ROUTE, BASKET_ROUTE, SIGNIN_ROUTE, item_ROUTE, SHOP_ROUTE, SIGNUP_ROUTE,
} from './utils/consts';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop,
  },
  {
    path: SIGNIN_ROUTE,
    Component: Auth,
  },
  {
    path: SIGNUP_ROUTE,
    Component: Auth,
  },
  {
    path: `${item_ROUTE}/:id`,
    Component: Item,
  },
];
