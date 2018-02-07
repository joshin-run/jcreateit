import React, { Component } from 'react';
import $ from 'jquery';

class NavMenu extends Component {
  render() {
    $(document).ready(function(){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
          $(".navbar-wrapper").css("background" , "linear-gradient(to right, rgba(71,186,255,1),rgba(6,190,155,1))");
          $(".navbar-wrapper").css("height" , "50px");
          $(".navbar-wrapper").css("box-shadow" , "0px 2px 8px rgba(0,0,0,0.2)");
          $(".logo-img").css("height" , "30px");
          $(".logo-img").css("transition" , "0.25s ease-in-out");
        }

        else{
          $(".navbar-wrapper").css("background" , "none");
          $(".navbar-wrapper").css("height" , "75px");
          $(".navbar-wrapper").css("box-shadow" , "none");
          $(".logo-img").css("height" , "45px");
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
// $(".navbar-wrapper").css("background" , "rgb(115,154,247)");
