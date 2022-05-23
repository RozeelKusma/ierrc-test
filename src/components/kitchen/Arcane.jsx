import React from 'react'
import './arcane.css'
import kitchen from './../../assets/image/kitchen.jpg'

const Arcane = () => {
  return (
    <div className='main_arcane'>
        <div className="a_con">
            <div className="a_left">
                <img src="https://static.wixstatic.com/media/ccd558_ed6889a4c1ed4f7a9fdd32336105eb3d~mv2.png/v1/fill/w_77,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dragon-fruit-removebg-preview.png" alt="" className="a_logo" />
                <h1 className="a_title">ARCANE KITCHEN QUEST</h1>
                <p className="a_info">An insightful evening filled with culinary abstract</p>
                <p className="rm4">Read more &gt;</p>
            </div>
            <div className="a_right">
                <img src={kitchen} alt="" className="a_img" />
            </div>
        </div>
    </div>
  )
}

export default Arcane