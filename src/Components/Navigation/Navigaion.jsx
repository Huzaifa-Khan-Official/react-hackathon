import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import AllProductsPage from '../Pages/AllProducts/AllProductsPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <AllProductsPage />
    }
]);

export default function Navigaion() {
    return (
        <RouterProvider router={router} />
    )
}