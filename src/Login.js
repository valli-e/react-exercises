// Rewrite the Login component from Forms 03 as a function component,
//  and use the useState hook to track the state of the username, password and remember inputs. Tip: you can use useState more than once.

import React, { useState, Component } from 'react'

// Define the Login component as a function that takes a props parameter.
function Login(props) {
   // Declare state variables using the useState hook
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false); 
//Each state variable is declared using array destructuring
// with the first element being the state value and the second element being a function to update the state value
//Each variable is initialized with a default value 



  // Define event handlers for input elements
const handleUsernameChange = (event) => {
  setUsername(event.target.value);
};

const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};

const handleRememberChange = (event) => {
  setRemember(event.target.checked);
}

 // Define handler for login button click
 const handleLogin = () => {
  // Call the onLogin prop function with the current state values
  props.onLogin({ username, password, remember });
}


 // Return JSX with input elements, checkbox, and login button
    return (
      <div>
        <input
          type="text"
          onChange={handleUsernameChange}
          name="username"
          placeholder="Username"
        ></input>
        <input
          type="password"
          onChange={handlePasswordChange}
          name="password"
          placeholder="Password"
        ></input>
        <input
          type="checkbox"
          onChange={handleRememberChange}
          name="remember"
        ></input>
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }


  export default Login;
