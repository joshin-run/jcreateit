import React, { Component } from 'react';
import logo from '../images/biz-logos/j_create_it-logo.jpg'

class NavLogo extends Component {
  render() {
    return (
      <a href="#home"><img className="logo-img"  src={logo} alt="jh-logo" /></a>
    );
  }
}

export default NavLogo;
