import React from 'react'
import { Link } from 'react-router-dom'
import './choice.css'
import PopUp2 from './popup2/PopUp2';

export default class Arcane extends React.Component {
    state = {
      seen: false
    };
  
    togglePop = () => {
      this.setState({
        seen: !this.state.seen
      });
    };
  
    render() {
return (
  <div className='choice_main'>
      <div className="choice_container">
          <h1 className="c_title">
              Select your choice
          </h1>
          <div className="choice_s">
             
              <div className="c1" onClick={this.togglePop}>
                  Solo Adventure
              </div>
              
              <Link to='/arcane-quest/booking' className='c_link'>
              <div className="c2">
                  Group of Friends
              </div>
              </Link>
              <Link to='/arcane-quest/booking' className='c_link'>
              <div className="c3">
                  Family
              </div>
              </Link>
              <Link to='/arcane-quest/booking' className='c_link'>
              <div className="c4">
                  Office Team
              </div>
              </Link>
          </div>
      </div>
      {this.state.seen ? <PopUp2 toggle={this.togglePop} className="pop"/> : null}
  </div>
);
}
}