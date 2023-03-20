import React from 'react';
import ClickCounter from './ClickCounter';

class App extends React.Component {
  onCountChange = (counter) => {
    console.log(`The value of the counter is ${counter}`);
  };

  render() {
    return (
      <div>
        <ClickCounter onCounterChange={this.onCountChange} />
      </div>
    );
  }
}

export default App;
