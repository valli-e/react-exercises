import React, { useState, Component } from 'react'

 export function ClickCounter(){

const[count, setСount] = useState(0);

const handleClick = () => {
  setСount(prevCount => prevCount +1)
}

    return (
      <div>
      <h1> current count: {count}</h1>
      <button onClick={handleClick}> click me </button>
      </div>
    )
  }


export default ClickCounter;

// Rewrite the ClickCounter component from Events 01 as a function component, and use the useState hook to track the state of the counter.
