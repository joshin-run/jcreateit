import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <p className="title name">Josh Holladay</p>
        <p className="title dev">Front-end Web Developer</p>
        <p className="title dev-type">Modern and Responsive Web Applications</p>
      </div>
    );
  }
}

export default Header;
