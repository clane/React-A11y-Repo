import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class HomePage extends Component {

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
         Welcome to my A11y React Demo</h2>
        <p>I will be presenting examples of accessible React components here. This is a work in progress. The code can be found at <a href="https://github.com/clane/React-A11y-Repo">https://github.com/clane/React-A11y-Repo</a>.</p>
      </div>
    );
  }
}

export default HomePage;
