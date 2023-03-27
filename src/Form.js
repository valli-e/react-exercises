// Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, 
// and returns the current value of the inputs as well as an event handler to update either input.

import React from 'react'
import useForms from './useForms'

export default function Form() {
    const [values, handleChange] = useForms( {username: '', password: ''})
  return (
    <div>
        <label>
            Username:
            <input type='text' name='username' placeholder='text' value={values.username} onChange={handleChange} />
        </label>

        <label>
            Password:
            <input type='password' name='password' placeholder='password' value={values.password} onChange={handleChange}/>
        </label>
        <button type="submit">Submit</button>
    </div>
  )
}
