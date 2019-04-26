import React, { Component } from 'react';
import '../App.css';
import '../assets/css/Main.css';
import '../assets/css/Home.css';
// import ChartSlider from '../components/chartSlider';
import Header from './header';
import AppSearch from './appSearch';

class Background extends Component {
  abhi()
  { Math.inOutQuintic = function(t, b, c, d) {
    var ts = (t/=d)*t,
        tc = ts*t;
    return b+c*(6*tc*ts + -15*ts*ts + 10*tc);
};
    
    var clickedNavItem = false;
    function scrollTo(element, duration, incrementScroll, callback) {
      var scrollingElement = (document.documentElement || document.body.parentNode || document.body);
      var start = scrollingElement.scrollTop,
          change = element.offsetTop + incrementScroll - start,
          currentTime = 0,
          increment = 20;
  
      clickedNavItem = true;
      duration = (typeof(duration) === 'undefined') ? 500 : duration;
      var animateScroll = function() {
          // increment the time
          currentTime += increment;
          // find the value with the quadratic in-out easing function
          var val = Math.inOutQuintic(currentTime, start, change, duration);
          // move the document.body
          scrollingElement.scrollTop = val;
          // do the animation unless its over
          if (currentTime < duration) {
              requestFrame(animateScroll);
          } else {
              setTimeout(function() { clickedNavItem = false}, 100);
              if (callback && typeof(callback) === 'function') {
                  // the animation is done so lets callback
                  callback();
              }
          }
      };
      animateScroll();
  }
    var requestFrame = function() { // requestAnimationFrame cross browser
      return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(func) {
              window.setTimeout(func, 1000 / 60);
          }
      );
  }();
    var requestTimeout = function(fn, delay) {
      if( !window.requestAnimationFrame      	&&
          !window.webkitRequestAnimationFrame &&
          !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
          !window.oRequestAnimationFrame      &&
          !window.msRequestAnimationFrame)
          return window.setTimeout(fn, delay);
  
      var start = new Date().getTime(),
          handleTimeout = new Object();
  
      function loop(){
          var current = new Date().getTime(),
              delta = current - start;
          if (typeof fn !== 'undefined') {
              delta >= delay ? fn.call() : handleTimeout.value = requestFrame(loop);
          }
      };
  
      handleTimeout.value = requestFrame(loop);
      return handleTimeout;
  };
    
    var hashLinks = document.querySelectorAll('.hash-link');
  var verticalNav = document.getElementById('vertical-nav');
  var introNavLink = verticalNav.querySelectorAll('li')[0];
  var valuesNavLink = verticalNav.querySelectorAll('li')[1];
  var projectsNavLink = verticalNav.querySelectorAll('li')[2];
  var processNavLink = verticalNav.querySelectorAll('li')[3];
  var testimonialsNavLink = verticalNav.querySelectorAll('li')[4];

  for (var i = 0; i < hashLinks.length; i++) {
      var hashLink = hashLinks[i];
      hashLink.addEventListener('click', function (e) {
          e.preventDefault();
          var correction = 0;
          var elmntId = (e.target.href || e.target.parentNode.href).split('#')[1];
          e.target.parentNode.parentNode.querySelectorAll('li.selected')[0].className = '';
          e.target.parentNode.className = 'selected';
          e.target.parentNode.blur();
          if (elmntId === 'values' || elmntId === 'process' || elmntId === 'projects') {
              correction = 100;
              verticalNav.className = '';
          } else if (elmntId === 'testimonials') {
              requestTimeout(function() {
                  verticalNav.className = 'color-inverted';
              }, 1000);
          } else {
              verticalNav.className = '';
          }
          scrollTo(document.getElementById(elmntId), 1300, correction);
      });
  }

  var values = document.getElementById('values');
  var projects = document.getElementById('projects');
  var process = document.getElementById('process');
  var testimonials = document.getElementById('testimonials');

  window.addEventListener('scroll', function () {
      if (!clickedNavItem) {
          verticalNav.className = '';
          verticalNav.querySelectorAll('li.selected')[0].className = '';
          if (window.pageYOffset < values.offsetTop - 250) {
              introNavLink.className = 'selected';
          } else if (window.pageYOffset < projects.offsetTop - 250) {
              valuesNavLink.className = 'selected';
          } else if (window.pageYOffset < process.offsetTop - 250) {
              projectsNavLink.className = 'selected';
          } else if (window.pageYOffset < testimonials.offsetTop - 250) {
              processNavLink.className = 'selected';
          } else {
              testimonialsNavLink.className = 'selected';
              verticalNav.className = 'color-inverted';
          }
      }
  });}
  componentDidMount(){
    this.abhi();
  }
  render() {
    return (
      <div className="pace-done">
        <div className="page-content-wrapper">
          {/* <div className="gridLines">
            <div className="gridWrapper">
              <div className="inner">
                <div className="vLine">&nbsp;</div>
                <div className="vLine">&nbsp;</div>
                <div className="vLine">&nbsp;</div>
                <div className="vLine">&nbsp;</div>
                <div className="vLine">&nbsp;</div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="header-line">
          <hr></hr>
        </div> */}

            <div>
              <section id="intro" className="screen-height"></section>
              <section id="values" className="screen-height"></section>
              <section id="projects" className="screen-height"></section>
              <section id="process" className="screen-height"></section>
              <section id="testimonials" className="screen-height"></section>
            </div>
            <div id="vertical-nav" className="">
              <ul>
                <li className="selected"><a className="hash-link" href="#intro" title="Navigate to Top">Component</a></li>
                <li className=""><a class="hash-link" href="#values" title="Navigate to values section">Web Server</a></li>
                <li><a className="hash-link" href="#projects" title="Navigate to projects section">App Server</a></li>
                <li><a className="hash-link" href="#process" title="Navigate to process section">Summary</a></li>
                <li><a className="hash-link" href="#testimonials" title="Navigate to testimonials section">Progress</a></li>
              </ul>
            </div>
      </div>
    )}
}

export default Background;