import React, { Component } from "react";
import './App.css';

class RefsTest extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.nodes = [];
    this.linkRefs = [];
  }

componentDidMount(){
console.log('mounted');
//this.nodes[4].focus();
this.linkRefs[4].focus();

} 

render() {
  
   //var index = 0; 
let links = [];
    for (let i = 0; i < 50; i++) {
      let href = i + ".html";
      let linkText = "link " + i;
      links.push(<a ref={link => {this.linkRefs[i] = link;}} href={href} key={i}>{linkText}</a>);
    }

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


              <div role="navigation" aria-label="navigation menu">
                {links}        
              </div>
      </div>
    );
  }

}


export default RefsTest;
