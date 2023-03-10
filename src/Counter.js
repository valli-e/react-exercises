import React from "react";

export class Counter extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue
    }
    setInterval(() => {
    this.setState((prevState) => {
      return({
        count: prevState.count + + props.incrementAmount
      })
    })
    },props.incrementIntervals)
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

// Modify the Counter component so that the initial value of the counter,
//  the increment interval and the increment amount are passed as props to the component.
