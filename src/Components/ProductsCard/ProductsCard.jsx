import React from 'react'

export default function ProductsCard(props) {
    const { name, imageUrl, desciption, price } = props
    return (
        <div className='col-md-4 col-12'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <a href="#" className="btn btn-primary">View Detail</a>
                </div>
            </div>
        </div>
    )
}