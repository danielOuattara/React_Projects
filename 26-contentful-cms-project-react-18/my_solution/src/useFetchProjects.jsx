import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: import.meta.env.VITE_API_CLIENT_SPACE,
  environment: import.meta.env.VITE_API_CLIENT_ENVIRONMENT,
  accessToken: import.meta.env.VITE_API_CLIENT_ACCESS_TOKEN,
});

export default function useFetchProjects() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await client.getEntries({
          content_type: "projectsContentfulJohnSmilga",
        });

        setProjects(() => response.items);
        setIsLoading(() => false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProjects();
  }, []);

  return { isLoading, projects };
}
