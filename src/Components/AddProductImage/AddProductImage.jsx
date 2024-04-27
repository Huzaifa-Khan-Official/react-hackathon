import React, { useRef } from 'react'
import "./AddProductImage.css"

export default function AddProductImage() {
    const imageRef = useRef();
    const dummyProductImageRef = useRef();

    const imageHandle = async () => {
        if (imageRef.current.files.length > 0) {
            const dummyImage = dummyProductImageRef.current;
            dummyImage.classList.add("show")
            console.log(dummyImage);
            console.log("imageRef.current.files[0] ==> ", imageRef.current.files[0]);
            dummyImage.src = URL.createObjectURL(imageRef.current.files[0]);
            // imgUrl = await (file);
            // if (imgUrl) {
            //     profilePicDiv.innerHTML = `
            //     <img src="${imgUrl}" id="profileImg">
            //     `
            // }
        }
    }

    return (
        <div className='inputDiv mb-3'>
            <label className='form-label'>Product Image:</label>
            <div className="productImage">
                <img src alt="" ref={dummyProductImageRef} className='dummyProductImage' />
            </div>
            <div className="productImageInputDiv">
                <input type="file" accept="image/*" ref={imageRef} onChange={imageHandle} />
            </div>
        </div>
    )
}
