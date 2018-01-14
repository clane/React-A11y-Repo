import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./NavigationMenu.css";

class NavigationMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Categories: [
        {
          buttonLabel: "Category 1",
          menuLabel: "Category 1 menu",
          activeDescendant: "placeholder",
          choices: [
           {name:"Choice 1"},
           {name:"Choice 2"},
           {name:"Choice 3"},
           {name:"Choice 4"},
          ]
        },
      ]
    };
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
        <div role="navigation" aria-label="navigation menu of course">
          <ul id="menubar1" role="menubar" aria-label="navigation menu bar">
            {this.state.Categories.map((category, index) => (
              <li key={index}>
                <button>{category.buttonLabel}</button>
                <ul role="menu"
                  aria-label={category.menuLabel}
                  aria-activedescendant={category.activeDescendant}
                >
                  {category.choices.map((choice, index) => (
                  <li role="none">
                    <a role="menuitem"
                       id={index}
                       href="#"
                    >
                      {choice.name} 
                    </a>
                  </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default NavigationMenu;
