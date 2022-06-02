import React, { Component } from "react";
import { Link } from "react-router-dom";
import './popup.css'

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          Where to???
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <div className="contentss">
            <Link to='/arcane-quest/info' className="arc_link">
          <div className="inform">
            Information
          </div>
            </Link>
            <Link to='/arcane-quest/booking' className='arc_link'>
          <div className="booking">

            Booking
          </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}