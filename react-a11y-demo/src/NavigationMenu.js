import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./NavigationMenu.css";

class NavigationMenu extends Component {
  constructor(props) {
    super(props);
  }  
  render() {
    //https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html

    return (
      <div className="navigation-menu">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Navigation Menu</title>
        </Helmet>
        <h2
          tabIndex="-1"
          ref={componentH2 => {
            this.topHeading = componentH2;
          }}
        >
        Navigation Menu 
        </h2>
        <div id="navigationMenu">
<nav aria-label="Mythical University">
        <ul id="menubar1" role="menubar" aria-label="Mythical University">
          <li>
            <a role="menuitem" aria-haspopup="true" aria-expanded="false" href="#" tabindex="0">About</a>
            <ul role="menu" aria-label="About">
              <li role="none">
                <a role="menuitem" href="mb-about.html#overview" tabindex="-1">Overview</a>
              </li>
              <li role="none">
                <a role="menuitem" href="mb-about.html#admin" tabindex="-1">Administration</a>
              </li>
              <li role="none">
                <a id="menubar113" role="menuitem" href="#" aria-haspopup="true" aria-expanded="false" tabindex="-1">Facts</a>
                <ul role="menu" aria-label="Facts">
                  <li role="none">
                    <a role="menuitem" href="mb-about.html#facts" tabindex="-1">History</a>
                  </li>
                  <li role="none">
                    <a role="menuitem" href="mb-about.html#facts" tabindex="-1">Current Statistics</a>
                  </li>
                  <li role="none">
                    <a role="menuitem" href="mb-about.html#facts" tabindex="-1">Awards</a>
                  </li>
                </ul>
              </li>
              <li>
                <a role="menuitem" href="#" aria-haspopup="true" aria-expanded="false" tabindex="-1">Campus
                  Tours</a>
                <ul role="menu" aria-label="Campus Tours">
                  <li role="none">
                    <a role="menuitem" href="mb-about.html#tours" tabindex="-1">For prospective students</a>
                  </li>
                  <li role="none">
                    <a role="menuitem" href="mb-about.html#tours" tabindex="-1">For alumni</a>
                  </li>
                  <li role="none">
                    <a role="menuitem" href="mb-about.html#tours" tabindex="-1">For visitors</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a role="menuitem" aria-haspopup="true" aria-expanded="false" href="#" tabindex="-1">Admissions</a>
            <ul role="menu" aria-label="Admissions">
              <li role="none">
                <a role="menuitem" href="mb-admissions.html#apply" tabindex="-1">Apply</a>
              </li>
              <li role="none">
                <a role="menuitem" href="#" aria-haspopup="true" aria-expanded="false" tabindex="-1">Tuition</a>
                <ul role="menu" aria-label="Tuition Information">
                  <li role="none">
                    <a role="menuitem" href="mb-admissions.html#tuition" tabindex="-1">Undergraduate</a>
                  </li>
                  <li role="none">
                    <a role="menuitem" href="mb-admissions.html#tuition" tabindex="-1">Graduate</a>
                  </li>
                  <li role="none">
                    <a role="menuitem" href="mb-admissions.html#tuition" tabindex="-1">Professional Schools</a>
                  </li>
                </ul>
              </li>
              <li role="none">
                <a role="menuitem" href="mb-admissions.html#signup" tabindex="-1">Sign Up</a>
              </li>
              <li role="separator"></li>
              <li role="none">
                <a role="menuitem" href="mb-admissions.html#visit" tabindex="-1">Visit</a>
              </li>
              <li role="none">
                <a role="menuitem" href="mb-admissions.html#photo" tabindex="-1">Photo Tour</a>
              </li>
              <li role="none">
                <a role="menuitem" href="mb-admissions.html#connect" tabindex="-1">Connect</a>
              </li>
            </ul>
          </li>
          <li>
            <a role="menuitem" aria-haspopup="true" aria-expanded="false" href="#" tabindex="-1">Academics</a>
            <ul role="menu" aria-label="Academics" >
              <li role="none">
                <a role="menuitem" href="mb-academics.html#colleges" tabindex="-1">Colleges &amp; Schools</a>
              </li>
              <li role="none">
                <a role="menuitem" href="mb-academics.html#programs" tabindex="-1">Programs of Study</a>
              </li>
              <li role="none">
                <a role="menuitem" href="mb-academics.html#honors" tabindex="-1">Honors Programs</a>
              </li>
              <li role="none">
                <a role="menuitem" href="mb-academics.html#online" tabindex="-1">Online Courses</a>
              </li>
              <li role="separator"></li>
              <li role="none">
                <a role="menuitem" href="mb-academics.html#explorer" tabindex="-1">Course Explorer</a>
              </li>
              <li role="none">
                <a role="menuitem" href="mb-academics.html#register" tabindex="-1">Register for Class</a>
              </li>
              <li role="none">
                <a role="menuitem" href="mb-academics.html#academic" tabindex="-1">Academic Calendar</a>
              </li>
              <li role="none">
                <a role="menuitem" href="mb-academics.html#tanscripts" tabindex="-1">Transscripts</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

          
        </div>
      </div>
    );
  }
}

export default NavigationMenu;
