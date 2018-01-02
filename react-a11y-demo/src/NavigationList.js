import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavigationList extends Component {
  render() {
    return (
      <div className="Navigation-List">
        <ul role="navigation">
          <li><Link to="Game">Game</Link></li>
          <li><Link to="ShoppingList">Shopping List</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavigationList;
