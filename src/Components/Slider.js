import React, { Component } from 'react';
import SlideMockup from './SlideMockup';
import SlideDesk from './SlideDesk';
import SlideCode from './SlideCode';
import SlideSLC from './SlideSLC';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    }
  }

  // slideRun() {
  //   if ({this.state.slideCount < 4}) {
  //     this.setState({ slideCount: this.state.slideCount + 1 })
  //   } else {
  //     this.setState({ slideCount: this.state.slideCount = 1 })
  //   }
  //   console.log('3000');
  //   setTimeout(slideRun, 3000);
  // }

  render() {

    return (
      <div className="slider">

        { this.state.slideCount === 1 ? <SlideMockup /> : null }
        { this.state.slideCount === 2 ? <SlideDesk /> : null }
        { this.state.slideCount === 3 ? <SlideCode /> : null }
        { this.state.slideCount === 4 ? <SlideSLC /> : null }

      </div>
    );
  }
}
