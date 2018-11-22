import React, { Component } from 'react';
import { Helmet } from "react-helmet";

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
	Link
} from 'react-router-dom';

import Game from './Game.js';
import Slideshow from './Slideshow.js';


class HomePage extends Component {

  render() {
    return (
      <div className="home-page">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
        <h2>Welcome to my A11y React Demo</h2>
        <p>These examples demonstrate the following accessibility concepts:</p>
        <ul>
          <li>Contextual page titles</li>
          <li>Skip link</li>
          <li>Focus management when routing</li>
          <li>Focus management between components</li>
          <li>General keyboard accessibility</li>
          <li>Use of a polite live region</li>
          <li>Use of Offscreen text</li>
          <li>ARIA grid roles</li>
          <li>Dual focus using aria-activedescendant</li>
          <li>Use of aria-label</li>
          <li>Use of aria-hidden</li>
        </ul>
        <p>The code can be found at <a href="https://github.com/clane/React-A11y-Repo">https://github.com/clane/React-A11y-Repo</a>.</p>

						<Link to="Slideshow">Slideshow</Link>

            <Switch>
              <Route path="/Slideshow" component={Slideshow} />
            </Switch>


      </div>
         
    );
  }
}

export default HomePage;
