import React, { Component } from 'react';
import logo from '../images/tri-j-logo-mid2j.png'

class NavLogo extends Component {
  render() {
    return (
      <a href="#home"><img className="logo-img"  src={logo} alt="jh-logo" /></a>
    );
  }
}

export default NavLogo;
