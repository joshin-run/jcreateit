import React, { Component } from 'react';
import Typed from 'typed.js';
// import $ from ‘jquery’;

class Typing extends Component {

  componentDidMount() {
    const { strings } = this.props;
    const options = {
    	strings: strings,
      typeSpeed: 100,
      backDelay: 3000,
      backSpeed: 50,
      cursorChar: '|',
      loop: true
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </div>
      </div>
    );
  }
}

export default Typing;
