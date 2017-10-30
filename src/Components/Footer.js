import React, { Component } from 'react';
import logo from '../images/biz-logos/jcreateit-jcube-blue.svg'
import Media from './Media'

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div>
          <div className="logo-container">
            <a href="#home"><img className="footer-logo"  src={logo} alt="jh-logo" /></a>
          </div>
          <p className="made-by-me">J Create It, LLC &copy; 2017</p>
          <Media />
        </div>
      </div>
    );
  }
}

export default Footer;
