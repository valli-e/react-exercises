// Create a Login component containing three inputs: a username input, a password input and a remember checkbox.
//  All three inputs should be controlled components.

import React, { Component } from "react";

  state = {
    username: "",
    password: "",
    remember: false,
  };

  handleInputs = (event) => {
    let value = event.target.value;
    let checked = event.target.checked;
    let name = event.target.name;
    console.log(checked)
    this.setState({
      [name]: value ?? checked
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleInputs}
          name="username"
          placeholder="Username"
        ></input>
        <input
          type="password"
          onChange={this.handleInputs}
          name="password"
          placeholder="Password"
        ></input>
        <input
          type="checkbox"
          onChange={this.handleInputs}
          name="remember"
        ></input>
        <button onClick={() => this.props.onLogin(this.state)}>Login</button>
      </div>
    );
  }
}
