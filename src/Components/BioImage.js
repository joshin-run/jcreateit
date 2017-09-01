import React, { Component } from 'react';
import profileImg from '../images/profile-stoneBrick-bg2.jpg';

class BioImage extends Component {
  render() {
    return (
      <div className="bio-img">
        <img className="profile-image" src={profileImg} alt="Josh Holladay Avatar" />
      </div>
    );
  }
}

export default BioImage;
