import React from 'react';
import GithubUser from './GithubUser';

export default function ShowGithubUser({ match }) {
  const username = match.params.username;

  return (
    <div>
      <h1>Github User: {username}</h1>
      <GithubUser username={username} />
    </div>
  );
}
