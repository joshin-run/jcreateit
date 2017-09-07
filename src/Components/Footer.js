import React, { Component } from 'react';
import logo from '../images/jlogo-dark-blue-white-border-20px.svg'
import Media from './Media'

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <Media />
        <a href="#home"><img className="footer-logo"  src={logo} alt="jh-logo" /></a>
      </div>
    );
  }
}

export default Footer;
