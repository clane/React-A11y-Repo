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
          ariaExpanded: "false",
          choices: [
            { id: "cat1choice1", name: "choice 1" },
            { id: "cat1choice2", name: "choice 2" },
            { id: "cat1choice3", name: "choice 3" },
            { id: "cat1choice4", name: "choice 4" },
            { id: "cat1choice5", name: "choice 5" },
            { id: "cat1choice6", name: "choice 6" },
            { id: "cat1choice7", name: "choice 7" },
            { id: "cat1choice8", name: "choice 8" },
            { id: "cat1choice9", name: "choice 9" },
            { id: "cat1choice10", name: "choice 10" }
          ]
        }
      ]
    };
  }

  toggleMenu(index) {
    let updatedCategories = [];
    updatedCategories = this.state.Categories;
    if (updatedCategories[index].ariaExpanded === "false") {
      updatedCategories[index].ariaExpanded = "true";
    } else {
      updatedCategories[index].ariaExpanded = "false";
    }
    this.setState({
      Categories: updatedCategories
    });
  }

  componentDidUpdate(){
    this.expandedMenu.focus();
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
          <div id="menubar1" role="menubar" aria-label="navigation menu bar">
            {this.state.Categories.map((category, index) => (
              <div key={index}>
                <button
                  onClick={() => this.toggleMenu(index)}
                  aria-haspopup="true"
                  aria-expanded={category.ariaExpanded}
                >
                  {category.buttonLabel}
                </button>
                <div
                  role="menu"
                  tabIndex="0"
                  aria-label={category.menuLabel}
                  aria-activedescendant={category.activeDescendant}
                  ref={r => {
                    this.expandedMenu = r;
                  }}
                >
                  {category.choices.map((choice, index) => (
                    <div
                      key={index}
                      tabIndex="-1"
                      id={choice.id}
                      role="menuitem"
                    >
                      {choice.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default NavigationMenu;
