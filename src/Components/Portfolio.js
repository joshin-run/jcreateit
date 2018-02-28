import React, { Component } from 'react';
import projFlowState from '../images/projects/FlowState.jpg'
import projWhiteVision from '../images/projects/whiteVision.jpg'
import projEdison from '../images/projects/edison.jpg'


class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio" className="personal_projects_container">

        <div className="personal_projects_header_container">
          <p className="personal_projects_header">Portfolio Work</p>
          <p className="personal_projects_header-sub">From client driven projects to creative ideas.</p>
        </div>
        <div className="personal_projects_services_container">
          <div className="personal_projects_service">
            <img className="personal_projects-img"  src={projFlowState} alt="jh-logo" />
          </div>
          <div className="personal_projects_service">
            <img className="personal_projects-img"  src={projWhiteVision} alt="jh-logo" />
          </div>
          <div>
            <div className="personal_projects_service">
              <img className="personal_projects-img"  src={projEdison} alt="jh-logo" />
            </div>
          </div>
        </div>
        <div id="project-grid" className="">
          
        </div>

      </div>
    );
  }
}

export default Portfolio;
