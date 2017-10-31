import React, { Component } from 'react';
import logo from '../images/biz-logos/jcreateit-logo-Complete-wh_left-edit1-fit.svg'

class NavLogo extends Component {
  render() {
    return (
      <a href="#home"><img className="logo-img"  src={logo} alt="jh-logo" /></a>
    );
  }
}

export default NavLogo;
