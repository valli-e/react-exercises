import React from 'react';
import Login from './Login'

function App() {
  const onLogin = (state) => {
    console.log(state);
  }

  return (
    <div>
      <Login onLogin={onLogin}/>
    </div>
  );
}

export default App;
