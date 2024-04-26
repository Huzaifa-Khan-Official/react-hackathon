import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductDetail } from '../../../Services/products.service';

export default function ProductDetailPage() {
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState(null);

    useEffect(() => {
        // const unsubscribe = getProductDetail((id, productsList) => {
        //     setProductDetail(productsList);
        // });

        // return () => unsubscribe();
        (async () => {
            const response = await getProductDetail(id)

            if (response) setProductDetail(response)
            return () => response();
        })()
    }, []);
    console.log("products ==>", productDetail);

    return (
        <div>
            <h1>Product Detail:</h1>
        </div>
    )
}
