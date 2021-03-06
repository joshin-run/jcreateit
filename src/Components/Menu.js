import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <div className="menu-wrapper">
        <ul>
          <li className="menu-item"><a href="#what-we-do">What I Do</a></li>
          <li className="menu-item"><a href="#featured_work">Featured Work</a></li>
          <li className="menu-item"><a href="#projects">Projects</a></li>
          <li className="menu-item"><a href="#testimonials">Testimonials</a></li>
          <li className="menu-item"><a href="#about">About</a></li>
          <li className="menu-item"><a href="#contact-us">Contact</a></li>
          <li id="resume-item" className="menu-item"><a href="https://drive.google.com/open?id=1ALQdU-cblP6JUHfYKqwEjRpTTlR9HDQx" target="_blank">Resume</a></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
