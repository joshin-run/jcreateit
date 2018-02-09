import React, { Component } from 'react';
import cryptoElevationHome from '../images/recent-work/crypto-elevation/crypto-elevation-home.jpg'
import upssHome from '../images/recent-work/utah-plastic-surgery-society/utah-plastic-surgery-society-home.jpg'
import strongBod from '../images/recent-work/StrongBod/strongBod.png'
import unboxt from '../images/recent-work/Unboxt/unboxt.png'

class About extends Component {
  render() {
    return (
      <div id="about" className="about-wrapper">
        <div className="about_container">


          <div className="about_header_container">
            <p className="about_header">About</p>
            <p className="about_header-sub">A little about me.</p>
          </div>

          <div className="recent_work_services_container item-1">

            <div className="recent_work_service crypto-img">
              <img className="recent_work_img" src={cryptoElevationHome} alt="Crypto Elevation Home Page" />
            </div>

            <div className="recent_work_service crypto-content">
              <div className="recent_work_services_content">
                <p className="content-header align mobile-width">Crypto Elevation</p>
                <p className="tech-stack all-caps align mobile-width">UX/UI Design, Sass, JavaScript Development</p>
                <p className="recent_work_main_content align mobile-width">Crypto Elevation is a Global Cryptocurrency Opportunity that helps people all around the world create wealth, help others create wealth, and give back to our Choice Humanitarian cause.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default About;
