import React from 'react'
import './arcane.css'
import kitchen from './../../../assets/image/kitchen.jpg'
import { AiFillQuestionCircle } from 'react-icons/ai'
import PopUp from './popup/PopUp'

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
    <div className='main_arcane'>
        <div className="a_con">
            <div className="a_left" onClick={this.togglePop}>
                <img src="https://static.wixstatic.com/media/ccd558_ed6889a4c1ed4f7a9fdd32336105eb3d~mv2.png/v1/fill/w_77,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dragon-fruit-removebg-preview.png" alt="" className="a_logo" />
                <h1 className="a_title">ARCANE QUEST</h1>
                <p className="a_info">An insightful evening filled with culinary abstract</p>
                <p className="rm4">Read more &gt;</p>
                <AiFillQuestionCircle size={30} title="Enquiry" className='enq'/>
            
                
                </div>
            <div className="a_right">
                <img src={kitchen} alt="" className="a_img" />
            </div>
        </div>
            {this.state.seen ? <PopUp toggle={this.togglePop} className="pop"/> : null}
    </div>
  );
}
}