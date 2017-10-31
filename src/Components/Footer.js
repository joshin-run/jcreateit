import React, { Component } from 'react';
import logo from '../images/biz-logos/jcreateit-jcube-blue-darker.svg'
import Media from './Media'

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="logo-container">
            <a href="#home"><img className="footer-logo"  src={logo} alt="jh-logo" /></a>
          </div>
          <Media />
        </div>
        <p className="copy">J Create It, LLC &copy; 2017</p>
      </div>
    );
  }
}

export default Footer;
