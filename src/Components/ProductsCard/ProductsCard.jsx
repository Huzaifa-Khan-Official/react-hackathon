import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductsCard(props) {
    const { name, imageUrl, price, id } = props
    return (
        <div className='col-md-4 col-sm-5 col-12'>
            <div className="card" style={{ width: "100%" }}>
                <img src={imageUrl} className="card-img-top" alt="..." style={{maxHeight: "400px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <Link to={`/product/${id}`} className="btn btn-primary">View Detail</Link>
                </div>
            </div>
        </div>
    )
}