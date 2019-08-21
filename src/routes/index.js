import { lazy } from 'react';

const getAsyncComponent = component => {
  return lazy(() => import(`./${component}`)); // todo exact strict
};

export default [
  {
    Component: getAsyncComponent('Main'),
    path: '/',
    exact: true,
  },
  {
    Component: getAsyncComponent('Product'),
    path: '/products/:number',
  },
  {
    Component: getAsyncComponent('About'),
    path: '/about',
  },
  {
    Component: getAsyncComponent('Gallery'),
    path: '/gallery',
  },
  {
    Component: getAsyncComponent('Info'),
    path: '/info',
  },
  {
    Component: getAsyncComponent('WishList'),
    path: '/wishlist',
  },
  {
    Component: getAsyncComponent('Payment'),
    path: '/payment',
  },
];
