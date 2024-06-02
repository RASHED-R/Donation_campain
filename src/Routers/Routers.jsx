import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/Layout/MainLayout';
import Home from '../Pages/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Login from '../Pages/Login/Login';
import ProductPage from '../Pages/ProductPage/ProductPage';
import Statistics from '../Pages/Statistics/Statistics';
import Donations from '../Pages/Favorites/Donations';

const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`/donation.json`)
            },
            {
                path: '/donations',
                element: <Donations></Donations>,

            },
            {
                path: '/product/:id',
                element: <ProductPage></ProductPage>,
                loader: () => fetch(`/donation.json`)

            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch(`/donation.json`)

            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default myCreatedRouter;