import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Modal() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="inputDiv mb-3">
                                    <label className='form-label'>Name:</label>
                                    <input type="text"  className='form-control' placeholder='Name' {...register("name", { required: true })}/>
                                </div>
                                <div className="inputDiv mb-3">
                                    <label className='form-label'>Price:</label>
                                    <input type="text" className='form-control' placeholder='Price' />
                                </div>
                                <div className="inputDiv mb-3">
                                    <label className='form-label'>Quantity:</label>
                                    <input type="text" className='form-control' placeholder='Quantity' />
                                </div>
                                <div className="inputDiv mb-3">
                                    <label className='form-label'>Discount Amount:</label>
                                    <input type="text" className='form-control' placeholder='Discount Amount:' />
                                </div>
                                <div className="inputDiv mb-3">
                                    <label className='form-label'>Description:</label>
                                    <textarea className="form-control" rows="3" placeholder='Description' ></textarea>
                                </div>
                                <button type='submit' className="btn btn-primary">Save changes</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
