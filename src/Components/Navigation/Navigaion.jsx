import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import AllProductsPage from '../Pages/AllProducts/AllProductsPage';
import ProductDetailPage from '../Pages/ProductDetailPage/ProductDetailPage';
import Dashboard from '../Pages/Dashboard/Dashboard';

const router = createBrowserRouter([
    {
        path: "/",
        element: <AllProductsPage />
    },
    {
        path: "/product/:id",
        element: <ProductDetailPage />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
]);

export default function Navigaion() {
    return (
        <RouterProvider router={router} />
    )
}