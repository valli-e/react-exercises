import React from 'react';
import  { Counter } from './Counter'

class App extends React.Component{
  render() {
    return (
      <div>
      <Counter initialValue={10} incrementAmount= {5} incrementIntervals={1000} />
      </div>
    );
  }
}

export default App;
