import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import "./Carousel.css";

class Carousel extends Component {

  componentDidMount() {
    this.topHeading.focus();
  }

  render() {

//https://api.cryptokitties.co/kitties?owner_wallet_address=0x8ae2d55229abe73665ba982c36c7bc8b84200665

    return (
      <div className="home-page">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
        <h2 
          tabIndex="-1"
          ref={componentH2 => {
            this.topHeading = componentH2;
          }}
         >
         Carousel</h2>
         <div id="carousel">
           <div id="slidesContainer">           
		   <div className="slide">
		     <img alt="" width="250px" height="250px" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/293931.svg"/>
		     <h3>Kitten 293931</h3>
		     <p>
		       Good day! I'm Casper Jumpy. I want to live in a world where people believe the world is flat. In my free time, I can usually be found tantalizing or prank-calling celebrities. This will be an amewsing friendship.
		    </p>
		   </div>

		   <div className="slide">
		     <img alt="" width="250px" height="250px" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/271631.svg"/>
		     <h3>Kitten 271631</h3>
		     <p>
	*waves*! I'm Kitty #271631. I want to live in a world where people believe that one day cats will rule this planet. I would give it all up to star in a soap opera. Will you be the marmalade to my ranch dressing?
		    </p>
		   </div>

		  <div className="slide">
		     <img alt="" width="250px" height="250px" src="https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/44215.svg"/>
		     <h3>Kitten 44215</h3>
		     <p>
	Sup playa! Bubba Kush here. I'm here to enjoy spinning sick beats and tricking babies. I'm convinced that that one day cats will rule this planet. One day I'll prove it. I can't wait to wake you up at 4am for seemingly no reason.
		    </p>
		  </div>
          </div>

          <div id="controls">
            <button>Previous</button>
            <button>Next</button>
          </div>


         </div>
       </div>
    );
  }
}

export default Carousel;
