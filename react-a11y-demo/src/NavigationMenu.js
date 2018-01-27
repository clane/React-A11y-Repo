import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./NavigationMenu.css";

class NavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.menuRefs = [];
    this.categoryRefs = [];
    this.state = {
      activeDescMenubar: "categoryButton1",
      activeMenuIndex: 0, 
      Categories: [
        {
          id: "categoryButton1",
					tabIndex: 0,
          buttonLabel: "Category 1",
          menuLabel: "Category 1 menu",
          activeDescIndexChoices: 0,
          ariaExpanded: false,
          ariaHidden: true,
          choices: [
            { id: "cat1choice1", name: "choice 1", choicesActiveDescendant: "false" },
            { id: "cat1choice2", name: "choice 2", choicesActiveDescendant: "false" },
            { id: "cat1choice3", name: "choice 3", choicesActiveDescendant: "false" },
            { id: "cat1choice4", name: "choice 4", choicesActiveDescendant: "false" },
            { id: "cat1choice5", name: "choice 5", choicesActiveDescendant: "false" },
            { id: "cat1choice6", name: "choice 6", choicesActiveDescendant: "false" },
            { id: "cat1choice7", name: "choice 7", choicesActiveDescendant: "false" },
            { id: "cat1choice8", name: "choice 8", choicesActiveDescendant: "false" },
            { id: "cat1choice9", name: "choice 9", choicesActiveDescendant: "false" },
            { id: "cat1choice10", name: "choice 10", choicesActiveDescendant: "false" }
          ]
        },
        {
          id: "categoryButton2",
					tabIndex: 0,
          buttonLabel: "Category 2",
          menuLabel: "Category 2 menu",
          activeDescIndexChoices: 0,
          ariaExpanded: false,
          ariaHidden: true,
          choices: [
            { id: "cat2choice1", name: "choice 11", choicesActiveDescendant: "false" },
            { id: "cat2choice2", name: "choice 12", choicesActiveDescendant: "false" },
            { id: "cat2choice3", name: "choice 13", choicesActiveDescendant: "false" },
            { id: "cat2choice4", name: "choice 14", choicesActiveDescendant: "false" },
            { id: "cat2choice5", name: "choice 15", choicesActiveDescendant: "false" },
            { id: "cat2choice6", name: "choice 16", choicesActiveDescendant: "false" },
            { id: "cat2choice7", name: "choice 17", choicesActiveDescendant: "false" },
            { id: "cat2choice8", name: "choice 18", choicesActiveDescendant: "false" },
            { id: "cat2choice9", name: "choice 19", choicesActiveDescendant: "false" },
            { id: "cat2choice10", name: "choice 20", choicesActiveDescendant: "false" }
          ]
        }
      ]
    };
  }

  toggleMenu(e, index) {
    let updatedCategories = [];
    updatedCategories = this.state.Categories;
    if(this.state.Categories[index].ariaExpanded === false){
      updatedCategories[index].ariaExpanded = true;
      updatedCategories[index].ariaHidden = false;
    } else { 
      updatedCategories[index].ariaExpanded = false;
      updatedCategories[index].ariaHidden = true;
    }
    //close all other menus
    for (let i = 0; i < updatedCategories.length; i++) {
      if(i !== index){
        updatedCategories[i].ariaExpanded = false;
      } 
    }
    this.setState({
      Categories: updatedCategories,
      activeMenuIndex: index
    });
    
    if(updatedCategories[index].ariaExpanded === true){
      this.menuRefs[this.state.activeMenuIndex].focus();
		}
  }

  manageArrowKeysForCategories(e, index) {
    let updatedCategories = [];
    updatedCategories = this.state.Categories;

    var updatedIndex = index;
		var max = this.state.Categories.length - 1;

    for (let i = 0; i < updatedCategories.length; i++) {
      updatedCategories[i].tabIndex = -1;
    }

    //right arrow key
    if (e.keyCode === 39) {
			if(index === max){
        updatedIndex = 0;
			} else {
          updatedIndex = updatedIndex + 1;
		  }
    }  

    //left arrow key
    if (e.keyCode === 37) {
			if(index === 0){
        updatedIndex = max;
			} else {
          updatedIndex = updatedIndex - 1;
			} 
    }

    updatedCategories[updatedIndex].tabIndex = 0;

    this.categoryRefs[updatedIndex].focus();

    this.setState({
			Categories: updatedCategories,
			activeIndexCategories: updatedIndex, 
      activeMenuIndex: updatedIndex, 
    });
  }

  handleKeyboardForChoices(e, index) {
    var updatedCategories = [];
    updatedCategories = this.state.Categories;

    for (let i = 0; i < updatedCategories[index].choices.length; i++) {
      updatedCategories[index].choices[i].choicesActiveDescendant = "false";
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
        ].choicesActiveDescendant = "true";
      } else {
        	updatedCategories[index].activeDescIndexChoices = 0;
        	updatedCategories[index].choices[0].choicesActiveDescendant = "true";
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
        ].choicesActiveDescendant = "true";
      } else {
          updatedCategories[index].activeDescIndexChoices = max;
          updatedCategories[index].choices[max].choicesActiveDescendant = "true";
      }
    }

    this.setState({
      Categories: updatedCategories
    });
  }
  
	choiceHandler(e, index){
		console.log('in choiceHandler index = ' + index);
    alert('choice handled'); 
	}

  componentDidMount() {
    this.topHeading.focus();
  }
	

  render() {
    return (
      //BEGIN ROOT
      (
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
          {/* BEGIN NAVIGATION REGION */}
          <div role="navigation" aria-label="navigation menu of course">
            {/* BEGIN MENUBAR */}
            <div
              id="menubar"
              role="menubar"
              aria-label="navigation menu bar"
              aria-activedescendant={this.state.activeDescMenubar}
            >
              {this.state.Categories.map((category, index) => (
                <button
                  key={index}
								  tabIndex={category.tabIndex} 
                  id={category.id}
                  onClick={e => this.toggleMenu(e, index)}
                  onKeyDown={e => this.manageArrowKeysForCategories(e, index)}
                  aria-haspopup="true"
                  aria-expanded={category.ariaExpanded}
                  ref={categoryRef => {
                    this.categoryRefs[index] = categoryRef;
                  }}
                  data-active={category.categoriesActiveDescendant}
								  role="menuitem"
                >
                  {category.buttonLabel}
                </button>
              ))}
            </div>
            {/* END MENUBAR */}
            {/* BEGIN MENUS */}
            <div id="menusContainer">
              {this.state.Categories.map((category, index) => (
                <div
                  key={index}
                  role="menu"
                  tabIndex="-1"
                  aria-label={category.menuLabel}
                  aria-activedescendant={
                    category.choices[category.activeDescIndexChoices].id
                  }
                  onKeyDown={e => this.handleKeyboardForChoices(e, category.activeDescIndexChoices)}
                  ref={menuRef => {
                    this.menuRefs[index] = menuRef;
                  }}
                  data-aria-expanded={category.ariaExpanded}
                  aria-hidden={category.ariaHidden} 
                >
                  {category.choices.map((choice, index) => (
                    <div
                      key={index}
                      id={choice.id}
                      role="menuitem"
                      data-active={choice.choicesActiveDescendant}
                      onKeyDown={e => this.choiceHandler(e, index)}
                      onClick={e => this.choiceHandler(e, index)}
                    >
                      {choice.name}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* END MENUS */}
          </div>
          {/* END NAVIGATION REGION */}
        </div>
      )
      //END ROOT
    );
  }
}

export default NavigationMenu;
