import React from "react";
import "./contact.css";
import logo from "./../../assets/image/ierrc-logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="main_contact" id="contact">
      <div className="cleft">
        <table className="contact">
          <tr>
            <td>
              <BsFillTelephoneFill size={30} />
            </td>
            <td>+977-9818274300, +977-9823378032</td>
          </tr>
          <tr>
            <td>
              <GrMail size={30} />
            </td>
            <td onClick={() => window.location = 'mailto:ierrcentre@gmail.com'} className="mail_btn">ierrcentre@gmail.com  </td>
          </tr>
          <tr>
            <td>
              <MdLocationPin size={30} />
            </td>
            <td> Mahadevsthan Marg, Kathamndu, Nepal</td>
          </tr>
        </table>
      </div>
      <div className="ccenter">
        <img src={logo} alt="" className="lo" />
      </div>
      <div className="cright">
          
       <a href="https://www.instagram.com/ierrc_2018/">
           <AiFillInstagram size={30} className="icons_con" />
           </a> 
        <a href="https://www.facebook.com/ierrcentre2019/">
            <AiFillFacebook size={30} className="icons_con" />
            </a>
        <a href="https://www.tiktok.com/@ierrcentre">
            <FaTiktok size={30} className="icons_con" />
            </a>
      </div>
    </div>
  );
};

export default Contact;
