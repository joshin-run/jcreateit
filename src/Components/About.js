import React, { Component } from 'react';
import cryptoElevationHome from '../images/recent-work/crypto-elevation/crypto-elevation-home.jpg'
import upssHome from '../images/recent-work/utah-plastic-surgery-society/utah-plastic-surgery-society-home.jpg'
import strongBod from '../images/recent-work/StrongBod/strongBod.png'
import unboxt from '../images/recent-work/Unboxt/unboxt.png'
import profilePic from '../images/2018ProfilePic.jpg'

class About extends Component {
  render() {
    return (
      <div id="about" className="about-wrapper">
        <div className="about_container">


          <div className="about_header_container">
            <p className="about_header">About</p>
            <p className="about_header-sub">UI/UX Designer</p>
          </div>

          <div className="about_img-content_container item-1">


            <img className="about_img" src={profilePic} alt="Profile Picture" />


            <div className="recent_work_service crypto-content">
              <div className="about_content_wrapper">
                <p className="content-header align mobile-width">My Story</p>
                <p className="about_main_content align mobile-width">Growing up in Northern California my grandpa owned a computer repair business. There was always a computer to toy around with. I loved typing classes and was the king of MS Paint. Ever since I could remember I would format word documents to death, manipulate screenshot images and create with whatever tools were available. Doodling, drawing, and art classes were all a part of what I loved.</p>
                <p className="about_main_content align mobile-width">Today, I use my artistic instinct and technical skills to create intriging design concepts and websites. I'm always looking for opportunities to add value to a project. I'm an idea guy and I rarely forget a name.</p>
                <p className="about_main_content align mobile-width">Hobbies: Chess, Shogi, Xiangqi, Table Tennis, Piano, Life long choir boy, Japanese, Family.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default About;
