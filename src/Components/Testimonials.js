import React, { Component } from 'react';
import ceLogo from '../images/recent-work/crypto-elevation/crypto-elevation-logo.jpg'

class NavMenu extends Component {
  render() {
    return (
      <div id="testimonials">
        <div className="testimonials_container">

          <div className="testimonials_header_container">
            <p className="testimonials_header">Testimonials</p>
            <p className="testimonials_header-sub">What people are saying.</p>
          </div>

          <div className="testimonials-content">
            <img className="testimonial-ce-img" src={ceLogo} alt="Crypto Elevation Logo" />
            <p>"Josh Holladay at J Create It, LLC was a pleasure to work with. I appreciate all of his hard work and communication throughout the process.  Josh is always willing to take an idea, expand on the creation, and come out with a solid product.  He is very friendly and was a positive contributor to our project. Thank you Josh!"</p>
            <p>Kristina Walker</p>
            <p>Founder, Owner, Crypto Elevation </p>
          </div>

        </div>
      </div>
    );
  }
}

export default NavMenu;
