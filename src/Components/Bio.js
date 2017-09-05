import React, { Component } from 'react';
import BioImage from './BioImage'
import BioContent from './BioContent'

class Bio extends Component {
  render() {
    return (
      <div id="bio" className="bio-wrapper">
        <BioImage />
        <BioContent />
      </div>
    );
  }
}

export default Bio;
