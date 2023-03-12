
import React, { Component } from 'react'

 class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    handleClick = () => {
       this.setState(prevState => ({
        count: prevState.count +1
       }));
    }

  render() {
    return (
      <div>
      <h1> current count: {this.state.count}</h1>
      <button onClick={this.handleClick}> click me </button>
      </div>
    )
  }
}


export default ClickCounter;

// Create a ClickCounter class component that increments a counter every time a user clicks on a button. 
// Render both the current value of the counter and the button within the ClickCounter component.
