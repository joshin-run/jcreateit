import React, { Component } from 'react';

class NavMenu extends Component {
  render() {
    return (
      <div className="">
        <ul className="menu nav-style">
          <li className="nav-menu"><a href="#home">HOME</a></li>
          <li className="nav-menu"><a href="#bio">BIO</a></li>
          <li className="nav-menu"><a href="#projects">PROJECTS</a></li>
          <li className="nav-menu"><a href="#design">DESIGN</a></li>
          <li className="nav-menu"><a href="https://joshholladay.wordpress.com/" target="_blank">BLOG</a></li>
          <li className="nav-menu"><a href="#contact">CONTACT</a></li>
          <li id="hire-josh" className="nav-menu"><a href="#contact">HIRE JOSH</a></li>
        </ul>
      </div>
    );
  }
}

export default NavMenu;
