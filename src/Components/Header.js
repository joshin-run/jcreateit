import React, { Component } from 'react';
import Typing from './Typing'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <p className="title dev">
          <Typing strings={["Website Design", "Web Development"]} />
        </p>
        <p className="sub-title">Modern and Responsive Web Applications</p>
      </div>
    );
  }
}

export default Header;
