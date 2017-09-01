import React, { Component } from 'react';
import BioImage from './BioImage'
import BioContent from './BioContent'

class Bio extends Component {
  render() {
    return (
      <div className="bio-wrapper">
        <BioImage />
        <BioContent />
      </div>
    );
  }
}

export default Bio;
