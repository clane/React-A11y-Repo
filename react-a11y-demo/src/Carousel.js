import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./Carousel.css";
import cat1 from "./catImages/293931.svg";
import cat2 from "./catImages/271631.svg";
import cat3 from "./catImages/44215.svg";
import cat4 from "./catImages/288702.svg";
import cat5 from "./catImages/226476.svg";
import cat6 from "./catImages/163514.svg";
import cat7 from "./catImages/273163.svg";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        {
          className: "current",
          img: cat1,
          heading: "Kitten 293931",
          desc: "Good day! I'm Casper Jumpy. I want to live in a world where people believe the world is flat. In my free time, I can usually be found tantalizing or prank-calling celebrities. This will be an amewsing friendship."
        },
        {
          className: "notCurrent",
          heading: "Kitten 271631",
          img: cat2,
          desc: "*waves*! I'm Kitty #271631. I want to live in a world where people believe that one day cats will rule this planet. I would give it all up to star in a soap opera. Will you be the marmalade to my ranch dressing?"
        },
        {
          className: "notCurrent",
          img: cat3,
          heading: "Kitten 44215",
          desc: "Sup playa! Bubba Kush here. I'm here to enjoy spinning sick beats and tricking babies. I'm convinced that that one day cats will rule this planet. One day I'll prove it. I can't wait to wake you up at 4am for seemingly no reason."
        },

        {
          className: "notCurrent",
          img: cat4,
          heading: "Kitten 288702",
          desc: "What's up! I'm Kitty #288702. I'm a professional Culinary Sanitation Specialist and I love lasagna. When I'm not riding the bus, I'm siring for status! We're so fur-tunate to have found each other!"
        },

        {
          className: "notCurrent",
          img: cat5,
          heading: "Kitten 226476",
          desc: "Aloha! I'm Kitty #226476. All you need to know about me is I hate hamburgers with a passion. I was voted biggest teacher's pet in college. I hope you like kitten around as much as I do!"
        },

        {
          className: "notCurrent",
          img: cat6,
          heading: "Kitten 163514",
          desc: "What's up! I'm Wolfgrey. I'm a Ventriloquist by day, and I like siring for status by night. I am 71% wizard, 81% Dispensary Clerk, and otherwise bad at math. Can you make my brilliant dreams come true?"
        },

        {
          className: "notCurrent",
          img: cat7,
          heading: "Kitten 273163",
          desc: "*waves*! I'm Kitty #273163. I want to live in a world where people believe that one day cats will rule this planet. It wasn't heavily publicized, but I once had a brief relationship with Puss in Boots. We can be friends, but keep the ultra purrsonal stuff to yourself, please."
        }
      ],
      currentSlideIndex: 0,
      liveRegionEntries: [],
      currentLiveRegionIndex: 1,
      prevButtonDisabled: true,
      nextButtonDisabled: false,
      floatDirection: "right",
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
      updatedSlides[currentSlideIndex].className = "notCurrent";
      updatedSlides[currentSlideIndex - 1].className = "current";
      this.setState({
        slides: updatedSlides,
        currentSlideIndex: currentSlideIndex - 1,
        floatDirection: "right",
      });
      this.setButtonStates(currentSlideIndex - 1); 
    }
  }

  showNextSlide() {
    let currentSlideIndex = this.getCurrentSlide();
    if (currentSlideIndex < this.state.slides.length - 1) {
      let updatedSlides = this.state.slides;
      updatedSlides = this.state.slides;
      updatedSlides[currentSlideIndex].className = "notCurrent";
      updatedSlides[currentSlideIndex + 1].className = "current";
      this.setState({
        slides: updatedSlides,
        currentSlideIndex: currentSlideIndex + 1,
        floatDirection: "left",
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
    //https://api.cryptokitties.co/kitties/33333
    //https://api.cryptokitties.co/kitties?owner_wallet_address=0x8ae2d55229abe73665ba982c36c7bc8b84200665
   
    let prevButtonDisabled = this.state.prevButtonDisabled;
    let nextButtonDisabled = this.state.nextButtonDisabled;
   
    let slideStyle = {
      float: this.state.floatDirection,
    };




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
          <div id="slidesContainer" aria-hidden="true">
            {this.state.slides.map((slide, index) => (
              <div key={index} className={slide.className} style={slideStyle}>
                <img width="300px" height="300px" src={slide.img} alt="" />
                <h3>{slide.heading}</h3>
                <p>{slide.desc}</p>
              </div>
            ))}
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
              →
            </button>
          </div>
        </div>

      </div>
    );
  }
}

export default Carousel;
