import React, { Component } from 'react';
import './App.css';
import { Helmet } from "react-helmet";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
	Link
} from 'react-router-dom'
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

  focusTop(title){
		console.log(title);
		this.topElementRef.textContent = title;
    this.topElementRef.focus();
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

			  <div id="top" tabIndex="-1"
			      ref={topRef => {
              this.topElementRef = topRef;
            }}
			   >
			       Top Element
			   </div>

        <a id="skipLink" className={skipLinkClass} onFocus={e => this.skipLinkFocus(e)} onClick={e => this.skipLinkClick(e)} href="#content">Skip to main content</a>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="Reacts official logo" />
          <h1 className="App-title">A11y React Demo</h1>
       	</header>


      <BrowserRouter>
  	  <div>

			 	 <div className="Navigation-List">
						<ul role="navigation">
							<li><Link onClick={() => this.focusTop("Home")} to="HomePage">Home</Link></li>
							<li><Link onClick={() => this.focusTop("Tic-Tac-Toe")} to="Game">Tic-Tac-Toe</Link></li>
							<li><Link onClick={() => this.focusTop("Slideshow")} to="Slideshow">Slideshow</Link></li>
						</ul>
					</div>

        <div id="skipTarget" tabIndex="-1" ref={(node) => {this.skipTarget = node;}} className={skipLinkClass}>[main content]</div>
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
