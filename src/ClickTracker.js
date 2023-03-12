// Create a ClickTracker component that renders three buttons.
//  Implement a single event handler for all three buttons, and track of which button was pressed last.
// Show the last button that was pressed in an h1 tag within the ClickTracker component. 
// Tip: you can use the event object to access the target property of the event.

import React, { Component } from 'react'

export class ClickTracker extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         lastClicked: "null"
      };
    }
    handleClick = (event) => {
        this.setState({
            lastClicked: event.target.name
        })
    }
  render() {
    return (
      <div>
       <h1>{this.state.lastClicked}</h1> 
       <button name= "a" onClick={this.handleClick}>A</button>
       <button name= "b"onClick={this.handleClick}>B</button>
       <button name ="c" onClick={this.handleClick}>C</button>
        </div>
    )
  }
}

export default ClickTracker;
