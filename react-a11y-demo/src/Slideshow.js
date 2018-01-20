import React, { Component } from "react";
import { Helmet } from "react-helmet";
import cat1 from "./catImages/293931.svg";
import cat2 from "./catImages/271631.svg";
import cat3 from "./catImages/44215.svg";
import cat4 from "./catImages/288702.svg";
import cat5 from "./catImages/226476.svg";
import cat6 from "./catImages/163514.svg";
import cat7 from "./catImages/273163.svg";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.slideShowWidth =  600;
    this.slideWidth =  600;
    this.slidePosition =  "absolute";
    this.slideFloatDirection = "left";
    this.transitionDuration = "300ms";
    this.state = {
      currentSlideIndex: 0,
      liveRegionEntries: [],
      currentLiveRegionIndex: 1,
      prevButtonDisabled: true,
      nextButtonDisabled: false,
      slides: [
        { 
          id: "slide1", 
          img: cat1,
          heading: "Kitten 293931",
          desc: "Good day! I'm Casper Jumpy. I want to live in a world where people believe the world is flat. In my free time, I can usually be found tantalizing or prank-calling celebrities. This will be an amewsing friendship.",
          translateLeft: 0,
        },
        {
          id: "slide2", 
          img: cat2,
          heading: "Kitten 271631",
          desc: "*waves*! I'm Kitty #271631. I want to live in a world where people believe that one day cats will rule this planet. I would give it all up to star in a soap opera. Will you be the marmalade to my ranch dressing?",
          translateLeft: 0,
        },
        {
          id: "slide3", 
          img: cat3,
          heading: "Kitten 44215",
          desc: "Sup playa! Bubba Kush here. I'm here to enjoy spinning sick beats and tricking babies. I'm convinced that that one day cats will rule this planet. One day I'll prove it. I can't wait to wake you up at 4am for seemingly no reason.",
          translateLeft: 0,
        },

      ],
     };
  }

  getCurrentSlide() {
    let currentSlideIndex = this.state.currentSlideIndex;
    return currentSlideIndex;
  }

  setButtonStates(currentSlideIndex){
    if(currentSlideIndex < 1){
      this.setState({
        prevButtonDisabled: true,
      });
    } else { 
        this.setState({
          prevButtonDisabled: false,
        });
    }  
    if(currentSlideIndex === (this.state.slides.length - 1)){
      this.setState({
        nextButtonDisabled: true,
      });
    } else {
        this.setState({
          nextButtonDisabled: false,
      });

    }  
  } 

  showPreviousSlide() {
    let currentSlideIndex = this.getCurrentSlide();
    if (currentSlideIndex > 0) {
      let updatedSlides = this.state.slides;
      updatedSlides = this.state.slides;
      this.setState({
        slides: updatedSlides,
        currentSlideIndex: currentSlideIndex - 1
      });
      this.setButtonStates(currentSlideIndex - 1); 
    }
  }

  showNextSlide() {
    let currentSlideIndex = this.getCurrentSlide();
    if (currentSlideIndex < this.state.slides.length - 1) {
      let updatedSlides = this.state.slides;
      this.setState({
        slides: updatedSlides,
        currentSlideIndex: currentSlideIndex + 1
      });
      let indexDifference = this.state.currentLiveRegionIndex -
        this.state.currentSlideIndex;
      if (indexDifference === 1) {
        this.updateLiveRegion();
      }
      this.setButtonStates(currentSlideIndex + 1); 
    }
  }

  initLiveRegion() {
    let updatedLiveRegionEntries = this.state.liveRegionEntries;
    let index = 0;
    let newEntry = this.state.slides[index].heading +
      " " +
      this.state.slides[index].desc;
    updatedLiveRegionEntries.push(newEntry);
    this.setState({
      liveRegionEntries: updatedLiveRegionEntries
    });
  }

  updateLiveRegion() {
    let updatedLiveRegionEntries = this.state.liveRegionEntries;
    let index = this.state.currentLiveRegionIndex;
    let newEntry = this.state.slides[index].heading +
      " " +
      this.state.slides[index].desc;
    updatedLiveRegionEntries.push(newEntry);
    this.setState({
      liveRegionEntries: updatedLiveRegionEntries,
      currentLiveRegionIndex: index + 1
    });
  }

  componentDidMount() {
    this.initLiveRegion();
  }
 
  render() {

    let slideContainerWidth = this.slideShowWidth * this.state.slides.length;

    let slideShowWrapper = { 
      width: this.slideShowWidth,
      position: "relative",
      overflow: "hidden",
    } 

    let slideContainerStyle = {
      width: slideContainerWidth,
      height: 900,
      position: "relative",
      overflow: "hidden",
      border: "2px solid #000",
    }

    let slideStyles = [];

    let leftPosition = 0;

    for(let i = 0; i < this.state.slides.length; i++){
      let transformString = "translate(" + this.state.slides[i].translateLeft + "px, 0px)";
      let style  = {
        position:this.slidePosition,
        float:this.slideFloatDirection,
        width:this.slideWidth,
        left:leftPosition,
        transitionDuration:this.transitionDuration,
        transform: transformString 
      }
      
      slideStyles.push(style);
      leftPosition = leftPosition - this.slideWidth;
    }
 
   
    let prevButtonDisabled = this.state.prevButtonDisabled;
    let nextButtonDisabled = this.state.nextButtonDisabled;

    return (
      <div>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Slide Show</title>
        </Helmet>
        <h2
          tabIndex="-1"
          ref={componentH2 => {
            this.topHeading = componentH2;
          }}
        >
          Carousel
        </h2>

        <div style={slideShowWrapper}>
          <div style={slideContainerStyle} aria-hidden="true">
            {this.state.slides.map((slide, index) => (
              <div id={slide.id} style={slideStyles[index]} key={index}>
                <img width="300px" height="300px" src={slide.img} alt="" />
                <h3>{slide.heading}</h3>
                <p>{slide.desc}</p>
              </div>
            ))}
          </div>
        </div>

          <div aria-live="polite" className="offscreenText">
            {this.state.liveRegionEntries.map((entry, index) => (
              <div key={index}>
                <p>{entry}</p>
              </div>
            ))}
          </div>

          <div id="controls">
            <button
              className="control"
              aria-label="previous slide"
              onClick={() => this.showPreviousSlide()}
              disabled={prevButtonDisabled}
            >
              &#8592;  
            </button>
            <button
              className="control"
              aria-label="next slide"
              onClick={() => this.showNextSlide()}
              disabled={nextButtonDisabled}
            >
              &#8594;
            </button>
          </div>
      </div>
    );
  }
}

export default Slideshow;
