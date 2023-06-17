import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

import { getAllHousingLoader, getOneHousingByIdLoader } from './loader/housing.loader';

import App from '../App';
const ErrorPage = lazy(() => import('../pages/Error/ErrorPage'));
const Home = lazy(() => import('../pages/Home/Home'));
const Housing = lazy(() => import('../pages/Housing/Housing'));
const About = lazy(() => import('../pages/About/About'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                loader: getAllHousingLoader,
                element: <Home/>
            },
            {
                path: '/housing/:id',
                loader: getOneHousingByIdLoader,
                element: <Housing/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }
]);