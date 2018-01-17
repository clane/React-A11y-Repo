import React, { Component } from "react";
import { Helmet } from "react-helmet";


class RefsTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      links: [{href: 1}, {href:2}, {href:3}],
    }

  }


render() {
  //http://www.mattzabriskie.com/blog/react-referencing-dynamic-childrenhttp://www.mattzabriskie.com/blog/react-referencing-dynamic-children

    return (
      <div className="Refs-Test">
      </div>
    );
  }

}


export default RefsTest;
