import React, { Component } from "react";
import { Helmet } from "react-helmet";

class SimpleNav extends Component {

  render() {
    let links = [];
    for (let i = 0; i < 50; i++) {
      let href = i + ".html";
      let linkText = "link " + i;
      links.push(<a href={href} key={i}>{linkText}</a>);
    }

    return (
      <div className="simple-nav">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Simple Navigation</title>
        </Helmet>
        <h2
          tabIndex="-1"
          ref={componentH2 => {
            this.topHeading = componentH2;
          }}
        >
          Simple Navigation Menu
        </h2>
        <div role="navigation" aria-label="navigation menu">
          {links}        
        </div>
      </div>
    );
  }
}

export default SimpleNav;
