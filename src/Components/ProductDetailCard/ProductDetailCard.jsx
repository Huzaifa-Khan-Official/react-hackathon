import React from 'react'

export default function ProductDetailCard({ productDetail }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={productDetail.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{productDetail.name} - <span>{productDetail.price}</span></h5> 
                <p className="card-text">{productDetail.description}</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
        </div>
    )
}