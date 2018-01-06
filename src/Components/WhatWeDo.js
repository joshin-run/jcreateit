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
          <p className="wwd_header">What I Do</p>
          <p className="wwd_header-sub">Front-end Web Design and Development</p>
        </div>
        <div className="wwd_services_container">
        <div className="wwd_service">
          <img className="wwd-img"  src={visionImg} alt="jh-logo" />
          <div className="wwd_services_content">
            <p>Collaborate with clients to define the initial vision and project outcomes and hone in what's most important during the design process.</p>
          </div>
        </div>
          <div className="wwd_service">
            <img className="wwd-img"  src={designImg} alt="jh-logo" />
            <div className="wwd_services_content">
              <p>Create mockups and wireframes that turn client ideas into solid design plans that empower the brand backed by UX/UI guiding principles.</p>
            </div>
          </div>
          <div className="wwd_service">
            <img className="wwd-img"  src={codeImg} alt="jh-logo" />
            <div className="wwd_services_content">
              <p>Impliment modern and responsive designs and code a well thought out concept with the mobile end user in mind creating unforgetable user experiences.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
