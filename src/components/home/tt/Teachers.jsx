import React from 'react'
import { Link } from 'react-router-dom'
import './teachers.css'


const Teachers = () => {
  return (
    <div className='main_teachers'>
       <div className="t_con">
         <Link to='/teachers-training' className='tt' >
           
       <div className="t_left">
            <img src="https://static.wixstatic.com/media/ccd558_a6e00a65a0114febac2a79489ddbfeaf~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/education-removebg-preview.png" alt="" className="t_logo" />
            <h1 className="t_title">TEACHER TRAINING</h1>
            <p className="t_info">Intensive training for primary teachers</p>
            <p className="rm">Read more &gt;</p>
        </div>
         </Link>
       
       </div>
    </div>
  )
}

export default Teachers