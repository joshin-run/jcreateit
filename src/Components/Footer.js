import React, { Component } from 'react';
import logo from '../images/tri-j-logo-mid2j.png'
import Media from './Media'

class Footer extends Component {
  render() {
    return (
      <div id="contact-us" className="footer-wrapper">
        <div className="footer-container">
          <div className="logo-container">
            <a href="#home"><img className="footer-logo"  src={logo} alt="jh-logo" /></a>
          </div>
          <Media />
        </div>
        <p className="copy">J Create It, LLC &copy; 2018</p>
      </div>
    );
  }
}

export default Footer;
