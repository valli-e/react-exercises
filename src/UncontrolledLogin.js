import React, { Component } from "react";

class UncontrolledLogin extends Component {
  constructor(props) {
    super(props);
    this.usernameInput = React.createRef();
    this.passwordInput = React.createRef();
    this.rememberInput = React.createRef();
  }

  handleLogin = (event) => {
    event.preventDefault();
    const username = this.usernameInput.current.value;
    const password = this.passwordInput.current.value;
    const remember = this.rememberInput.current.checked;
    this.props.onLogin({ username, password, remember });
  };
  handleReset = () => {
    this.usernameInput.current.value = "";
    this.passwordInput.current.value = "";
    this.rememberInput.current.checked = false;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <input type="text" name="username" ref={this.usernameInput} />
          <input type="password" name="password" ref={this.passwordInput} />
          <input type="checkbox" name="remember" ref={this.rememberInput} />
          <button type="submit">Login</button>
        </form>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default UncontrolledLogin;
