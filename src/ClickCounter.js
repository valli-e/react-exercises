
// Add a side effect to the ClickCounter component from useState 01 
// that calls a onCounterChange function with the current value of the counter every time value of the counter changes. The function should be received as a prop.

import React, { useState,useEffect,Component } from "react";

// this is a prop that represents the function that should be called everytime the counter changes
export function ClickCounter(onCounterChange) {
  const [count, setСount] = useState(0);

  const handleClick = () => {
    setСount((prevCount) => prevCount + 1);
  };


  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);

  // we call this function with the current value of the count and we specify count and onCounterChange as dependencies for the effect to run whenever they change

  return (
    <div>
      <h1> current count: {count}</h1>
      <button onClick={handleClick}> click me </button>
    </div>
  );
}

export default ClickCounter;
