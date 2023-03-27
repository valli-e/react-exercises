import useGithubUser from "./useGithubUser";

export default function GithubUser({ username }) {
  const userData = useGithubUser(username);

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
