import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./NavigationMenu.css";

class NavigationMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topItems: [
        { 
          label: "main 1",
          subItems: [],
        },
      ]
    }



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
