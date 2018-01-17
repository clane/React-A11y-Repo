import React, { Component } from "react";
import './App.css';

class RefsTest extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

componentDidMount(){
console.log('mounted');
console.log(this.node);
this.node.focus();

} 

render() {
  //http://www.mattzabriskie.com/blog/react-referencing-dynamic-childrenhttp://www.mattzabriskie.com/blog/react-referencing-dynamic-children

    return (
      <div tabIndex="-1" ref={node => {this.node = node;}} >
        foo
      </div>

    );
  }

}


export default RefsTest;
