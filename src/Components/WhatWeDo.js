import React, { Component } from 'react';
// import logo from '../images/biz-logos/jcreateit-jcube-blue-darker.svg'
import visionImg from '../images/vision-226x144-word.jpg'
import designImg from '../images/orange-mockup-light-226x144-word-lower.jpg'
import codeImg from '../images/codeIDE-226x144-word-lower-36.jpg'


class WhatWeDo extends Component {
  render() {
    return (
      <div className="wwd_container">
        <div className="wwd_header_container">
          <p className="wwd_header">What we do</p>
        </div>
        <div className="wwd_services_container">
        <div className="wwd_service">
          <img className="wwd-img"  src={visionImg} alt="jh-logo" />
          <div className="wwd_services_content">
            <p>We collaborate with clients to define the initial vision and project outcomes and hone in what's most important during the design process.</p>
          </div>
        </div>
          <div className="wwd_service">
            <img className="wwd-img"  src={designImg} alt="jh-logo" />
            <div className="wwd_services_content">
              <p>We create mockups and wireframes that turn client ideas into solid design plans that empower the brand backed by UX/UI guiding principles.</p>
            </div>
          </div>
          <div className="wwd_service">
            <img className="wwd-img"  src={codeImg} alt="jh-logo" />
            <div className="wwd_services_content">
              <p>We impliment modern, responsive designs and code a well thought out concept with the mobile end user in mind creating unforgetable user experiences.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
