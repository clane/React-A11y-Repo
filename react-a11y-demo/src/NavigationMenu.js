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
    if(this.state.Categories[index].ariaExpanded === false){
			this.showCategory(index);
    } else { 
        this.hideCategory(index); 
    }
  }

  showCategory(index) {
    let updatedCategories = [];
    updatedCategories = this.state.Categories;
    //close all other menus
    for (let i = 0; i < updatedCategories.length; i++) {
      if(i !== index){
        updatedCategories[i].ariaExpanded = false;
      } 
    }
    updatedCategories[index].ariaExpanded = true;
    updatedCategories[index].ariaHidden = false;
    this.setState({
      Categories: updatedCategories,
      activeMenuIndex: index
    });
  }
	
  hideCategory(index) {
    let updatedCategories = [];
    updatedCategories = this.state.Categories;
		updatedCategories[index].ariaExpanded = false;
		updatedCategories[index].ariaHidden = true;
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
      updatedCategories[updatedIndex].choiceRefs[updatedCategories[updatedIndex].choiceIndex].focus();
    }

    this.setState({
			Categories: updatedCategories,
      activeMenuIndex: updatedIndex, 
    });
  }

  moveFocusToFirstChoice(e, index) {
    if (e.keyCode === 40) {
      //down arrow
      this.state.Categories[index].choiceRefs[this.state.Categories[index].choiceIndex].focus();
    }
  }
  
	handleKeydownForChoices(e, categoryIndex, choiceIndex){
    let updatedCategories = [];
    updatedCategories = this.state.Categories;
    var updatedChoiceIndex = choiceIndex;
		var max = this.state.Categories[categoryIndex].choices.length - 1;
    //down arrow key
    if (e.keyCode === 40) {
			if(choiceIndex === max){
        updatedChoiceIndex = 0;
			} else {
          updatedChoiceIndex = updatedChoiceIndex + 1;
		  }
    }  
    //up arrow key
    if (e.keyCode === 38) {
			if(choiceIndex === 0){
        updatedChoiceIndex = max;
			} else {
          updatedChoiceIndex = updatedChoiceIndex - 1;
			} 
    }

    updatedCategories[categoryIndex].choiceIndex = updatedChoiceIndex;
    this.state.Categories[categoryIndex].choiceRefs[updatedChoiceIndex].focus();

    this.setState({
			Categories: updatedCategories,
    });

    if (e.keyCode === 13) {
      alert('Mock navigation to ' + updatedCategories[categoryIndex].choices[updatedChoiceIndex].name); 
		}
	}

  HandleMouseEnterForChoices(e, categoryIndex){
    this.showCategory(categoryIndex);
    this.state.Categories[categoryIndex].choiceRefs[this.state.Categories[categoryIndex].choiceIndex].focus();
	}

  HandleMouseLeaveForChoices(e, categoryIndex){
    this.hideCategory(categoryIndex);
    this.state.Categories[categoryIndex].choiceRefs[this.state.Categories[categoryIndex].choiceIndex].focus();
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
          <div role="application" aria-label="navigation menu">
            {/* BEGIN MENUBAR */}
            <div
              id="menubar"
              role="menubar"
              aria-label="navigation menu bar"
            >
              {this.state.Categories.map((category, categoryIndex) => (
                <button
                  key={categoryIndex}
                  id={category.id}
                  onClick={e => this.toggleMenu(e, categoryIndex)}
                  onFocus={e => this.toggleMenu(e, categoryIndex)}
                  onMouseEnter={e => this.HandleMouseEnterForChoices(e,categoryIndex)}
                  onMouseLeave={e => this.HandleMouseLeaveForChoices(e, categoryIndex)}
                  onKeyDown={e => this.HandleKeydownForCategories(e, categoryIndex)}
                  aria-haspopup="true"
                  aria-expanded={category.ariaExpanded}
                  ref={categoryRef => {
                    this.categoryRefs[categoryIndex] = categoryRef;
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
              {this.state.Categories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  role="menu"
                  tabIndex="-1"
                  aria-label={category.menuLabel}
                  onKeyDown={e => this.moveFocusToFirstChoice(e, categoryIndex)}
                  ref={menuRef => {
                    this.menuRefs[categoryIndex] = menuRef;
                  }}
                  data-aria-expanded={category.ariaExpanded}
                  aria-hidden={category.ariaHidden} 
                >
                  {category.choices.map((choice, choiceIndex) => (
                    <a
										  tabIndex="-1"
                      key={choiceIndex}
                      id={choice.id}
                      role="menuitem"
                      onKeyDown={e => this.handleKeydownForChoices(e, categoryIndex, choiceIndex)}
                      ref={choiceRef => {
                        category.choiceRefs[choiceIndex] = choiceRef;
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
