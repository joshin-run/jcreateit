import React, { Component } from 'react';
// import logo from '../images/biz-logos/jcreateit-jcube-blue-darker.svg'
import visionImg from '../images/whatwedo/vision-226x144-word-min.jpg'
import designImg from '../images/whatwedo/orange-mockup-light-226x144-word-lower-min.jpg'
import codeImg from '../images/whatwedo/codeIDE-226x144-word-lower-36-min.jpg'


class WhatWeDo extends Component {
  render() {
    return (
      <div id="what-we-do" className="wwd_container">
        <div className="wwd_header_container">
          <p className="wwd_header">What We Do</p>
          <p className="wwd_header-sub">From UX Design to Web Development</p>
          </div>
        <div className="wwd_services_container">
        <div className="wwd_service">
          <img className="wwd-img"  src={visionImg} alt="jh-logo" />
          <div className="wwd_services_content">
            <p>We engage stakeholders in a strategic meeting to define the product's context for existance, the problems it will solve, and determine key performance indicators. Through research and analysis we build user journeys and prepare to create well informed designs.</p>
          </div>
        </div>
          <div className="wwd_service">
            <img className="wwd-img"  src={designImg} alt="jh-logo" />
            <div className="wwd_services_content">
              <p>We sketch, wireframe, mockup, and prototype concepts throughout the design process. With tight collaboration along the way, we put the product in user hands as often as possible. The foundation of the UX design groundwork employed earlier guides the design process to a unified outcome.</p>
            </div>
          </div>
          <div className="wwd_service">
            <img className="wwd-img"  src={codeImg} alt="jh-logo" />
            <div className="wwd_services_content">
              <p>We impliment modern and responsive designs with both web and mobile end users in mind. Whether we use WordPress or create the application from the ground up, the outcome will be a product that will focus on creating a great user experience with focused results.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
