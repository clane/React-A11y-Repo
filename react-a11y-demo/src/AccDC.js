import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class AccDC extends Component {

  componentDidMount() {
    this.topHeading.focus();
  }

  render() {
    return (
      <div className="accdc">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>AccDC</title>
        </Helmet>
        <h2 
          tabIndex="-1"
          ref={componentH2 => {
            this.topHeading = componentH2;
          }}
         >
         AccDC and React</h2>
      </div>
         
    );
  }
}

export default AccDC;
