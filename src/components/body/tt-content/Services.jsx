import React from "react";
import "./services.css";
import primg from "./../../../assets/image/primary.webp";
import teachers from "./../../../assets/image/teachers.webp";
import c1 from "./../../../assets/image/c1.webp";
import c2 from "./../../../assets/image/c2.webp";
import {HiDownload} from 'react-icons/hi'

const Services = () => {
  return (
    <div className="services_main">
      <div className="s_top">
        <p className="s_heading">Our Services</p>
        <div className="olay" />
      </div>
      <div className="s_mid">
        <div className="pr_tt">
          <div className="pr_left">
            <img src={primg} alt="" className="pr_img" />
          </div>
          <div className="pr_right">
            <h1 className="pr_title">
              PROFESSIONAL DEVELOPMENT TRAINING FOR PRIMARY EDUCATORS
            </h1>
            <p className="pr_info">
              To enhance professional development for primary educators, IERRC
            </p>
            <ul className="pr_list">
              <li>
                works with schools to develop and implement English and Nepali
                literacy improvement activities align with the integrated
                curriculum (Grade 1-3) ‘Hamro Serofero’.
              </li>
              <li>
                organizes workshops for the teachers to develop long term
                project based lessons along with relevant materials and mentor
                them regularly within the contract period to implement those
                activities
              </li>
              <li>
                organizes workshops for English teachers to carry out a
                classroom-based Exploratory Action Research for their continuous
                professional development
              </li>
              <li>
                works with interested schools to run workshops for parents on
                ‘good parenting’, support schools to strengthen relationship
                with parents and establish reading culture among children at
                homes and schools.
              </li>
            </ul>
          </div>
        </div>
        <div className="ee">
          <div className="pr_right">
            <h1 className="pr_title">
              PROFESSIONAL DEVELOPMENT TRAINING FOR ENGLISH EDUCATORS
            </h1>
            <p className="pr_info"><b className="masti">MMASTIEE</b> is our mantra that stands for:</p>
            <ul className="ee_list">
              <li><b>M</b> - Mindful engagement</li>
              <li><b>M</b> - Music and meditation</li>
              <li><b>A</b> - Arts</li>
              <li><b>S</b> - Social and spiritual awareness</li>
              <li><b>T</b> - Technology integration in education</li>
              <li><b>I</b> - Inquiry based learning</li>
              <li><b>E</b> - Ecological awareness</li>
              <li><b>E</b> - Entertainment & Food</li>
            </ul>
            <p className="pr_info">It guides us throughout the process of mentoring primary educators to teach English, integrating the language skills into other subject contents.</p>
          </div>
          <div className="pr_left">
            <img src={teachers} alt="" className="pr_img" />
          </div>
        </div>
        <div className="clients">
          <div className="c_top">
            <p className="c_heading">Our Clients</p>
            <div className="olay2" />
          </div>
          <div className="c_items">
            <div className="c_left">
              <img src={c1} alt="" className="c_img1" />
            </div>
            <div className="c_center">
              <h1 className="c_title">HIMALAYAN ENGLISH BOARDING SCHOOL</h1>
              LUKLA
              <p className="c_info">
                IERRC Classroom-Based Training Programme (ICBTP) has been
                implemented in Himalayan English Boarding School, Lukla. Based
                on the agreement made between the two institutions in August,
                2019, IERRC has been running series of workshops and supporting
                primary teachers in developing and implementing a progressive
                curriculum in the school. IERRC team already completed four
                onsite contact sessions. All the contact sessions took place in
                Himalayan English Boarding School, Lukla. Apart from the
                classroom based contact sessions, virtual meetings via Viber,
                Messenger or phone calls were held each fortnight. Curriculum
                topics were discussed during the contact sessions and lesson
                plans were developed or gathered from the centre office in
                Kathmandu.
              </p>
            </div>
            <div className="c_right">
              <img src={c2} alt="" className="c_img2" />
            </div>
          </div>
        </div>
      </div>
      <div className="s_bottom">
        <h1 className="d_head">DOWNLOAD BROCHURE</h1>
        <button className="download_btn"><a href={require('./../../../assets/files/IERRC.pdf')} download='IERRC Brochure 4 FOLDING FINAL CORRECTED' className="d_link">Download <HiDownload size={25}/> </a></button>
      </div>
    </div>
  );
};

export default Services;
