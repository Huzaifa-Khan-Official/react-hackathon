import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../../Services/products.service';
import AllProductsTable from '../../AllProductsTable/AllProductsTable';
import Modal from '../../Modal/Modal';

export default function Dashboard() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const unsubscribe = getAllProducts((productsList) => {
            setProducts(productsList);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div>
            <Modal />
            <div className="navbar px-3">
                <h1>Admin Dashboard</h1>
                <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">Add Product</button>
            </div>

            <div className='px-4'>
                {products ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope='col'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <AllProductsTable key={index} {...product} index={index} />
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <span>Loading...</span>
                )}
            </div>
        </div>
    );
}
