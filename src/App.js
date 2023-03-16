import React from 'react';
import Login from './Login;
class App extends React.Component{
  onLogin = (state) => {
    console.log(state);
  }
  render() {
    return (
      <div>
        <Login onLogin= {this.onLogin}/>
      </div>
    );
  }
}

export default App;

