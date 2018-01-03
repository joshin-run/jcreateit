import React, { Component } from 'react';
import NavLogo from './NavLogo'
import NavMenu from './NavMenu'
import menuIcon from '../images/glyphs/if_three-bars_298879.svg'

class Navbar extends Component {
  render() {
    return (
      <div id="navbar" className="navbar-wrapper">
        <NavLogo />
        <img className="mobile-menu-icon" src={menuIcon} />
        <NavMenu />
      </div>
    );
  }
}

export default Navbar;
