import React, { Component } from 'react';
import $ from 'jquery';

class NavMenu extends Component {
  render() {
    $(document).ready(function(){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 375) {
          $(".navbar-wrapper").css("background" , "rgb(115,154,247)");
        }

        else{
          $(".navbar-wrapper").css("background" , "none");
        }
      })
    })
    return (
      <ul className="menu nav-style">
        <li className="nav-menu"><a href="#banner">HOME</a></li>
        <li className="nav-menu"><a href="#what-we-do">WHAT I DO</a></li>
        <li className="nav-menu"><a href="#recent_work">RECENT WORK</a></li>
        <li className="nav-menu"><a href="#contact-us">CONTACT</a></li>
      </ul>
    );
  }
}

export default NavMenu;

// <ul className="menu nav-style">
//   <li className="nav-menu"><a href="#home">Home</a></li>
//   <li className="nav-menu"><a href="#what-we-do">What I Do</a></li>
//   <li className="nav-menu"><a href="#recent_work">Recent Work</a></li>
//   <li className="nav-menu"><a href="#contact-us">Contact</a></li>
// </ul>
