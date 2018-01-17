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
this.nodes[4].focus();

} 

render() {
  //http://www.mattzabriskie.com/blog/react-referencing-dynamic-childrenhttp://www.mattzabriskie.com/blog/react-referencing-dynamic-children
  
   //var index = 0; 

    return (
      <div>
      <div tabIndex="-1" ref={node => {this.nodes[0] = node;}} >0</div>
      <div tabIndex="-1" ref={node => {this.nodes[1] = node;}} >1</div>
      <div tabIndex="-1" ref={node => {this.nodes[2] = node;}} >2</div>
      <div tabIndex="-1" ref={node => {this.nodes[3] = node;}} >3</div>
      <div tabIndex="-1" ref={node => {this.nodes[4] = node;}} >4</div>
      <div tabIndex="-1" ref={node => {this.nodes[5] = node;}} >5</div>
      <div tabIndex="-1" ref={node => {this.nodes[6] = node;}} >6</div>
      <div tabIndex="-1" ref={node => {this.nodes[7] = node;}} >7</div>
      <div tabIndex="-1" ref={node => {this.nodes[8] = node;}} >8</div>
      <div tabIndex="-1" ref={node => {this.nodes[9] = node;}} >9</div>
      </div>
    );
  }

}


export default RefsTest;
