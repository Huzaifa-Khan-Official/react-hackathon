import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductDetail } from '../../../Services/products.service';
import ProductDetailCard from '../../ProductDetailCard/ProductDetailCard';
import Loader from '../../../Context/Context';
import LoaderComponent from '../../LoaderComponent/LoaderComponent';

export default function ProductDetailPage() {
    const { id } = useParams()
    const [productDetail, setProductDetail] = useState(null);
    const { loader, setLoader } = useContext(Loader);

    useEffect(() => {
        (async () => {
            setLoader(true);
            const response = await getProductDetail(id)

            if (response) {
                setProductDetail(response)
                setLoader(false);
            }
            return () => response();
        })()
    }, []);

    return (
        <div className='px-4'>
            <h1>Product Detail:</h1>
            {
                loader && <LoaderComponent />
            }
            {
                productDetail && <ProductDetailCard productDetail={productDetail} />
            }
        </div>
    )
}
