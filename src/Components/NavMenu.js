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

          $(".navbar-wrapper").css("background" , "#fff");
          $(".navbar-wrapper").css("box-shadow" , "0px 1px 6px rgba(0,0,0,0.1)");
          $(".navbar-wrapper").css("z-index" , "99");
          $(".nav-menu").css("color" , "#0000ff");
          $(".mobile-menu-icon").css("height" , "28px");
          $("#logoImage").attr("src" , "http://res.cloudinary.com/jahmsc/image/upload/v1519680052/tri-j-logo-onWhite_gajmuc.png");
          $("#resume-link").css("background" , "none");
          $("#resume-link").css("color" , "#0000ff");
          $("#resume-link").css("border" , "2px solid #0000ff");
          $("#hamb_bl").css("display" , "block");
          $("#hamb_wh").css("display" , "none");
          // $(".navbar-wrapper").css("background" , "linear-gradient(to right, rgba(71,186,255,1),rgba(6,240,220,1))");

          // $(".navbar-wrapper").css("background" , "linear-gradient(to right, rgba(71,186,255,1),rgba(8,191,181,1))");

          // $(".navbar-wrapper").css("background" , "linear-gradient(to right, rgba(63,169,230,1),rgba(8,191,181,1))");

          // $(".navbar-wrapper").css("background" , "linear-gradient(to right, rgba(71,186,255,1),rgba(6,190,155,1))");

          // $(".navbar-wrapper").css("height" , "50px");
          // $(".navbar-wrapper").css("padding" , "20px");
          // $(".logo-img").css("height" , "30px");
          // $(".logo-img").css("transition" , "0.25s ease-in-out");
          // $(".nav-menu").css("color" , "#0A75A6");
          // $("#logoImage").attr("src" , "{logo2}");
          // $("#resume-link").css("background" , "#5D5DFF");
          // $("#resume-link").css("padding" , "9px 15px");
        } else {
          $(".navbar-wrapper").css("background" , "none");
          $(".navbar-wrapper").css("box-shadow" , "none");
          $(".nav-menu").css("color" , "#fff");
          $("#logoImage").attr("src" , "http://res.cloudinary.com/jahmsc/image/upload/v1519766563/tri-j-logo-mid2j_olcki9.png");
          $("#resume-link").css("color" , "#fff");
          $("#resume-link").css("border" , "2px solid #fff");
          $("#hamb_bl").css("display" , "none");
          $("#hamb_wh").css("display" , "block");
          // $(".navbar-wrapper").css("height" , "75px");
          // $(".navbar-wrapper").css("padding" , "25px");
          // $(".logo-img").css("height" , "45px");
          // $(".mobile-menu-icon").css("height" , "36px");
          // $("#resume-link").css("background" , "#fff");
          // $("#resume-link").css("color" , "#0108B7");
          // $("#resume-link").css("padding" , "12px 15px");
        }

        if (window.matchMedia("(min-width: 769px)").matches) {
          $("#hamb_bl").css("display" , "none");
          $("#hamb_wh").css("display" , "none");
        }
        //   $("mobile-menu-icon").css("display" , "none");
        //   $("menu").css("display" , "inline-block");
        //   $("nav-menu").css("display" , "inline-block");
        // }
        //   $("#hamb_bl").css("display" , "none");
        //   $("#hamb_wh").css("display" , "none");
        //
        // if (window.matchMedia("(min-width: 769px)").matches) {
        //   $("mobile-menu-icon").css("display" , "block");
        //   $("menu").css("display" , "none");
        //   $("#hamb_bl").css("display" , "none");
        //   $("#hamb_wh").css("display" , "block");
        // }
      })
    })
    return (
      <ul className="menu nav-style">
        <li className="nav-menu"><a href="#what-we-do">What I Do</a></li>
        <li className="nav-menu"><a href="#featured_work">Featured Work</a></li>
        <li className="nav-menu"><a href="#projects">Projects</a></li>
        <li className="nav-menu"><a href="#testimonials">Testimonials</a></li>
        <li className="nav-menu"><a href="#about">About</a></li>
        <li className="nav-menu"><a href="#contact-us">Contact</a></li>
        <li id="resume-link" className="nav-menu">
        <a href="https://drive.google.com/open?id=1ALQdU-cblP6JUHfYKqwEjRpTTlR9HDQx" target="_blank">Resume</a></li>
      </ul>
    );
  }
}

export default NavMenu;

// <li className="nav-menu"><a href="#banner">Home</a></li>

// <ul className="menu nav-style">
//   <li className="nav-menu"><a href="#home">Home</a></li>
//   <li className="nav-menu"><a href="#what-we-do">What I Do</a></li>
//   <li className="nav-menu"><a href="#recent_work">Recent Work</a></li>
//   <li className="nav-menu"><a href="#contact-us">Contact</a></li>
// </ul>
// $(".navbar-wrapper").css("background" , "rgb(115,154,247)");
