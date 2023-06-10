import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
import { Home } from './pages/Home/Home';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { Housing } from './pages/Housing/Housing';
import { About } from './pages/About/About';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/housing/:id',
                element: <Housing/>
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
]);