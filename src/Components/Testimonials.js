import React, { Component } from 'react';
import ceLogo from '../images/recent-work/crypto-elevation/crypto-elevation-logo.jpg'
import bviLogo from '../images/bvi-iconLeft.png'
// import lowder from '../images/'

class NavMenu extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="testimonials_container">

          <div className="testimonials_header_container">
            <p className="testimonials_header">Testimonials</p>
            <p className="testimonials_header-sub">What people are saying.</p>
          </div>

          <div className="testimonials-content-container">
            <div className="testimonials-content">
              <p>"Josh Holladay at J Create It, LLC was a pleasure to work with. I appreciate all of his hard work and communication throughout the process.  Josh is always willing to take an idea, expand on the creation, and come out with a solid product.  He is very friendly and was a positive contributor to our project. Thank you Josh!"</p><br />
              <p>Kristina Walker</p>
              <p>Founder & Business Operations</p>
            </div>

            <div className="testimonials-content">
              <p>"Josh is a very talented designer and was great to work with.  He was instrumental in adding his own artistic touch to enhance everything I suggested.  I will be sending a lot more design work his way soon! If he has bandwidth you should hire him before someone else does!"</p><br />
              <p>Jared Ables</p>
              <p>Full Stack Rails Developer</p>
            </div>

            <div className="testimonials-content">
              <p>"I was very impressed with how many ideas and options Josh provided me with. I was able to pull from several different options to come up with one idea that I really liked. His response time is excellent. He takes your ideas and is adept at making them come alive. I couldn't be happier with the logo he designed for me as well as the business card. Graphic design at it's best."</p><br />
              <p>Isaac Lowder</p>
              <p>Owner of Lowder Music</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default NavMenu;
