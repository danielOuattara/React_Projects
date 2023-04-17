import { useState, useEffect } from "react";
import { paginator } from "../utilities";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export default function useFetchFollowers(personsNumberPerPage) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFollowers = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(() => paginator(data, personsNumberPerPage));
      setLoading(false);
    };
    fetchFollowers();
  }, [personsNumberPerPage]);

  return { loading, data };
}
