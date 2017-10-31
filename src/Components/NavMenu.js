import React, { Component } from 'react';

class NavMenu extends Component {
  render() {
    return (
      <ul className="menu nav-style">
        <li className="nav-menu"><a href="#home">Home</a></li>
        <li className="nav-menu"><a href="#bio">About</a></li>
        <li className="nav-menu"><a href="#projects">Projects</a></li>
        <li className="nav-menu"><a href="#contact">Contact</a></li>
        <li id="hire-josh" className="nav-menu"><a href="#contact">Hire Us</a></li>
      </ul>
    );
  }
}

export default NavMenu;
