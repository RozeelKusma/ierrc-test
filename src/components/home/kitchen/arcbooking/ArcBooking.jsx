import React from "react";
import { Link } from "react-router-dom";
import "./arcbooking.css";

const ArcBooking = () => {
  return (
    <div className="booking_main">
      <div className="booking_content">
        <div className="booking_title">Which menu do you want to cook???</div>
        <div className="booking_forms">
        <Link to="/arcane-quest/booking/wednesday-menu" className="booking_link">
          <div className="wed">
            <div className="wed_left">
              <img
                src="https://shikharsamachar.com/wp-content/uploads/2020/03/maxresdefault-2.jpg"
                alt=""
                className="wed_img"
              />
            </div>
            <div className="wed_right">
              Nepalese Traditional food for Wednesday.
            </div>
          </div>
        </Link>
        <Link to="/arcane-quest/booking/friday-menu" className="booking_link">
          <div className="fri">
            <div className="wed_left">
              <img
                src="https://dummyimage.com/lrgrec"
                alt=""
                className="wed_img"
              />
            </div>
            <div className="wed_right">Friday Menu</div>
          </div>
        </Link>
        <Link to="/arcane-quest/booking/sunday-menu" className="booking_link">
          <div className="sun">
            <div className="wed_left">
              <img
                src="https://dummyimage.com/lrgrec"
                alt=""
                className="wed_img"
              />
            </div>
            <div className="wed_right">Sunday Menu</div>
          </div>
        </Link>
                </div>
      </div>
    </div>
  );
};

export default ArcBooking;
