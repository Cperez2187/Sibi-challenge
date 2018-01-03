import React, { Component } from 'react';

import Input from './Input.js';
import SubmitButton from './SubmitButton.js';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zipcode: 0
    };
    // Contact object to hold live contact info before updating
    this.contact = Object.assign({}, this.state);

    // Bind methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    // Reset contact form info
    document.getElementById('contact-form').reset();
    console.log(this.contact);

    // Reset contact object
    for (const key in this.contact) {
      this.contact[key] = '';
    }
    console.log(this.contact);
  }

  //Handles form submission
  handleSubmit(event) {
    // Prevent page from reloading after submit
    event.preventDefault();

    // Update state values
    this.setState(this.contact, () => console.log(this.state));
  }

  //Handle value change of input fields in real time
  handleChange(event) {
    const { id, value } = event.target;
    this.contact[id] = value;

    console.log(this.contact);
  }

  render() {
    return (
      <form className="col s12" id="contact-form" onSubmit={this.handleSubmit}>
        <div className="row">
          <Input
            col="col s12 m6"
            inputId="first_name"
            label="First Name"
            inputType="text"
            onChange={this.handleChange}
          />
          <Input
            col="col s12 m6"
            inputId="last_name"
            label="Last Name"
            inputType="text"
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          <Input
            col="col s12 m6"
            inputId="email"
            label="Email"
            inputType="email"
            onChange={this.handleChange}
          />
          <Input
            col="col s12 m6"
            inputId="phone"
            label="Phone"
            inputType="tel"
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          <Input
            col="col s12"
            inputId="address"
            label="Address"
            inputType="text"
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          <Input
            col="col s12 m6"
            inputId="city"
            label="City"
            inputType="text"
            onChange={this.handleChange}
          />
          <Input
            col="col s4 m2"
            inputId="state"
            label="State"
            inputType="text"
            onChange={this.handleChange}
          />
          <Input
            col="col s8 m4"
            inputId="zipcode"
            label="Zipcode"
            inputType="text"
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          <SubmitButton />
        </div>
      </form>
    );
  }
}
