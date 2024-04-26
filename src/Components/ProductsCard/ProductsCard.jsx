import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductsCard(props) {
    const { name, imageUrl, desciption, price, id } = props
    return (
        <div className='col-md-4 col-12'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <Link to={`/product/${id}`} className="btn btn-primary">View Detail</Link>
                </div>
            </div>
        </div>
    )
}