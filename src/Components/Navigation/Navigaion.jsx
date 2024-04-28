import React, { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import ProductDetailPage from '../Pages/ProductDetailPage/ProductDetailPage';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Loader from '../../Context/Context';
// import Loader from '../../Context/Loader';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
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
    const [loader, setLoader] = useState(true);

    return (
        <Loader.Provider value={{ loader, setLoader }}>
            <RouterProvider router={router} />
        </Loader.Provider>
    )
}