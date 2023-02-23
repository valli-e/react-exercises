import React from "react";

function App({a,b}) {
  const sum = a + b;

  return (
    <div>
      <h1> The sum of {a} and {b} is {sum}!</h1>
    </div>
  )

function App() {
    const hello = <h1>Hello, World!</h1>
     
    return(
        <div>
            {hello}
        </div>
    );
}

export default App;