import React, { Component } from 'react';
// import logo from '../images/biz-logos/jcreateit-jcube-blue-darker.svg'
import designImg from '../images/banner/slides/yellow-mockup.jpg'
import codeImg from '../images/banner/slides/darkredcode.jpg'


class WhatWeDo extends Component {
  render() {
    return (
      <div className="wwd_container">
        <div className="wwd_header_container">
          <p className="wwd_header">What we do</p>
        </div>
        <div className="wwd_services_container">
          <div className="wwd_service">
            <img className="design-img"  src={designImg} alt="jh-logo" />
            <div className="wwd_service_header">DESIGN</div>
            <div className="wwd_services_content">
              <p>We create mockups and wireframes that turn your ideas into designs that empower your brand and create unforgetable user experiences.</p>
            </div>
          </div>
          <div className="wwd_service">
            <img className="code-img"  src={codeImg} alt="jh-logo" />
            <div className="wwd_service_header">CODE</div>
            <div className="wwd_services_content">
              <p>We impliment modern, responsive designs and code a well thought out concept with the mobile end user in mind.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WhatWeDo;
