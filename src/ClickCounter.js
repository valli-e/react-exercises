import React, { useState } from "react";

export function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Current count: {count}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export function Counter() {
  return (
    <div>
      <h1>Counter</h1>
      <<ClickCounter />
    </div>
  );
}
