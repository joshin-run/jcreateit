import React, { Component } from 'react';
import logo from '../images/jlogo-dark-blue-white-border-20px.svg'
import Media from './Media'

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div>
          <div className="logo-container">
            <a href="#home"><img className="footer-logo"  src={logo} alt="jh-logo" /></a>
          </div>
          <p className="made-by-me">Handmade by me &copy; 2017</p>
          <Media />
        </div>
      </div>
    );
  }
}

export default Footer;
