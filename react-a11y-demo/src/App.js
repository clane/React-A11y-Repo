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
      skipLinkVisible: false,
			routingOccurredState: false,
			routeTitle: "Top",
    }

		this.routeFocus = this.focusTop.bind(this);
		
		this.homeLinkText = "Home";
		this.gameLinkText = "Game";
		this.slideShowLinkText = "Carousel";

  }
 
  skipLinkFocus(){
    this.setState({
      skipLinkVisible: true
    });
  } 

	routingOccurred(title) {
		 console.log('routing occured'); 
     this.setState({
      routingOccurredState: true,
			routeTitle: title, 
    });

		
	} 

  skipLinkClick(){
    this.skipTarget.focus();
  } 

  focusTop(){
    console.log('in focus top'); 
    this.topElementRef.textContent = this.state.routeTitle;
    this.topElementRef.focus();
    this.setState({
      routingOccurredState: false 
    });


  } 


  shouldComponentUpdate(prevProps,prevState){
    if(
			  (prevState.skipLinkVisible && !this.state.skipLinkVisible) 
			  ||
			  (prevState.routingOccurredState && !this.state.routingOccurredState) 
		){
			console.log('should update'); 
      return true;
    } else {
        return false;
    } 
  }

	componentDidMount() {
    this.focusTop(); 
  }

	componentDidUpdate() {
		if(this.state.routingOccurredState){
      this.focusTop(); 
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
							<li><Link onClick={() => this.routingOccurred(this.homeLinkText)} to="HomePage"> {this.homeLinkText} </Link></li>
							<li><Link onClick={() => this.routingOccurred(this.gameLinkText)} to="Game"> {this.gameLinkText} </Link></li>
							<li><Link onClick={() => this.routingOccurred(this.slideShowLinkText)} to="Slideshow"> {this.slideShowLinkText} </Link></li>
						</ul>
					</div>

        <div id="skipTarget" tabIndex="-1" ref={(node) => {this.skipTarget = node;}} className={skipLinkClass}>[main content]</div>
            <Switch>
              <Route path="/HomePage" render={(props) => <HomePage {...props} focusTopMethod={this.routeFocus} slideShowLinkText={this.slideShowLinkText}  />}/>
              <Route path="/Slideshow" component={Slideshow} />
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
