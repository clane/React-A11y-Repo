import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./NavigationMenu.css";

class NavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDescIndexMenubar: 0,
      Categories: [
        {
          buttonLabel: "Category 1",
          menuLabel: "Category 1 menu",
          activeDescIndexChoices: 0,
          ariaExpanded: "false",
          choices: [
            { id: "cat1choice1", name: "choice 1", dataActive: "false" },
            { id: "cat1choice2", name: "choice 2", dataActive: "false" },
            { id: "cat1choice3", name: "choice 3", dataActive: "false" },
            { id: "cat1choice4", name: "choice 4", dataActive: "false" },
            { id: "cat1choice5", name: "choice 5", dataActive: "false" },
            { id: "cat1choice6", name: "choice 6", dataActive: "false" },
            { id: "cat1choice7", name: "choice 7", dataActive: "false" },
            { id: "cat1choice8", name: "choice 8", dataActive: "false" },
            { id: "cat1choice9", name: "choice 9", dataActive: "false" },
            { id: "cat1choice10", name: "choice 10", dataActive: "false" }
          ]
        }
      ,
        {
          buttonLabel: "Category 2",
          menuLabel: "Category 2 menu",
          activeDescIndexChoices: 0,
          ariaExpanded: "false",
          choices: [
            { id: "cat2choice1", name: "choice 1", dataActive: "false" },
            { id: "cat2choice2", name: "choice 2", dataActive: "false" },
            { id: "cat2choice3", name: "choice 3", dataActive: "false" },
            { id: "cat2choice4", name: "choice 4", dataActive: "false" },
            { id: "cat2choice5", name: "choice 5", dataActive: "false" },
            { id: "cat2choice6", name: "choice 6", dataActive: "false" },
            { id: "cat2choice7", name: "choice 7", dataActive: "false" },
            { id: "cat2choice8", name: "choice 8", dataActive: "false" },
            { id: "cat2choice9", name: "choice 9", dataActive: "false" },
            { id: "cat2choice10", name: "choice 10", dataActive: "false" }
          ]
        }


       ]
    };
  }

  toggleMenu(e, index) {
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

  handleKeyboardForMenubar(e,index){

  }


  handleKeyboardForChoices(e, index) {
    var updatedCategories = [];
    updatedCategories = this.state.Categories;

    for (let i = 0; i < updatedCategories[index].choices.length; i++) {
      updatedCategories[index].choices[i].dataActive = "false";
    }

    var max = updatedCategories[index].choices.length - 1;

    if (e.keyCode === 40) {
      //down arrow
      if (this.state.Categories[index].activeDescIndexChoices < max) {
        updatedCategories[index].activeDescIndexChoices = this.state.Categories[
          index
        ].activeDescIndexChoices + 1;
        updatedCategories[index].choices[
          updatedCategories[index].activeDescIndexChoices
        ].dataActive = "true";
      } else {
        updatedCategories[index].activeDescIndexChoices = 0;
        updatedCategories[index].choices[0].dataActive = "true";
      }
    }

    if (e.keyCode === 38) {
      //up arrow key
      if (this.state.Categories[index].activeDescIndexChoices > 0) {
        updatedCategories[index].activeDescIndexChoices = this.state.Categories[
          index
        ].activeDescIndexChoices - 1;
        updatedCategories[index].choices[
          updatedCategories[index].activeDescIndexChoices
        ].dataActive = "true";
      } else {
        updatedCategories[index].activeDescIndexChoices = max;
        updatedCategories[index].choices[max].dataActive = "true";
      }
    }

    this.setState({
      Categories: updatedCategories
    });
  }

  render() {
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
          <div
            id="menubar"
            tabIndex="0"
            role="menubar"
            aria-label="navigation menu bar"
            onKeyDown={e => this.handleKeyboardForMenubar(e)}
          >
            {this.state.Categories.map((category, index) => (
              <div key={index}>
                <button
                  onClick={e => this.toggleMenu(e, index)}
                  aria-haspopup="true"
                  aria-expanded={category.ariaExpanded}
                >
                  {category.buttonLabel}
                </button>
                <div
                  role="menu"
                  tabIndex="0"
                  aria-label={category.menuLabel}
                  aria-activedescendant={
                    category.choices[category.activeDescIndexChoices].id
                  }
                  onKeyDown={e => this.handleKeyboardForChoices(e, index)}
                >
                  {category.choices.map((choice, index) => (
                    <div
                      key={index}
                      id={choice.id}
                      role="menuitem"
                      data-active={choice.dataActive}
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
