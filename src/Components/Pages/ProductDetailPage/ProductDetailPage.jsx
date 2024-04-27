import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductDetail } from '../../../Services/products.service';
import ProductDetailCard from '../../ProductDetailCard/ProductDetailCard';

export default function ProductDetailPage() {
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await getProductDetail(id)

            if (response) setProductDetail(response)
            return () => response();
        })()
    }, []);

    return (
        <div className='px-4'>
            <h1>Product Detail:</h1>
            {
                productDetail ? <ProductDetailCard productDetail={productDetail}/> : <h2>Loading...</h2>
            }
        </div>
    )
}
