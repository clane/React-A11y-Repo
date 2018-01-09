import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class Carousel extends Component {

  componentDidMount() {
    this.topHeading.focus();
  }

  render() {
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
           <div id="slide1" className="slide">Slide 1</div>
           <div id="slide2" className="slide">Slide 2</div>
           <div id="slide3" className="slide">Slide 3</div>
           <div id="slide4" className="slide">Slide 4</div>
           <div id="slide5" className="slide">Slide 5</div>
         </div>
       </div>
    );
  }
}

export default Carousel;
