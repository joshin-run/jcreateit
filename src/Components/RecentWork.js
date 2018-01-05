import React, { Component } from 'react';
import cryptoElevationHome from '../images/recent-work/crypto-elevation/crypto-elevation-home.jpg'
import upssHome from '../images/recent-work/utah-plastic-surgery-society/utah-plastic-surgery-society-home.jpg'

class Projects extends Component {
  render() {
    return (
      <div id="recent_work">
        <div className="recent_work_container">
          <div className="recent_work_header_container">
            <p className="recent_work_header">Recent Work</p>
          </div>


          <div className="recent_work_services_container item-1">

            <div className="recent_work_service">
              <img className="recent_work_img" src={cryptoElevationHome} alt="Crypto Elevation Home Page" />
            </div>

            <div className="recent_work_service">
              <div className="recent_work_services_content">
                <p className="content-header align mobile-width">Crypto Elevation</p>
                <p className="tech-stack all-caps align mobile-width">UX/UI Design, Sass, JavaScript Development</p>
                <p className="recent_work_main_content align mobile-width">Crypto Elevation is a Global Cryptocurrency Opportunity that helps people all around the world create wealth, help others create wealth, and give back to our Choice Humanitarian cause.</p>
              </div>
            </div>

          </div>

          <div className="divider"></div>

          <div className="recent_work_services_container item-2">

            <div className="recent_work_service">
              <img className="recent_work_img" src={upssHome} alt="Utah Plastic Surgery Society Home Page" />
            </div>

            <div className="recent_work_service">
              <div className="recent_work_services_content">
                <p className="content-header align">Utah Plastic Surgery Society</p>
                <p className="tech-stack all-caps align">UX/UI Design, SASS, JavaScript, ReactJS Development</p>
                <p className="recent_work_main_content align">The Utah Plastic Surgery Society is an organization that encourages the highest possible standards in the field of plastic surgery, provides trustworthy information to prospective patients, and protects the public from irresponsible and unqualified practitioners.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
