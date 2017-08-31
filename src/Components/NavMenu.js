import React, { Component } from 'react';

class NavMenu extends Component {
  render() {
    return (
      <div className="menu-container">
        <ul id="nav" className="menu-item logo nav navbar-nav nav-style">
          <li className="nav-menu"><a href="#home">HOME</a></li>
          <li className="nav-menu"><a href="#bio">BIO</a></li>
          <li className="nav-menu"><a href="#projects-wrapper">PROJECTS</a></li>
          <li className="nav-menu"><a href="#design-wrapper">DESIGN</a></li>
          <li className="nav-menu"><a href="#contact">CONTACT</a></li>
          <li id="hire-josh" className="nav-menu"><a href="#contact">HIRE JOSH</a></li>
        </ul>
      </div>
    );
  }
}

export default NavMenu;
