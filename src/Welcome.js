import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome, {this.props.name}!</p>
      </div>
    );
  }
}

export default Welcome;
