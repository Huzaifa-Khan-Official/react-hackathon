import React from 'react'
import "./LoaderComponent.css"

export default function LoaderComponent() {
    return (
        <div className='spinnerComponent'>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
