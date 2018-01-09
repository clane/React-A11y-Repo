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

        <a className={skipLinkClass} onFocus={e => this.skipLinkFocus(e)} id="skipLink" href="#content">Skip to main content</a>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="Reacts official logo" />
          <h1 className="App-title">A11y React Demo</h1>
	</header>

        <a className={skipLinkClass} id="skipTarget" name="content">[main content]</a>

        <BrowserRouter>
  	  <div>
	    <NavigationList/>
            <Switch>
              <Route path="/HomePage" component={HomePage} />
              <Route path="/Game" component={Game} />
	      <Redirect from="/" to="/HomePage"/>
            </Switch>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}


export default App;
