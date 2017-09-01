import React, { Component } from 'react';
import logo from '../images/jlogo-dark-blue-white-border-20px.svg'

class NavLogo extends Component {
  render() {
    return (
      <div>
        <div className="logo-item">
          <a href="#home"><img className="logo-img"  src={logo} alt="jh-logo" /></a>
        </div>
      </div>  
    );
  }
}

export default NavLogo;
