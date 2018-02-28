import React, { Component } from 'react';
import projFlowState from '../images/projects/FlowState.jpg'
import projWhiteVision from '../images/projects/whiteVision.jpg'
import projEdison from '../images/projects/edison.jpg'
import apio from '../images/cards/apio-card-img2.png'
import unboxt from '../images/cards/unboxt-card-img-dark.png'
import crypto from '../images/cards/crypto_elevation-card-img.png'


class Portfolio extends Component {
  render() {
    return (
      <div id="portfolio" className="personal_projects_container">

        <div className="personal_projects_header_container">
          <p className="personal_projects_header">Portfolio Work</p>
          <p className="personal_projects_header-sub">From creative ideas to client driven projects.</p>
        </div>
        <div className="card-wrapper">


          <div className="card">
            <img className="card-img" src={apio} alt="Card image cap" />
            <div className="card-container">
              <div className="card-content-wrapper">
                <p className="card-header all-caps">Who they are</p>
                <p className="card-content who-content">APiO is a Utah based FinTech company that leverages Big Data, Blockchain, AI and Machine Learning. They have transformed how capital is accessed and invested.</p>
                <p className="card-header all-caps">What I did</p>
                <p className="card-content">Created multiple mockups based on user stories and other provided graphics. <span>Stack: Adobe Photoshop, Illustrator, and Xd.</span></p>
              </div>
            </div>
          </div>

          <div className="card">
            <div id="unboxt">
              <img className="card-img unboxt-img" src={unboxt} alt="Card image cap" />
            </div>
            <div className="card-container">
              <div className="card-content-wrapper">
                <p className="card-header all-caps">Who they are</p>
                <p className="card-content who-content">Unboxt is a company endeavoring to connect the job seeker to businesses all around the world.</p>
                <p className="card-header all-caps">What I did</p>
                <p className="card-content">Created mockup designs from wireframes and improved upon an already visually appealing website. <span>Stack: Photoshop, Illustrator, Xd.</span></p>
              </div>
            </div>
          </div>

          <div className="card">
            <div id="unboxt">
              <img className="card-img unboxt-img" src={crypto} alt="Card image cap" />
            </div>
            <div className="card-container">
              <div className="card-content-wrapper">
                <p className="card-header all-caps">Who they are</p>
                <p className="card-content who-content">Crypto Elevation is a Global Cryptocurrency Opportunity that helps people all around the world create wealth and give back.</p>
                <p className="card-header all-caps">What I did</p>
                <p className="card-content what-content">Added several sections and pages to their site. Created uniformity in subpages with modern design. <span>Stack: HTML5, CSS3, Sass, JavaScript, Photoshop, Illustrator, and Xd.</span></p>
              </div>

              <div className="view-project-link-container">
                <a href="https://www.behance.net/gallery/62567607/Crypto-Elevation">
                  <p className="view-project-link all-caps">View Project ➔</p>
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default Portfolio;
