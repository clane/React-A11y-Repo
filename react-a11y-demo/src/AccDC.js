import React, { Component } from "react";
import { Helmet } from "react-helmet";

class AccDC extends Component {
  componentDidMount() {
    this.topHeading.focus();
  }

  render() {

		let style = { display:'none' };

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
          AccDC and React
        </h2>

        <p>
          <button
            role="button"
            aria-haspopup="true"
            className="accMenu menu"
            data-src="#menu-options"
          >
            Options (Vertical Dropdown)
          </button>
        </p>

        <ol
          data-autoposition="11"
          data-offsetleft="25"
          title="Options"
          className="menu"
          id="menu-options"
			    style={style}
        >
          <li>
            <a href="#" className="submenu" id="-profile">
              Profile
            </a>
          </li>
        </ol>

      </div>
    ) /*  END accdc */;
  }
}

export default AccDC;
