import React from 'react'
import './juniorchef.css'
import chef from './../../assets/image/chef.png'

const JuniorChef = () => {
  return (
    <div className='main_junior'>
        <div className="j_con">
            <div className="j_left">
                <img src={chef} alt="" className="j_img" />
            </div>
            <div className="j_right">
                <img src="https://static.wixstatic.com/media/ccd558_72bbaaba81bb4a80ab1c3ed1bcd22afb~mv2.png/v1/fill/w_77,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/chef-removebg-preview.png" alt="" className="j_logo" />
                <h1 className="j_title">JUNIOR CHEF PROGRAM</h1>
                <p className="j_info"></p>
                <p className="rm">Read more &gt;</p>
            </div>
        </div>
    </div>
  )
}

export default JuniorChef