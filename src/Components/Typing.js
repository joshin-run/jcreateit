import React, { Component } from 'react';
import typed from 'typed';
// import $ from ‘jquery’;

class Typing extends Component {
  componentDidMount() {
    // const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: ["Front End Developer", "Website Designer", "Problem Solver"],
      typeSpeed: 50,
      backSpeed: 40
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  // 	// Make sure to destroy Typed instance on unmounting
  //   // to prevent memory leaks
    this.typed.destroy();
  }

  render() {

    // var options = {
    //   strings: ["Front End Developer", "Website Designer", "Problem Solver", ""],
    //   typeSpeed: 10
    // }
    // var whatIsTyped = new Typed(".typed-element", options);

    return (
      <div>
        <p className="title dev">
          <span className="typed-element">{strings}</span>
          <span className="typed-cursor">|</span>
        </p>

        <h1>Typed.js</h1>
        <div className="type-wrap">
          <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
          />
        </div>

        // <TypedReactDemo strings={[
        //     	'Some <i>strings</i> are slanted',
        //       'Some <strong>strings</strong> are bold',
        //       'HTML characters &times; &copy;'
        //     ]}
        //   />,


    )
  }
}

export default Typing;
