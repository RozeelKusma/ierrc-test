import React from "react";
import "./bottom.css";

const Bottom = () => {
  return (
    <div className="main_bottom">
      <div className="b_con">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#6aa84f"
            fill-opacity="1"
            d="M0,256L48,234.7C96,213,192,171,288,138.7C384,107,480,85,576,96C672,107,768,149,864,181.3C960,213,1056,235,1152,234.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <div className="botm">
          <div className="left_bottom">
            <img
              src="https://static.wixstatic.com/media/ccd558_180d59265a3041eca81223452330d4ec~mv2.png/v1/fill/w_77,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/field.png"
              alt=""
              className="gaf_logo"
            />
            <h1 className="gaf_title">GREEN AFTER-SCHOOL & FARM STAY</h1>
            <p className="gaf_info">Dingla, Bhojpur, Nepal</p>
            <p className="rm">Read more &gt;</p>
          </div>
          <div className="right_bottom">
            <img
              src="https://static.wixstatic.com/media/ccd558_a6e00a65a0114febac2a79489ddbfeaf~mv2.png/v1/fill/w_77,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/education-removebg-preview.png"
              alt=""
              className="emp"
            />
            <h1 className="emp_title">
              EMPOWERMENT OF PEOPLE WITH HEARING AND SPEAKING DISABILITIES
            </h1>
            <p className="emp_info">A platform for specialized growth</p>
            <p className="rm">Read more &gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
