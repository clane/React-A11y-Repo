import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./NavigationMenu.css";

class NavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.menuRefs = [];
    this.categoryRefs = [];
    this.state = {
      activeMenuIndex: 0, 
      Categories: [
        {
          id: "categoryButton1",
          buttonLabel: "Category 1",
          menuLabel: "Category 1 menu",
          ariaExpanded: false,
          ariaHidden: true,
          choiceRefs: [],
					choiceIndex: 0,
          choices: [
            { id: "cat1choice1", name: "choice 1", },
            { id: "cat1choice2", name: "choice 2", },
            { id: "cat1choice3", name: "choice 3", },
            { id: "cat1choice4", name: "choice 4", },
            { id: "cat1choice5", name: "choice 5", },
            { id: "cat1choice6", name: "choice 6", },
            { id: "cat1choice7", name: "choice 7", },
            { id: "cat1choice8", name: "choice 8", },
            { id: "cat1choice9", name: "choice 9", },
            { id: "cat1choice10", name: "choice 10", }
          ]
        },
        {
          id: "categoryButton2",
          buttonLabel: "Category 2",
          menuLabel: "Category 2 menu",
          ariaExpanded: false,
          ariaHidden: true,
          choiceRefs: [],
					choiceIndex: 0,
          choices: [
            { id: "cat2choice1", name: "choice 11", },
            { id: "cat2choice2", name: "choice 12", },
            { id: "cat2choice3", name: "choice 13", },
            { id: "cat2choice4", name: "choice 14", },
            { id: "cat2choice5", name: "choice 15", },
            { id: "cat2choice6", name: "choice 16", },
            { id: "cat2choice7", name: "choice 17", },
            { id: "cat2choice8", name: "choice 18", },
            { id: "cat2choice9", name: "choice 19", },
            { id: "cat2choice10", name: "choice 20", }
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
    
  }

  HandleKeydownForCategories(e, index) {
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
      this.categoryRefs[updatedIndex].focus();
    }  

    //left arrow key
    if (e.keyCode === 37) {
			if(index === 0){
        updatedIndex = max;
			} else {
          updatedIndex = updatedIndex - 1;
			} 
      this.categoryRefs[updatedIndex].focus();
    }

     if (e.keyCode === 40) {
      //down arrow
			console.log('down arrow'); 
      updatedCategories[updatedIndex].choiceRefs[updatedCategories[updatedIndex].choiceIndex].focus();
    }

    this.setState({
			Categories: updatedCategories,
      activeMenuIndex: updatedIndex, 
    });
  }

  moveFocusToFirstChoice(e, index) {
    if (e.keyCode === 40) {
			console.log('down arrow'); 
      //down arrow
      this.state.Categories[index].choiceRefs[this.state.Categories[index].choiceIndex].focus();
    }
  }
  
	HandleKeydownForChoices(e, index){
    if (e.keyCode === 13) {
      alert('choice handled'); 
		}
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
            >
              {this.state.Categories.map((category, index) => (
                <button
                  key={index}
                  id={category.id}
                  onClick={e => this.toggleMenu(e, index)}
                  onFocus={e => this.toggleMenu(e, index)}
                  onKeyDown={e => this.HandleKeydownForCategories(e, index)}
                  aria-haspopup="true"
                  aria-expanded={category.ariaExpanded}
                  ref={categoryRef => {
                    this.categoryRefs[index] = categoryRef;
                  }}
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
                  onKeyDown={e => this.moveFocusToFirstChoice(e, index)}
                  ref={menuRef => {
                    this.menuRefs[index] = menuRef;
                  }}
                  data-aria-expanded={category.ariaExpanded}
                  aria-hidden={category.ariaHidden} 
                >
                  {category.choices.map((choice, index) => (
                    <a
										  tabIndex="-1"
                      key={index}
                      id={choice.id}
                      role="menuitem"
                      onKeyDown={e => this.HandleKeydownForChoices(e, index)}
                      ref={choiceRef => {
                        category.choiceRefs[index] = choiceRef;
                      }}
                    >
                      {choice.name}
                    </a>
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
