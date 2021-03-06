import React from "react";
import { Link } from "react-router-dom";
import "./ras.css";
import {AiFillQuestionCircle} from 'react-icons/ai'

const Ras = () => {
  return (
    <div className="main_ras">
      <div className="overlay" />
      <div className="ras_con">
        <Link to='/ramailo-after-school' className="link_ras">

        <div className="right">
          <img
            src="https://static.wixstatic.com/media/ccd558_db2203ecf3414f0ab8df1729a636705e~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/creativity-removebg-preview.png"
            alt=""
            className="ras_logo"
          />
          <h1 className="ras_title">RAMAILO AFTER SCHOOL</h1>
          <p className="ras_info">Creative after-school events</p>
          <p className="rm">Read more &gt;</p>
        <Link to='ramailo-after-school/enquiry'>
        <AiFillQuestionCircle size={30} className='enquire' title="Enquiry"/>
        </Link>
        </div>
        </Link>
        
      </div>
    </div>
  );
};

export default Ras;
