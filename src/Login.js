// Modify the Login component from Forms 03 so that the "login" button background color is "red" when the inputted password's
//  length is shorter than 8 characters, green otherwise.

import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
    passwordLength: 0, // Step 1
  };

  handleInputs = (event) => {
    let value = event.target.value;
    let checked = event.target.checked;
    let name = event.target.name;

    if (name === "password") {
      this.setState({
        [name]: value ?? checked,
        passwordLength: value.length, // Step 2
      });
    } else {
      this.setState({
        [name]: value ?? checked,
      });
    }
  };

  render() {
    const { passwordLength } = this.state; // Step 1

    const buttonStyle = { // Step 3
      backgroundColor: passwordLength < 8 ? "red" : "green",
    };

    return (
      <div>
        <input
          type="text"
          onChange={this.handleInputs}
          name="username"
          placeholder="Username"
        />
        <input
          type="password"
          onChange={this.handleInputs}
          name="password"
          placeholder="Password"
        />
        <input
          type="checkbox"
          onChange={this.handleInputs}
          name="remember"
        />
        <button onClick={() => this.props.onLogin(this.state)} style={buttonStyle}>Login</button> {/* Step 4 */}
      </div>
    );
  }
}

export default LoginForm;
