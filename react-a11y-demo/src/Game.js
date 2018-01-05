import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./Game.css";

function Square(props) {
  return (
    <td
      role="gridcell"
      id={props.id}
      className="square"
      onKeyDown={props.onKeyDown}
      onClick={props.onClick}
      aria-label={props.squareLabel}
      data-active={props.active}
    >
      {props.value}
    </td>
  );
}

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(10).fill(null, 1),
      xIsNext: true,
      activeD: 1,
      clearButtonDisabled: true 
    };
    this.state.squares[0] = "unused square 0"; //needed to deal will index 0
  }

  clearBoard(e){
    this.setState({
      squares: Array(10).fill(null, 1),
      xIsNext: true,
      activeD: 1,
      clearButtonDisabled: true 
    });
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (squares[i]) {
      alert("Square " + i + " is already set to " + squares[i]);
    } else {
      squares[i] = this.state.xIsNext ? "X" : "O";
    }
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      activeD: this.state.activeD
    });
    this.statusContainer.focus();
  }

  handleKeyboard(e) {
    //right arrow key
    if (e.keyCode === 39) {
      this.setState(prevState => {
        if (prevState.activeD < 9) {
          return { activeD: prevState.activeD + 1 };
        } else {
          return { activeD: 1 };
        }
      });
    }
    if (e.keyCode === 37) {
      //left arrow key
      this.setState(prevState => {
        if (prevState.activeD > 1) {
          return { activeD: prevState.activeD - 1 };
        } else {
          return { activeD: 9 };
        }
      });
    }
    if (e.keyCode === 40) {
      //down arrow key
      this.setState(prevState => {
        if (prevState.activeD < 7) {
          return { activeD: prevState.activeD + 3 };
        } else {
          return { activeD: prevState.activeD };
        }
      });
    }
    if (e.keyCode === 38) {
      //up arrow key
      this.setState(prevState => {
        if (prevState.activeD > 3) {
          return { activeD: prevState.activeD - 3 };
        } else {
          return { activeD: prevState.activeD };
        }
      });
    }

    if (e.keyCode === 13) {
      //Enter key
      this.handleClick(this.state.activeD);
    }
  }

  renderSquare(i) {
    let active = false;

    if (i === this.state.activeD) {
      active = true;
    }

    return (
      <Square
        id={i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        squareLabel={"square number " + i}
        active={active}
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
      <div id="gameContainer" aria-label="tic-tac-toe">
        <div id="left">
          <h3>Game Status</h3>
          <div
            tabIndex="-1"
            className="status"
            ref={status => {
              this.statusContainer = status;
            }}
          >
            {status}
          </div>

          <button id="clear" disabled={this.state.clearButtonDisabled} onClick={e => this.clearBoard(e)}>Clear Board</button>

          <h3>Square Values Table</h3>
          <table id="squareValuesTable">
            <thead>
              <tr><th>Square Number</th><th>Value</th></tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>{this.state.squares[1]}</td></tr>
              <tr><td>2</td><td>{this.state.squares[2]}</td></tr>
              <tr><td>3</td><td>{this.state.squares[3]}</td></tr>
              <tr><td>4</td><td>{this.state.squares[4]}</td></tr>
              <tr><td>5</td><td>{this.state.squares[5]}</td></tr>
              <tr><td>6</td><td>{this.state.squares[6]}</td></tr>
              <tr><td>7</td><td>{this.state.squares[7]}</td></tr>
              <tr><td>8</td><td>{this.state.squares[8]}</td></tr>
              <tr><td>9</td><td>{this.state.squares[9]}</td></tr>
            </tbody>
          </table>
        </div>

        <div id="right">
          <h3>Game Board</h3>

          <table
            tabIndex="0"
            aria-label="tic-tac-toe grid"
            aria-activedescendant={this.state.activeD}
            role="grid"
            cellPadding="0"
            ref={board => {
              this.boardContainer = board;
            }}
            onKeyDown={e => this.handleKeyboard(e)}
          >
            <thead>
              <tr>
                <th role="presentation" />
                <th scope="col">Column 1</th>
                <th scope="col">Column 2</th>
                <th scope="col">Column 3</th>
              </tr>
            </thead>
            <tbody>
              <tr role="row" className="board-row">
                <th scope="row">Row 1</th>
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
              </tr>
              <tr role="row" className="board-row">
                <th scope="row">Row 2</th>
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
              </tr>
              <tr role="row" className="board-row">
                <th scope="row">Row 3</th>
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                {this.renderSquare(9)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export class Game extends Component {
  componentDidMount() {
    this.topHeading.focus();
  }

  render() {
    return (
      <div className="game">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Tic-Tac-Toe</title>
        </Helmet>
        <h2
          ref={componentH2 => {
            this.topHeading = componentH2;
          }}
          tabIndex="-1"
        >
          Tic-Tac-Toe
        </h2>

        <p>
          Tic-tac-toe is a game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.
        </p>

        <p>
          Each of the following sets of numbers represent winning combinations of squares when each square in the set is populated with one player's mark, X or O: [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9],`[1, 5, 9], [3, 5, 7]. Screen reader users can use the Square Values Table below to determine if they have populated a winning set of squares with thier respective marks.
        </p>

        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  console.log(squares);

  const lines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

      this.setState(prevState => {
        return { clearButtonDisabled: false };
      });
      return squares[a];
    }
  }
  return null;
}

export default Game;
