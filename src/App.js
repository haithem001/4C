import './App.css';
import React, {useEffect, useState} from "react";
import {allget} from "./api";

import Header from "./components/Header";
import Main from "./components/Main";
import Events from "./components/events";
import Clubs from "./components/clubs";
import Partenaires from "./components/partenaires";
import Footer from "./components/footer";


function App() {
  const [event, setEvents] = useState([]);
  const [clubs, setClubs] = useState([]);
  const [parts, setParts] = useState([]);
  useEffect(() => {
    allget()
        .then((data) => {
          setEvents(data.events);
          setClubs(data.clubs);
          setParts(data.parts);
        })
        .catch((err) => {
          console.log("Failed to fetch events");
        });
  }, []);

  const scrollEvent = e => {
    console.log(e.target.scrollTop);
    if(e.target.scrollTop > 1000) {
      document.getElementById("main").style.backgroundColor="#CB997E";
      document.getElementById("main").style.opacity=".75";
      if(e.target.scrollTop > 3000) {
        document.getElementById("navportfolio").style.color="#F0EFEB";
        document.getElementById("navabout").style.color="#F0EFEB";
        document.getElementById("navhome").style.color="#F0EFEB";
        document.getElementById("navcontact").style.color="black";
      }
      else if(e.target.scrollTop > 1700) {
        document.getElementById("navportfolio").style.color="black";
        document.getElementById("navabout").style.color="#F0EFEB";
        document.getElementById("navhome").style.color="#F0EFEB";
        document.getElementById("navcontact").style.color="#F0EFEB";
      }
        else {
        document.getElementById("main").style.color="#F0EFEB";
      }
    } else {
      document.getElementById("Header").style.backgroundColor="transparent";
    }
    // const scrollEvent = $ => {
    // !(function($) {
    //   "use strict";
    //     // Navigation active state on scroll
    // var nav_sections = $('section');
    // var main_nav = $('.nav-menu, .mobile-nav');

    // $(window).on('scroll', function() {
    //   var cur_pos = $(this).scrollTop() + 200;

    //   nav_sections.each(function() {
    //     var top = $(this).offset().top,
    //       bottom = top + $(this).outerHeight();

    //     if (cur_pos >= top && cur_pos <= bottom) {
    //       if (cur_pos <= bottom) {
    //         main_nav.find('li').removeClass('active');
    //       }
    //       main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    //     }
    //     if (cur_pos < 300) {
    //       $(".nav-menu ul:first li:first").addClass('active');
    //     }
    //   });
    // });
  }





  return (
      <div className="main" onScroll={scrollEvent}>
        <Header/>
        <Main/>
        <Events events={event}/>
        <Clubs clubs={clubs}/>
        <Partenaires parts={parts}/>
        <Footer/>
      </div>
  );

}
export default App;