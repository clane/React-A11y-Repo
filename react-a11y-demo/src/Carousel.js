import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import "./Carousel.css";
import cat1 from  "./293931.svg";
import cat2 from "./271631.svg";
import cat3 from "./44215.svg";

class Carousel extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      slides: [
       {className:"current", ariaHidden:"false", img:cat1,},
       {className:"notCurrent", ariaHidden: "true", img:cat2,},
       {className:"notCurrent", ariaHidden: "true", img:cat3,}
      ],
      currentSlideIndex: 0,
    };
  }

  getCurrentSlide(){
    let currentSlideIndex = this.state.currentSlideIndex;
    return currentSlideIndex;
  }
  
  showPreviousSlide(){
    let currentSlideIndex = this.getCurrentSlide();
    console.log(currentSlideIndex);
    if(currentSlideIndex > 0){
      let updatedSlides = this.state.slides;
      updatedSlides = this.state.slides;
      updatedSlides[currentSlideIndex].className = "notCurrent";
      updatedSlides[currentSlideIndex].ariaHidden = "true";
      updatedSlides[currentSlideIndex - 1].className = "current";
      updatedSlides[currentSlideIndex - 1].ariaHidden = "false";
      this.setState({
        slides: updatedSlides,
        currentSlideIndex: currentSlideIndex - 1
      });
    }    
  }

  showNextSlide(){
    let currentSlideIndex = this.getCurrentSlide();
    console.log(currentSlideIndex);
    if(currentSlideIndex < (this.state.slides.length - 1)){
      let updatedSlides = this.state.slides;
      updatedSlides = this.state.slides;
      updatedSlides[currentSlideIndex].className = "notCurrent";
      updatedSlides[currentSlideIndex].ariaHidden = "true";
      updatedSlides[currentSlideIndex + 1].className = "current";
      updatedSlides[currentSlideIndex + 1].ariaHidden = "false";
      this.setState({
        slides: updatedSlides,
        currentSlideIndex: currentSlideIndex + 1
      });
 
    } 
  }


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
         Carousel
         </h2>
         <div id="carousel">
           <div id="slidesContainer" aria-live="polite">           
		   <div className={this.state.slides[0].className} aria-hidden={this.state.slides[0].ariaHidden}>
                   <img width="250px" height="250px" src={this.state.slides[0].img} alt="" />

	     <h3>Kitten 293931</h3>
		     <p>
		       Good day! I'm Casper Jumpy. I want to live in a world where people believe the world is flat. In my free time, I can usually be found tantalizing or prank-calling celebrities. This will be an amewsing friendship.
		    </p>
		   </div>

		   <div className={this.state.slides[1].className} aria-hidden={this.state.slides[1].ariaHidden}>
                     <img width="250px" height="250px" src={this.state.slides[1].img} alt="" />
		     <h3>Kitten 271631</h3>
		     <p>
	*waves*! I'm Kitty #271631. I want to live in a world where people believe that one day cats will rule this planet. I would give it all up to star in a soap opera. Will you be the marmalade to my ranch dressing?
		    </p>
		   </div>

		  <div className={this.state.slides[2].className} aria-hidden={this.state.slides[2].ariaHidden}>
                     <img width="250px" height="250px" src={this.state.slides[2].img} alt="" />
		     <h3>Kitten 44215</h3>
		     <p>
	Sup playa! Bubba Kush here. I'm here to enjoy spinning sick beats and tricking babies. I'm convinced that that one day cats will rule this planet. One day I'll prove it. I can't wait to wake you up at 4am for seemingly no reason.
		    </p>
		  </div>
          </div>

          <div id="controls">
            <button onClick={() => this.showPreviousSlide()}>Previous</button>
            <button onClick={() => this.showNextSlide()}>Next</button>
          </div>


         </div>
       </div>
    );
  }
}

export default Carousel;
