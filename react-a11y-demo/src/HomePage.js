import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Home</title>
        </Helmet>
        <h2 tabIndex="-1">Welcome to my A11y React Demo</h2>
        <p>I will be presenting examples of accessible React components here.</p>
      </div>
    );
  }
}

export default HomePage;
