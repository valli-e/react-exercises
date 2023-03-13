// Create a Login component containing three inputs: a username input, a password input and a remember checkbox.
//  All three inputs should be controlled components.

import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handle = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const checked = event.target.checked;
    console.log(value,checked);
    console.log(this.state);

    if(name != 'remember') {
        this.setState({
            [name]:value
        })
    } else {
        this.setState({
            [name]:checked
        })
    }
  };

  render() {
    return (
      <div>
        <input type="text" name="username" onChange={this.handle} />
        <input type="password" name="password" onChange={this.handle} />
        <input type="checkbox" name="remember" onChange={this.handle} />
      </div>
    );
  }
}

export default Login;
