import React, { Component } from 'react';
import './App.css';
import { Helmet } from "react-helmet";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import NavigationList from './NavigationList.js';
import HomePage from './HomePage.js';
import Game from './Game.js';
import Slideshow from './Slideshow.js';
import logo from './logo.svg';

class App extends Component {

  constructor() {
    super();
    this.state={
      skipLinkVisible: false 
    }
  }
 
  skipLinkFocus(){
    this.setState({
      skipLinkVisible: true
    });
  } 

  skipLinkClick(){
    this.skipTarget.focus();
  } 

  shouldComponentUpdate(prevProps,prevState){
    if(prevState.skipLinkVisible && !this.state.skipLinkVisible){
      return true;
    } else {
        return false;
    } 
  }

  render() {

    let skipLinkClass;

    if(this.state.skipLinkVisible){
        skipLinkClass = null;
    } else {
        skipLinkClass = "offscreenText";
    }

    return (
      <div className="App">
	<Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>A11y React Demo</title>
        </Helmet>

			  <div id="top" tabindex="-1" >Top Element</div>

        <a id="skipLink" className={skipLinkClass} onFocus={e => this.skipLinkFocus(e)} onClick={e => this.skipLinkClick(e)} href="#content">Skip to main content</a>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="Reacts official logo" />
          <h1 className="App-title">A11y React Demo</h1>
	</header>

        <div id="skipTarget" tabIndex="-1" ref={(node) => {this.skipTarget = node;}} className={skipLinkClass}>[main content]</div>

      <BrowserRouter>
  	  <div>
	    <NavigationList/>
            <Switch>
              <Route path="/HomePage" component={HomePage} />
              <Route path="/Game" component={Game} />
              <Route path="/Slideshow" component={Slideshow} />
	            <Redirect from="/" to="/HomePage"/>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}


export default App;
