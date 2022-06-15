import React, { Component } from "react";
import { Link } from "react-router-dom";
import './popup2.css'
export default class PopUp extends Component {
    handleClick = () => {
      this.props.toggle();
    };
  
    render() {
      return (
        <div className="pp2_main">
          <div className="pp2_content">
            <p>
                Solo Adventure seems boring.. Are you sure to continue???
            </p>
            <span className="close2" onClick={this.handleClick}>
              &times;
            </span>
            <div className="pp2_contents">
              <Link to='/arcane-quest/booking' className="arc_link">
            <div className="yes">
              Yes
            </div>
              </Link>
              
            <div className="no" onClick={this.handleClick}>
  
              Nahh
            </div>
              
            </div>
          </div>
        </div>
      );
    }
  }