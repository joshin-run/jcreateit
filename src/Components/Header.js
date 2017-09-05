import React, { Component } from 'react';
import Typing from './Typing'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <p className="title name">Josh Holladay</p>
        <Typing string=""/>
        <p className="title dev-type">Modern and Responsive Web Applications</p>
      </div>
    );
  }
}

export default Header;
