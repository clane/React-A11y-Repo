import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Shopping List</title>
        </Helmet>
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
