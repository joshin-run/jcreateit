import React, { Component } from 'react';
import NavLogo from './NavLogo'
import NavMenu from './NavMenu'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-wrapper">
        <NavLogo />
        <NavMenu />
      </div>
    );
  }
}

export default Navbar;
