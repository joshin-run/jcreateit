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
          <p className="personal_projects_header-sub">From creative ideas to client driven projects.</p>
        </div>
        <div className="personal_projects_services_container">
          <div className="personal_projects_service">
            <a href="https://joshin-run.github.io/flowstate-v/"><img className="personal_projects-img"  src={projFlowState} alt="jh-logo" /></a>
            <div className="personal_projects_services_content">
            <p className="tech-stack all-caps">UX/UI, HTML, CSS, JavaScript, D3.js</p>
              <p>Flow State is an application that presents flow logs in an intuitive and elegant manner so that insights and information from a large body of data can be quickly assimilated.</p>
            </div>
          </div>
          <div className="personal_projects_service">
            <a href="https://joshin-run.github.io/white-vision/"><img className="personal_projects-img"  src={projWhiteVision} alt="jh-logo" /></a>
            <div className="personal_projects_services_content">
            <p className="tech-stack all-caps">UX/UI, HTML, CSS</p>
              <p>White Vision is a static website design to provoke the user into throughful reflection through images and text. And because people are worth inspiring.</p>
            </div>
          </div>
          <div>
            <div className="personal_projects_service">
              <a href="https://joshin-run.github.io/edison-tribute/"><img className="personal_projects-img"  src={projEdison} alt="jh-logo" /></a>
              <div className="personal_projects_services_content">
                <p className="tech-stack all-caps">UX/UI, HTML, CSS</p>
                <p>A Tribute to Edison: the man, the inventor, the asker of questions, the believer, the chaser of dreams, the scientist, the chemist, the thinker, the man who chased light...and found it. He changed the world. His team. His vision. His destiny.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Portfolio;
