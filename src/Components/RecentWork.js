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
      <div id="recent-work" className="recent_work-wrapper">
        <div className="recent_work_container">
          <div className="recent_work_header_container">
            <p className="recent_work_header">Recent Work</p>
          </div>


          <div className="recent_work_services_container line-bottom">

            <div className="recent_work_service">
              <div className="recent_work_services_content">
                <p className="content-header text-left">Crypto Elevation</p>
                <p className="tech-stack all-caps text-left">UX/UI Design, Elixir/Phoenix Development</p>
                <p className="recent_work_main_content text-left">Crypto Elevation is a Global Cryptocurrency Opportunity that helps people all around the world create wealth, help others create wealth, and give back to our Choice Humanitarian cause.</p>
              </div>
            </div>

            <div className="recent_work_service">
              <img className="recent_work_img" src={cryptoElevationHome} alt="jh-logo" />
            </div>

          </div>

          <div class="line"></div>

          <div className="recent_work_services_container">

            <div className="recent_work_service">
              <img className="recent_work_img" src={upssHome} alt="jh-logo" />
            </div>

            <div className="recent_work_service">
              <div className="recent_work_services_content">
                <p className="content-header">Utah Plastic Surgery Society</p>
                <p>UPSS is a...</p>
              </div>
            </div>

          </div>


        </div>
      </div>
    );
  }
}

export default Projects;
