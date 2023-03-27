import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + this.props.incrementAmount
      }));
    }, this.props.incrementIntervals);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}
