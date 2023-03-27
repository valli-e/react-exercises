import React, { useState } from 'react'
import useCounter from './useCounter'

export default function Counter () {
        const [count, increment, decrement, reset] = useCounter(0);

  return (
    <div>
        <div> count: {count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}> Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

// Create a custom hook useCounter that keeps track of the state of a counter,
//  and returns the current value of the counter as well as three functions to increment, decrement and reset the counter.

