import { useEffect, useState } from "react";

export default function useGithubUser(username) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => console.log(error));
  }, [username]);

  return userData;
}
