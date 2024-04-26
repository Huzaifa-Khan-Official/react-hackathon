import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import AllProductsPage from '../Pages/AllProducts/AllProductsPage';
import ProductDetailPage from '../Pages/ProductDetailPage/ProductDetailPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <AllProductsPage />
    },
    {
        path: "/product/:id",
        element: <ProductDetailPage />
    },
]);

export default function Navigaion() {
    return (
        <RouterProvider router={router} />
    )
}