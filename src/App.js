import React from 'react';
import  Welcome  from './Welcome'

class App extends React.Component {
  render() {
    return (
      <div>
        < Welcome age={21} />
      </div>
    );
  }
}
export default App;
