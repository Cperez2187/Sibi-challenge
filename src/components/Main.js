/**
|--------------------------------------------------
| Main Component. Wraps all other components
|--------------------------------------------------
*/
import React, { Component } from 'react';

// Import child components
import NavBar from './children/NavBar.js';
import Form from './children/Form.js';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <div className="row">
            <NavBar />
          </div>
        </header>
        <div className="container">
          <div className="row">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}
