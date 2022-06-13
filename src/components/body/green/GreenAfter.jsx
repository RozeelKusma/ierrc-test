import React from "react";
import { Link } from "react-router-dom";
import "./green.css";

const GreenAfter = () => {
  return (
    <div className="green_main">
      <div className="green_title">GREEN AFTER SCHOOL & FARM STAY</div>
      <div className="green_info">
      The Green After School and farm stay  is a program run by Integrative Education Research and Recreation Centre Pvt. Ltd.(IERRC) in a remote community in Nepal called Dingla.
We guide students to learn English through literature, as well as through thematic projects such as composting and kitchen gardening, recycling non-biodegradable waste, entrepreneurship, and other eco-friendly projects through the Green After School and farm stay program. We also teach them yoga and meditation.
This can be viewed as an opportunity to gain firsthand knowledge of village life.
      </div>
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
