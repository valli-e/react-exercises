import React from "react";

function App({a,b}) {
  const sum = a + b;

  return (
    <div>
      <h1> The sum of {a} and {b} is {sum}!</h1>
    </div>
  )
}

export default App;