import React, { Component } from "react";
import "./custom.css";

class Сontainer extends Component {
  render() {
    return( 
        <div>
        <div className="title">{this.props.title}</div>
        <div className="custom-container">{this.props.children}</div>
      </div>
    );
  }
}

export default Сontainer;

// Modify the Container component so that it can display a title received within the title prop.