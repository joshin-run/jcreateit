import React, { Component } from 'react';
import projWhiteVision from '../images/projects/whiteVision.jpg'
import projFlowState from '../images/projects/FlowState.jpg'


class WhatWeDo extends Component {
  render() {
    return (
      <div id="personal_projects" className="personal_projects_container">
        <div className="personal_projects_header_container">
          <p className="personal_projects_header">Personal Projects</p>
          <p className="personal_projects_header-sub">Ideas, Interests and Experiments</p>
        </div>
        <div className="personal_projects_services_container">
        <div className="personal_projects_service">
          <img className="personal_projects-img"  src={projFlowState} alt="jh-logo" />
          <div className="personal_projects_services_content">
            <p>lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom </p>
          </div>
        </div>
          <div className="personal_projects_service">
            <img className="personal_projects-img"  src={projWhiteVision} alt="jh-logo" />
            <div className="personal_projects_services_content">
              <p>lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom lorem ipsom </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
