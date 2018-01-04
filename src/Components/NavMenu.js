import React, { Component } from 'react';

class NavMenu extends Component {
  render() {
    return (
      <ul className="menu nav-style">
        <li className="nav-menu"><a href="#home">Home</a></li>
        <li className="nav-menu"><a href="#what-we-do">What I Do</a></li>
        <li className="nav-menu"><a href="#recent_work">Recent Work</a></li>
        <li className="nav-menu"><a href="#contact-us">Contact</a></li>
      </ul>
    );
  }
}

export default NavMenu;
