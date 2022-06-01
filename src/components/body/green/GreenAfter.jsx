import React from "react";
import { Link } from "react-router-dom";
import "./green.css";

const GreenAfter = () => {
  return (
    <div className="green_main">
      <div className="green_title">GREEN AFTER SCHOOL & FARM STAY</div>
      <div className="green_content">
        <Link
          to="/green-after-school-&-farm-stay/volunteer"
          className="link_ev"
        >
          <div className="vcontainer">
            <div className="over" />
            <div className="v_title">Want to Volunteer???</div>
          </div>
        </Link>
        <Link
          to="/green-after-school-&-farm-stay/experience-farm"
          className="link_ev"
        >
          <div className="econtainer">
            <div className="over" />
            <div className="e_title">Let's Enjoy the farm experience</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GreenAfter;
