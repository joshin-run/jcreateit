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
          $("#resume-link").css("color" , "#fff");
          $("#resume-link").css("background" , "#0000ff");
          $("#hamb_bl").css("display" , "block");
          $("#hamb_wh").css("display" , "none");
        } else {
          $(".navbar-wrapper").css("background" , "none");
          $(".navbar-wrapper").css("box-shadow" , "none");
          $(".nav-menu").css("color" , "#fff");
          $("#logoImage").attr("src" , "http://res.cloudinary.com/jahmsc/image/upload/v1519766563/tri-j-logo-mid2j_olcki9.png");
          $("#resume-link").css("color" , "#0000ff");
          $("#resume-link").css("background" , "#fff");
          $("#hamb_bl").css("display" , "none");
          $("#hamb_wh").css("display" , "block");
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
        <li className="nav-menu"><a href="#what-we-do">What We Do</a></li>
        <li className="nav-menu"><a href="#featured_work">Featured Work</a></li>
        <li className="nav-menu"><a href="#projects">Projects</a></li>
        <li className="nav-menu"><a href="#contact-us">Contact</a></li>
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
