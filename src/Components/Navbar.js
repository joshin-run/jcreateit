import React, { Component } from 'react';
import NavLogo from './NavLogo'
import NavMenu from './NavMenu'
import menuIcon from '../images/icons/partial-hamb.svg'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }
  render() {
    return (
      <div id="navbar" className="navbar-wrapper">
        <NavLogo />
        <img className="mobile-menu-icon" src={menuIcon} onclick=""/>
        <NavMenu
        isMenuOpen={this.state.isMenuOpen}
        onMenuToggle={this.toggleMenu}/>
      </div>
    );
  }
}

export default Navbar;
