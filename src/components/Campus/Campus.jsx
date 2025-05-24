import React from 'react'
import "./Campus.css"
import Campus_1 from "../../assets/gallery-1.png"
import Campus_2 from "../../assets/gallery-2.png"
import Campus_3 from "../../assets/gallery-3.png"
import Campus_4 from "../../assets/gallery-4.png"
export default function Campus() {
    return (
        <div className='campus container d-flex justify-content-center align-items-center flex-column gap-5 p-3'>
            <div className="head text-center">
                <p className='mb-2'>Gallery</p>
                <h3>Campus Photos</h3>
            </div>
            <div className="grid d-flex justify-content-center gap-5 align-items-center col-12">
                <img src={Campus_1} className='rounded shadow' />
                <img src={Campus_2}  className='rounded shadow'/>
                <img src={Campus_3} className='rounded shadow'/>
                <img src={Campus_4} className='rounded shadow' />
            </div>
            <button className='btn'>See more here</button>
        </div>
    )
}
