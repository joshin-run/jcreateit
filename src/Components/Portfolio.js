import React, { Component } from 'react';
import projFlowState from '../images/projects/FlowState.jpg'
import projWhiteVision from '../images/projects/whiteVision.jpg'
import projEdison from '../images/projects/edison.jpg'
import apio from '../images/cards/apio-card-img.png'
import unboxt from '../images/cards/unboxt-card-img.png'
import crypto from '../images/cards/cryptoElevation-card-img.png'


class Portfolio extends Component {
  render() {
    return (
      <div id="projects" className="personal_projects_container">

        <div className="personal_projects_header_container">
          <p className="personal_projects_header">Project Work</p>
          <p className="personal_projects_header-sub">From creative ideas to client driven projects.</p>
        </div>
        <div className="card-wrapper">

          <div className="card">
            <img className="card-img" src={apio} alt="Card image cap" />
            <div className="card-container">
              <div className="card-content-wrapper">
                <p className="card-content-stack">UX/UI Design, Adobe Photoshop, Illustrator, XD, Webflow, Logo Design</p>
                <p className="card-content">APiO is a Utah based FinTech company that leverages Big Data, Blockchain, AI and Machine Learning to transform how capital is accessed and invested. I created mockups based on user stories and other provided graphics.</p>
                <div className="no-view-project-button"></div>
              </div>
            </div>
          </div>

          <div className="card">
            <img className="card-img" src={unboxt} alt="Card image cap" />
            <div className="card-container">
              <div className="card-content-wrapper">
                <p className="card-content-stack">UX/UI Design, Adobe Photoshop, Illustrator, XD, Logo Design</p>
                <p className="card-content">Unboxt is a company endeavoring to connect the job seeker to businesses around the world. I created mockup designs from wireframes representing dashboards and profile pages and improved upon their landing page.</p>
                <div className="no-view-project-button"></div>
              </div>
            </div>
          </div>


          <div className="card">
            <img className="card-img" src={crypto} alt="Card image cap" />
            <div className="card-container">
              <div className="card-content-wrapper">
                <p className="card-content-stack">HTML5, CSS3, Sass, JavaScript, Elixir, Phoenix Adobe Photoshop, Illustrator, and XD.</p>
                <p className="card-content">Crypto Elevation is a Global Cryptocurrency organization that helps people all around the world create wealth and give back. I added several sections and pages to their site and created uniformity in with modern design.</p>
                <a className="flex-center" href="https://www.behance.net/gallery/62567607/Crypto-Elevation">
                  <p className="view-project-proj-link">View Project ➔</p>
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

/**** Cards ****//**

<div className="card">
  <img className="card-img" src={apio} alt="Card image cap" />
  <div className="view-project-link-container-top">
    <a href="https://www.behance.net/gallery/62567607/Crypto-Elevation">
    <p className="view-project-link-top all-caps">View Project ➔</p>
  </a>
  </div>
  <div className="card-container">
    <div className="card-content-wrapper">

      <p className="card-content who-content">APiO is a Utah based FinTech company that leverages Big Data, Blockchain, AI and Machine Learning to transform how capital is accessed and invested.</p>

      <p className="card-content">I created multiple mockups based on user stories and other provided graphics. I created multiple mockups based on user stories and other provided graphics. I created multiple mockups based on user stories and other provided graphics. I created multiple mockups based on user <span>Stack: Adobe Photoshop, Illustrator, and XD. </span></p>
    </div>
  </div>
</div>



<div className="card">
  <img className="card-img" src={apio} alt="Card image cap" />

  <div className="card-container">
    <div className="card-content-wrapper">
      <p className="card-content who-content">APiO is a Utah based FinTech company that leverages Big Data, Blockchain, AI and Machine Learning to transform how capital is accessed and invested.</p>
      <p className="card-content">I created multiple mockups based on user stories and other provided graphics. I created multiple mockups based on user stories and other provided graphics.  <span>Stack: Adobe Photoshop, Illustrator, and XD. </span></p>
    </div>
    <div className="view-project-link-container">
      <a href="https://www.behance.net/gallery/62567607/Crypto-Elevation">
        <p className="view-project-link all-caps">View Project ➔</p>
      </a>
    </div>
  </div>
</div>

<div className="card">
  <img className="card-img2" src={apio} alt="Card image cap" />

  <div className="card-container">
    <div className="card-content-wrapper">
      <p className="card-content who-content">APiO is a Utah based FinTech company that leverages Big Data, Blockchain, AI and Machine Learning to transform how capital is accessed and invested.</p>
      <p className="card-content">I created multiple mockups based on user stories and other provided graphics. I created multiple mockups based on user stories and other provided graphics.  <span>Stack: Adobe Photoshop, Illustrator, and XD. </span></p>
    </div>
    <div className="view-project-link-container">
      <a href="https://www.behance.net/gallery/62567607/Crypto-Elevation">
        <p className="view-project-link all-caps">View Project ➔</p>
      </a>
    </div>
  </div>
</div>







<div className="card">
  <div id="unboxt">
    <img className="card-img unboxt-img" src={unboxt} alt="Card image cap" />
  </div>
  <div className="view-project-link-container-top">
    <a href="https://www.behance.net/gallery/62567607/Crypto-Elevation">
    <p className="view-project-link-top all-caps">View Project ➔</p>
  </a>
  </div>
  <div className="card-container">
    <div className="card-content-wrapper">
      <p className="card-content who-content">Unboxt is a company endeavoring to connect the job seeker to businesses all around the world.</p>
      <p className="card-content">I created mockup designs from wireframes representing dashboards and profile pages and improved upon their landing page. I created mockup designs from wireframes representing dashboards and profile pages and improved upon their landing page.I created mockup designs from wireframes representing <span>Stack: Photoshop, Illustrator, XD.</span></p>
    </div>
  </div>
</div>







<div className="card">
  <div id="unboxt">
    <img className="card-img unboxt-img" src={crypto} alt="Card image cap" />
  </div>
  <div className="card-container">
    <div className="card-content-wrapper">
      <p className="card-content who-content">Crypto Elevation is a Global Cryptocurrency Opportunity that helps people all around the world create wealth and give back.</p>
      <p className="card-content what-content">I added several sections and pages to their site and created uniformity in with modern design. I added several <span>Stack: HTML5, CSS3, Sass, JavaScript, Photoshop, Illustrator, and XD.</span></p>
    </div>

    <div className="view-project-link-container">
      <a href="https://www.behance.net/gallery/62567607/Crypto-Elevation">
        <p className="view-project-link all-caps">View Project ➔</p>
      </a>
    </div>
  </div>
</div>

**//**** End ****/



// <div className="card">
//   <div id="unboxt">
//     <img className="card-img unboxt-img" src={crypto} alt="Card image cap" />
//   </div>
//   <div className="card-container">
//     <div className="card-content-wrapper">
//       {/*<p className="card-header all-caps">Who they are</p>*/}
//       <p className="card-content who-content">Crypto Elevation is a Global Cryptocurrency Opportunity that helps people all around the world create wealth and give back.</p>
//         {/*<p className="card-header all-caps">What I did</p>*/}
//       <p className="card-content what-content">I added several sections and pages to their site and created uniformity in with modern design. <span>Stack: HTML5, CSS3, Sass, JavaScript, Photoshop, Illustrator, and XD.</span></p>
//       <a href="https://www.behance.net/gallery/62567607/Crypto-Elevation">
//       <div className="view-project-link-right-container">
//         <p className="view-project-link-right">View Project ➔</p>
//       </div>
//       </a>
//     </div>
//
//   </div>
// </div>
//
// <div className="card">
//   <div id="unboxt">
//     <img className="card-img unboxt-img" src={unboxt} alt="Card image cap" />
//   </div>
//   <div className="view-project-link-container-top">
//     <a href="https://www.behance.net/gallery/62567607/Crypto-Elevation">
//     <p className="view-project-link-top all-caps">View Project ➔</p>
//   </a>
//   </div>
//   <div className="card-container">
//     <div className="card-content-wrapper">
//       <p className="card-content who-content">Unboxt is a company endeavoring to connect the job seeker to businesses all around the world.</p>
//       <p className="card-content">I created mockup designs from wireframes representing dashboards and profile pages and improved upon their landing page. I created mockup designs from wireframes representing dashboards and profile pages and improved upon their landing page.I created mockup designs from wireframes representing <span>Stack: Photoshop, Illustrator, XD.</span></p>
//     </div>
//   </div>
// </div>

/*

          <div className="card">
            <div id="unboxt">
              <img className="card-img unboxt-img" src={crypto} alt="Card image cap" />
            </div>
            <div className="card-container">
              <div className="card-content-wrapper">
                <p className="card-content who-content">Crypto Elevation is a Global Cryptocurrency Opportunity that helps people all around the world create wealth and give back.</p>
                <p className="card-content what-content">I added several sections and pages to their site and created uniformity in with modern design. I added several <span>Stack: HTML5, CSS3, Sass, JavaScript, Photoshop, Illustrator, and XD.</span></p>
              </div>

              <div className="view-project-link-container">
                <a href="https://www.behance.net/gallery/62567607/Crypto-Elevation">
                  <p className="view-project-link all-caps">View Project ➔</p>
                </a>
              </div>
            </div>
          </div>
*/
