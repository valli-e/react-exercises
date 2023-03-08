import React from "react";

class Age extends React.Component {
  render() {
    const val = this.props.age;
    return (
      <div>
        {this.props.age > 18 ? <p>Your age is {this.props.age}</p> : <p>You are very young!</p>}
      </div>
    );
  }
}
