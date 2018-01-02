import React, { Component } from 'react';
import './App.css';
import { Helmet } from "react-helmet";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ShoppingList from './ShoppingList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
	<Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>A11y React Demo</title>
        </Helmet>

        <header className="App-header">
          <h1 className="App-title">Welcome to my A11y React Demo</h1>
        </header>

<ShoppingList name="Mark" />
<Game/>
      </div>
    );
  }
}



function Square(props) {
  return (
    <td
      role="gridcell"
      id = {props.id}
      className="square"
      onKeyDown={props.onKeyDown}
      onClick={props.onClick}
      aria-label={props.squareLabel}
      data-active = {props.active}
    >
      {props.value}
    </td>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      activeD: 0
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      activeD: this.state.activeD
    });
    this.statusContainer.focus();
  }

  handleKeyboard(e) {
    if(e.keyCode === 40 || e.keyCode === 39){
      console.log('down arrow key pressed ' );
      this.setState((prevState) => {
        return {activeD: prevState.activeD + 1};
      });
    }
    if(e.keyCode === 38 || e.keyCode === 37){
      console.log('up arrow key pressed ' );
      this.setState((prevState) => {
        return {activeD: prevState.activeD - 1};
      });
    }

     if(e.keyCode === 13 ){
      console.log('Enter key pressed ' );
      this.handleClick(this.state.activeD);
    }
    

  }

  renderSquare(i) {

    let active = false; 

    if( i === this.state.activeD){
      active = true;
    }

    return (
      <Square
        id = {i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        squareLabel = {"square number " + i}
        active = {active}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (

      <div role="application" aria-label="tic-tac-toe">
        <div
          tabIndex="-1"
          className="status"
          ref={status => {
            this.statusContainer = status;
          }}
        >
          {status}
        </div>
        <table tabIndex="0"
          aria-label = "tic-tac-toe grid"
          aria-activedescendant = {this.state.activeD}
          role="grid" 
          cellPadding="0" 
          ref={board => {
            this.boardContainer = board;
          }}
          onKeyDown={e => this.handleKeyboard(e)}
        >
          <thead>
            <tr>
              <th role="presentation"></th>
              <th scope="col">Column 1</th>
              <th scope="col">Column 2</th>
              <th scope="col">Column 3</th>
            </tr>
          </thead>
          <tbody>
            <tr role="row" className="board-row">
              <th scope="row">Row 1</th>
             {this.renderSquare(0)}
             {this.renderSquare(1)}
             {this.renderSquare(2)}
            </tr>
            <tr role="row" className="board-row">
              <th scope="row">Row 2</th>
             {this.renderSquare(3)}
             {this.renderSquare(4)}
             {this.renderSquare(5)}
            </tr>
            <tr role="row" className="board-row">
              <th scope="row">Row 3</th>
             {this.renderSquare(6)}
             {this.renderSquare(7)}
             {this.renderSquare(8)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default App;
