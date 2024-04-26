import React, { useEffect, useState } from 'react'
import { getAllProducts } from '../../../Services/products.service'
import ProductsCard from '../../ProductsCard/ProductsCard';

export default function AllProductsPage() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const unsubscribe = getAllProducts((productsList) => {
            setProducts(productsList);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className='px-4'>
            <h1>All Products</h1>

            <div className='row justify-content-center'>
                {
                    products ? (
                        products.map((product, index) => {
                            return <ProductsCard {...product} key={index} />
                        })
                    ) : <h3>Loading...</h3>
                }
            </div>
        </div>
    )
}