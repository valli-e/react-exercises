import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import GithubUser from './GithubUser';
import ShowGithubUser from './ShowGithubUser';

export default function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [username, setUsername] = useState('');

  function handleChange(event) {
    setUsername(event.target.value);
  }

  function handleClick() {
    if (username !== '') {
      setUsernames((prevUsernames) => [...prevUsernames, username]);
    }
    setUsername('');
  }

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="Enter username"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Search</button>
      {usernames.length > 0 && (
        <div>
          {usernames.map((el) => {
            return (
              <div key={el}>
                <Link to={`/users/${el}`}>{el}</Link>
              </div>
            );
          })}
        </div>
      )}
      <Route exact path="/users" render={() => <h3>Add a user and select it</h3>} />
      <Route path="/users/:username" component={ShowGithubUser} />
    </div>
  );
}

