import { useEffect, useState } from "react";

export default function useGithubUser(username) {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserData = () => {
    setLoading(true);

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, [username]);

  return [userData, fetchUserData, { error, loading }];
}

