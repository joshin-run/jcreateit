import React, { Component } from 'react';
import logo from '../images/tri-j-logo-mid2j.png'
import logo2 from '../images/biz-logos/tri-j-logo-onWhite.png'
import $ from 'jquery';

class NavMenu extends Component {

  render() {
    $(document).ready(function(){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
          // $(".navbar-wrapper").css("background" , "linear-gradient(to right, rgba(71,186,255,1),rgba(6,240,220,1))");

          // $(".navbar-wrapper").css("background" , "linear-gradient(to right, rgba(71,186,255,1),rgba(8,191,181,1))");

          $(".navbar-wrapper").css("background" , "#fff");

          // $(".navbar-wrapper").css("background" , "linear-gradient(to right, rgba(63,169,230,1),rgba(8,191,181,1))");

          // $(".navbar-wrapper").css("background" , "linear-gradient(to right, rgba(71,186,255,1),rgba(6,190,155,1))");

          $(".navbar-wrapper").css("height" , "50px");
          $(".navbar-wrapper").css("padding" , "20px");
          $(".navbar-wrapper").css("box-shadow" , "0px 2px 8px rgba(0,0,0,0.2)");
          $(".logo-img").css("height" , "30px");
          $(".logo-img").css("transition" , "0.25s ease-in-out");
          $(".nav-menu").css("color" , "#0A75A6");
          $(".mobile-menu-icon").css("height" , "28px");
          // $("#logoImage").attr("src" , "{logo2}");
          $("#logoImage").attr("src" , "http://res.cloudinary.com/jahmsc/image/upload/v1519680052/tri-j-logo-onWhite_gajmuc.png");
        }

        else{
          $(".navbar-wrapper").css("background" , "none");
          $(".navbar-wrapper").css("height" , "75px");
          $(".navbar-wrapper").css("box-shadow" , "none");
          $(".navbar-wrapper").css("padding" , "25px");
          $(".logo-img").css("height" , "45px");
          $(".nav-menu").css("color" , "#fff");
          $(".mobile-menu-icon").css("height" , "36px");
          $("#logoImage").attr("src" , "http://res.cloudinary.com/jahmsc/image/upload/v1519766563/tri-j-logo-mid2j_olcki9.png");
        }
      })
    })
    return (
      <ul className="menu nav-style">
        <li className="nav-menu"><a href="#banner">Home</a></li>
        <li className="nav-menu"><a href="#what-we-do">What I Do</a></li>
        <li className="nav-menu"><a href="#recent_work">Recent Work</a></li>
        <li className="nav-menu"><a href="#testimonials">Testimonials</a></li>
        <li className="nav-menu"><a href="#about">About</a></li>
        <li className="nav-menu"><a href="#contact-us">Contact</a></li>
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
