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
      <div className="dingla">
        <h1 className="dingla_title">
          About Dingla
        </h1>
      Dingla is our project location in the eastern part of Nepal, on the rim of the Arun Valley. The Arun valley is rich in history, with Sir Edmund Hillary, the first successful climber to Mount Everest, exploring this route to the summit.
Sadananda, a pioneer in many fields such as Sanskrit education and the abolition of social evils such as slavery, Satipratha (immolation of wives on their deceased husband's pyre).
Yogmaya, a woman revolutionary who, along with 67 followers, sacrificed themselves (took Jalsamadhi) in defiance of patriarchal dominance.
Dingla is a multilingual, multi-cultural, and multi-religious community where visitors can participate in a variety of festivals and cultural activities.
      </div>
    </div>
  );
};

export default GreenAfter;
