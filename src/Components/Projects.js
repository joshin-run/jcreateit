import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div id="projects-wrapper" className="projects-wrapper background-projects">
        <div class="thumb-6">
          <a href=" https://joshin-run.github.io/edison-tribute/" target="_blank"><img class="thumbnails image" src="./assets/img/project-thumbnails/cards300/edison.jpg" alt="Thomas Edison" /></a>
        </div>
        <div class="thumb-2">
          <a href="https://joshin-run.github.io/white-vision/" target="_blank"><img class="thumbnails" src="./assets/img/project-thumbnails/cards300/whiteVision.jpg" alt="White Vision" /></a>
        </div>
        <div class="thumb-4">
          <a href="https://joshin-run.github.io/fcc-css-grid/" target="_blank"><img class="thumbnails" src="./assets/img/project-thumbnails/cards300/css-grid-presentation.jpg" alt="CSS Grid Meetup Presentation" /></a>
        </div>
        <div class="thumb-8">
          <a href="https://joshin-run.github.io/flowstate-v" target="_blank"><img class="thumbnails" src="./assets/img/project-thumbnails/cards300/FlowState.jpg" alt="FlowState" /></a>
        </div>
      </div>
    );
  }
}

export default Projects;
