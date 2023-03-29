import useSWR from 'swr';

export default function useGithubUser(username) {
  if (!username) {
    return { userData: null };
  }

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher);

  return {
    userData: data,
    isLoading: !error && !data,
    isError: error,
  };
}
