import React, { Component } from "react";
import './App.css';

class RefsTest extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.nodes = [];
  }

componentDidMount(){
console.log('mounted');
console.log(this.nodes[0]);
this.nodes[0].focus();

} 

render() {
  //http://www.mattzabriskie.com/blog/react-referencing-dynamic-childrenhttp://www.mattzabriskie.com/blog/react-referencing-dynamic-children
  
   var index = 0; 

    return (
      <div tabIndex="-1" ref={node => {this.nodes[index] = node;}} >
        foo
        {index}
      </div>

    );
  }

}


export default RefsTest;
