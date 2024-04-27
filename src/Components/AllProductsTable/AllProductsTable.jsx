import React from 'react'
import { deleteProduct } from '../../Services/products.service';

export default function AllProductsTable(props) {
    const { name, imageUrl, price, id, index, qty } = props;

    

    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{qty}</td>
            <td><button onClick={() => deleteProduct(id)} className='btn btn-danger'>Delete</button></td>
        </tr>
    )
}
