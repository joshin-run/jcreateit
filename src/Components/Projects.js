import React, { Component } from 'react';
import projEdison from '../images/projects/edison.jpg'
import projWhiteVision from '../images/projects/whiteVision.jpg'
import projCSSGrid from '../images/projects/css-grid-presentation.jpg'
import projFlowState from '../images/projects/FlowState.jpg'

class Projects extends Component {
  render() {
    return (
      <div id="projects-wrapper" className="projects-wrapper">
        <div className="thumb-6">
          <a href=" https://joshin-run.github.io/edison-tribute/" target="_blank"><img className="thumbnails image" src={projEdison} alt="Thomas Edison" /></a>
        </div>
        <div className="thumb-2">
          <a href="https://joshin-run.github.io/white-vision/" target="_blank"><img className="thumbnails" src={projWhiteVision} alt="White Vision" /></a>
        </div>
        <div className="thumb-4">
          <a href="https://joshin-run.github.io/fcc-css-grid/" target="_blank"><img className="thumbnails" src={projCSSGrid} alt="CSS Grid Meetup Presentation" /></a>
        </div>
        <div className="thumb-8">
          <a href="https://joshin-run.github.io/flowstate-v" target="_blank"><img className="thumbnails" src={projFlowState} alt="FlowState" /></a>
        </div>
      </div>
    );
  }
}

export default Projects;
