// Create a GithubUser component that fetches the data of the username passed as a prop, and renders some of the data within a div tag.
// The API to query is https://api.github.com/users/${username}.


import React, {useEffect, useState} from 'react'

export default function GithubUser({ username }) {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then( data => {
            setUserData(data)
        })
        .catch((error) => console.log(error))
    }, [username])



    return (
        <div>
          {userData && (
            <div>
              <h2>{userData.login}</h2>
              <img src={userData.avatar_url} alt="avatar" />
              <p>Name: {userData.name}</p>
              <p>Followers: {userData.followers}</p>
              <p>Following: {userData.following}</p>
              <p>Public Repositories: {userData.public_repos}</p>
            </div>
          )}
        </div>
      );
    }
