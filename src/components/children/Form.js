import React, { Component } from "react";

import Input from "./Input.js";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <form action="" className="col s12">
            <div className="row">
              <Input inputId="first_name" label="First Name" inputType="text" />
              <Input inputId="last_name" label="Last Name" inputType="text" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
