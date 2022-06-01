import React from "react";
import "./bottom.css";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Bottom = () => {
  return (
    <div className="main_bottom">
      <div className="b_con">
        <div className="left_bottom">
        <Link to='/green-after-school-&-farm-stay' className="link_left">

          <img
            src="https://static.wixstatic.com/media/ccd558_180d59265a3041eca81223452330d4ec~mv2.png/v1/fill/w_77,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/field.png"
            alt=""
            className="gaf_logo"
          />
          <h1 className="gaf_title">GREEN AFTER-SCHOOL & FARM STAY</h1>
          <p className="gaf_info">Dingla, Bhojpur, Nepal</p>
          <p className="rm5">Read more &gt;</p>
          <AiFillQuestionCircle size={30} title="Enquiry" className="enquiry"/>
        </Link>
        </div>
        <div className="right_bottom">
          <Link to='/eopwhasd' className="link_left">

          <img
            src="https://static.wixstatic.com/media/ccd558_a6e00a65a0114febac2a79489ddbfeaf~mv2.png/v1/fill/w_77,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/education-removebg-preview.png"
            alt=""
            className="emp"
            />
          <h1 className="emp_title">
            EMPOWERMENT OF PEOPLE WITH HEARING AND SPEAKING DISABILITIES
          </h1>
          <p className="emp_info">A platform for specialized growth</p>
          <p className="rm5">Read more &gt;</p>
          <AiFillQuestionCircle size={30} title="Enquiry" className="enquiry"/>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
