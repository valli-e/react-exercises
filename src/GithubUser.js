import React from 'react'
import useGithubUser from "./useGithubUser";

export default function GithubUser({ username }) {
  const [userData, fetchUserData, { error, loading }] = useGithubUser(username);

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      {loading && <p>Loading...</p>}
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
      <button onClick={fetchUserData}>Refresh</button>
    </div>
  );
}
