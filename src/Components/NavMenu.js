import React, { Component } from 'react';

class NavMenu extends Component {
  render() {
    return (
      <ul className="menu nav-style">
        <li className="nav-menu"><a href="#home">Home</a></li>
        <li className="nav-menu"><a href="#what-we-do">What We Do</a></li>
        <li className="nav-menu"><a href="#projects">Projects</a></li>
        <li className="nav-menu"><a href="#contact-us">Contact Us</a></li>
      </ul>
    );
  }
}

export default NavMenu;
