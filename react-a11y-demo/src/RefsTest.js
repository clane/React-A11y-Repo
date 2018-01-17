import React, { Component } from "react";
import { Helmet } from "react-helmet";


class RefsTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [{href:"foo.html"}],
    }

  }


render() {
  //http://www.mattzabriskie.com/blog/react-referencing-dynamic-childrenhttp://www.mattzabriskie.com/blog/react-referencing-dynamic-children

    return (
      <div className="Refs-Test">
        {this.state.links.map((link, index) => (
          <div key={index}>
            <a>{link.href}</a>
          </div>
        ))}
      </div>

    );
  }

}


export default RefsTest;
