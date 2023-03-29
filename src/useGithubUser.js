import { useState, useEffect } from 'react';

export default function useGithubUser(username) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => console.log(error));
    }
  }, [username]);

  const refetch = () => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => console.log(error));
    }
  };

  return [userData, refetch];
}
