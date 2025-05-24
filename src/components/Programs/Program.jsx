import React from 'react'
import "./Programs.css"
import Program_1 from "../../assets/program-1.png"
import Program_2 from "../../assets/program-2.png"
import Program_3 from "../../assets/program-3.png"
import Program_icon_1 from "../../assets/program-icon-1.png"
import Program_icon_2 from "../../assets/program-icon-2.png"
import Program_icon_3 from "../../assets/program-icon-3.png"
function Program() {
  return (
    <div className='parent col-12 text-center'>
    <p>Our PROGRAM</p>
    <h3 className='mb-5'>What We Offer</h3>
    <div className='programs container d-flex justify-content-between align-items-center'>
        <div className="program">
            <img src={Program_1} className='rounded shadow'/>
            <div className="caption rounded">
                <img src={Program_icon_1} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={Program_2} className='rounded shadow'/>
            <div className="caption rounded">
                <img src={Program_icon_2} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={Program_3} className='rounded shadow'/>
            <div className="caption rounded">
                <img src={Program_icon_3} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Program
