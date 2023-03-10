import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialValue
    }
    setInterval(() => {
    this.setState((prevState) => {
      return({
        count: prevState.count +  props.incrementAmount
      })
    })
    },props.incrementIntervals)
  }
  render() {
    return (
      <div>
      <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

// Extract the h1 tag showing the count state variable into a new component 
// called CounterDisplay and render it within the Counter component, passing it the count state variable as a prop.
