import React, { Component } from 'react';
import cryptoElevationHome from '../images/recent-work/crypto-elevation/crypto-elevation-home.jpg'
import upssHome from '../images/recent-work/utah-plastic-surgery-society/utah-plastic-surgery-society-home.jpg'
import strongBod from '../images/recent-work/StrongBod/strongBod.png'
import unboxt from '../images/recent-work/Unboxt/unboxt.png'

class Projects extends Component {
  render() {
    return (
      <div id="featured_work">
        <div className="recent_work_container">
          <div className="recent_work_header_container">
            <p className="recent_work_header">Featured Work</p>
            <p className="recent_work_header-sub">Here's some of my best work yet.</p>
          </div>




          <div className="recent_work_services_container item-1">

            <div className="recent_work_service crypto-img">
              <a href="https://www.behance.net/gallery/62567607/Crypto-Elevation"><img className="recent_work_img" src={cryptoElevationHome} alt="Crypto Elevation Home Page" /></a>
            </div>

            <div className="recent_work_service crypto-content">
              <div className="recent_work_services_content">
                <p className="content-header align mobile-width">Crypto Elevation</p>
                <p className="tech-stack all-caps align mobile-width">UX/UI Design, Sass, JavaScript Development</p>
                <p className="recent_work_main_content align mobile-width">Crypto Elevation is a Global Cryptocurrency Opportunity that helps people all around the world create wealth, help others create wealth, and give back to our Choice Humanitarian cause.</p>
              </div>
              <a href="https://www.behance.net/gallery/62567607/Crypto-Elevation"><button className="button filled">VIEW PROJECT</button></a>
            </div>

          </div>




          <div className="divider"></div>

          <div className="recent_work_services_container item-2">

            <div className="recent_work_service upss-img">
              <a href="https://www.behance.net/gallery/62594949/Utah-Plastic-Surgery-Society"><img className="recent_work_img" src={upssHome} alt="Utah Plastic Surgery Society Home Page" /></a>
            </div>

            <div className="recent_work_service upss-content">
              <div className="recent_work_services_content">
                <p className="content-header align">Utah Plastic Surgery Society</p>
                <p className="tech-stack all-caps align">UX/UI Design, SASS, JavaScript, ReactJS Development</p>
                <p className="recent_work_main_content align">The Utah Plastic Surgery Society is an organization that encourages the highest possible standards in the field of plastic surgery, provides trustworthy information to prospective patients, and protects the public from irresponsible and unqualified practitioners.</p>
              </div>
              <a href="https://www.behance.net/gallery/62594949/Utah-Plastic-Surgery-Society"><button className="button filled">VIEW PROJECT</button></a>
            </div>

          </div>






          <div className="divider"></div>

          <div className="recent_work_services_container item-1 item-3">

            <div className="recent_work_service crypto-img">
              <a href="https://www.behance.net/gallery/62564293/StrongBod"><img className="recent_work_img" src={strongBod} alt="StrongBod" /></a>
            </div>

            <div className="recent_work_service crypto-content">
              <div className="recent_work_services_content">
                <p className="content-header align mobile-width">StrongBod</p>
                <p className="tech-stack all-caps align mobile-width">Graphic Design, Photoshop, Illustrator, XD</p>
                <p className="recent_work_main_content align mobile-width">StrongBod was a project I particularly enjoyed. Their goal was to present their product idea before actually building the app. I created a slide deck that far exceeded their expectations with nine custom mockups of mobile app screens, meaningful image use, and a design flow based consistant with presentational topics.</p>
              </div>
              <a href="https://www.behance.net/gallery/62564293/StrongBod"><button className="button filled">VIEW PROJECT</button></a>
            </div>

          </div>







          <div className="divider"></div>

          <div className="recent_work_services_container item-2">

            <div className="recent_work_service upss-img">
              <img className="recent_work_img" src={unboxt} alt="Unboxt Logo" />
            </div>

            <div className="recent_work_service upss-content">
              <div className="recent_work_services_content">
                <p className="content-header align">MyCabinet / Unboxt</p>
                <p className="tech-stack all-caps align">UX/UI Design, Consulting, Photoshop, Illustrator, XD</p>
                <p className="recent_work_main_content align">MyCabinet is currently developing a new product called Unboxt. My role was to create mockups from wireframes. I considered how the user would expect each page and link to follow their thought process. I designed several pages including mobile views.</p>
              </div>
            </div>

          </div>






        </div>
      </div>
    );
  }
}

export default Projects;
