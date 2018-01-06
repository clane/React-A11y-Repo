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
  render() {
    return (
      <div className="App">
	<Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>A11y React Demo</title>
        </Helmet>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="Reacts official logo" />
          <h1 className="App-title">A11y React Demo</h1>
	</header>

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
