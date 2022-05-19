import React from 'react'
import './teachers.css'
import teachers from './../../assets/image/teachers.webp'

const Teachers = () => {
  return (
    <div className='main_teachers'>
       <div className="t_con">
       <div className="t_left">
            <img src="https://static.wixstatic.com/media/ccd558_a6e00a65a0114febac2a79489ddbfeaf~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/education-removebg-preview.png" alt="" className="t_logo" />
            <h1 className="t_title">TEACHER TRAINING</h1>
            <p className="t_info">Intensive training for primary teachers</p>
            <p className="rm">Read more &gt;</p>
        </div>
        <div className="t_right">
            <img src={teachers} alt="" className="t_img" />
        </div>
       </div>
    </div>
  )
}

export default Teachers