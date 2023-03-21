import React, { useState } from 'react';
import GithubUser from './GithubUser';

export default function GithubUserList() {
    const [usernames, setUsernames] = useState([])
    const [username, setUsername] = useState('')


    function handleChange(event) {
     setUsername(event.target.value)
    }

    function handleСlick() {
     if(username !== '') {
        setUsernames((prevUsernames) => [...prevUsernames, username])
     }
     setUsername('')
    }
  return (
    <div>
        <input type="text" name="username" value={username} placeholder='enter username' onChange={handleChange}/>
        <button onClick={handleСlick}>search</button>
       {usernames.length > 0 && 
       <div>
        {usernames.map((el) => {
            return < GithubUser username={el} />
        })
        }
       </div>
        }

    </div>
  )
}

//Create a GithubUserList component that maintains an array of usernames, showing a GithubUser component for each username entered. 
//The usernames should be added to the array using an input field and a button.
