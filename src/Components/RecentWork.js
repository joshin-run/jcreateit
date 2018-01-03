import React, { Component } from 'react';
import cryptoElevationHome from '../images/recent-work/crypto-elevation/crypto-elevation-home.jpg'
import upssHome from '../images/recent-work/utah-plastic-surgery-society/utah-plastic-surgery-society-home.jpg'
// import projEdison from '../images/projects/edison.jpg'
// import projWhiteVision from '../images/projects/whiteVision.jpg'
// import projCSSGrid from '../images/projects/css-grid-presentation.jpg'
// import projFlowState from '../images/projects/FlowState.jpg'

class Projects extends Component {
  render() {
    return (
      <div id="recent_work">
        <div className="recent_work_container">
          <div className="recent_work_header_container">
            <p className="recent_work_header">Recent Work</p>
          </div>


          <div className="recent_work_services_container item-1 line-bottom">

            <div className="recent_work_service">
              <div className="recent_work_services_content">
                <p className="content-header text-left">Crypto Elevation</p>
                <p className="tech-stack all-caps text-left">UX/UI Design, JavaScript, Elixir/Phoenix Development</p>
                <p className="recent_work_main_content text-left">Crypto Elevation is a Global Cryptocurrency Opportunity that helps people all around the world create wealth, help others create wealth, and give back to our Choice Humanitarian cause.</p>
              </div>
            </div>

            <div className="recent_work_service">
              <img className="recent_work_img" src={cryptoElevationHome} alt="Crypto Elevation Home Page" />
            </div>

          </div>


          <div className="recent_work_services_container item-2">

            <div className="recent_work_service">
              <img className="recent_work_img" src={upssHome} alt="Utah Plastic Surgery Society Home Page" />
            </div>

            <div className="recent_work_service">
              <div className="recent_work_services_content">
                <p className="content-header text-left">Utah Plastic Surgery Society</p>
                <p className="tech-stack all-caps text-left">UX/UI Design, SASS, JavaScript, ReactJS Development</p>
                <p className="recent_work_main_content text-left">The Utah Plastic Surgery Society is an organization that encourages the highest possible standards in the field of plastic surgery, provides trustworthy information to prospective patients, and protects the public from irresponsible and unqualified practitioners.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
