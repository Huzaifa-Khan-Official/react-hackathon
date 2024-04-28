import React, { useContext, useEffect, useState } from 'react'
import { getAllProducts } from '../../../Services/products.service'
import ProductsCard from '../../ProductsCard/ProductsCard';
import Loader from '../../../Context/Context';
import LoaderComponent from '../../LoaderComponent/LoaderComponent';

export default function AllProductsPage() {
    const [products, setProducts] = useState(null);
    const { loader, setLoader } = useContext(Loader);

    useEffect(() => {
        setLoader(true);
        const unsubscribe = getAllProducts((productsList) => {
            setProducts(productsList);
            setLoader(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className='px-4'>
            <h1>All Products</h1>

            {
                loader && <LoaderComponent />
            }
            <div className='row justify-content-center gap-3'>
                {
                    products &&
                    products.map((product, index) => {
                        return <ProductsCard {...product} key={index} />
                    })
                }
            </div>
        </div>
    )
}