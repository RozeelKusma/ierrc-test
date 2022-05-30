import React from 'react'
import { Link } from 'react-router-dom'
import './green.css'

const GreenAfter = () => {
  return (
    <div className='green_main'>
        <div className="green_title">
            GREEN AFTER SCHOOL & FARM STAY
        </div>
        <div className="green_content">

        <div className="vcontainer">
            <Link to='/green-after-school-&-farm-stay/volunteer' className='link_ev' >
            <div className="v_title">
                Want to Volunteer???
            </div>
            </Link>
        </div>
        <div className="econtainer">
            <Link to='/green-after-school-&-farm-stay/experience-farm' className='link_ev'>


            <div className="e_title">
                Let's Enjoy the farm experience
            </div>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default GreenAfter