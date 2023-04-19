import { useEffect } from "react";
import { useStoriesContext } from "./../context";
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_ERROR,
} from "../actions/storiesActions";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

export default function Stories() {
  const { isLoading, hits, query, page, dispatchStories } = useStoriesContext();

  useEffect(() => {
    const fetchStories = async (url) => {
      dispatchStories({ type: SET_LOADING });
      try {
        const response = await fetch(url);
        // console.log("response = ", response);

        if (!response.ok) {
          throw new Error(`${response.statusText} ${response.status} `);
        }

        const data = await response.json();
        // console.log("data = ", data);

        dispatchStories({
          type: SET_STORIES,
          payload: {
            hits: data.hits,
            nbHits: data.nbHits,
            nbPages: data.nbPages,
          },
        });
      } catch (error) {
        dispatchStories({ type: HANDLE_ERROR, payload: error.message });
      }
    };
    fetchStories(fetchStories(`${API_ENDPOINT}query=${query}&page=${page}`));
  }, [page, query, dispatchStories]);

  const removeStory = (objectID) => {
    dispatchStories({ type: REMOVE_STORY, payload: objectID });
  };

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="stories">
      {hits.map((item) => (
        <article key={item.objectID} className="story">
          <h4 className="title">{item.title}</h4>
          <p className="info">
            {item.points} points by{" "}
            <span>
              {item.author} | {item.num_comments} comments
            </span>
          </p>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="read-link"
          >
            {" "}
            read more
          </a>

          <button
            className="remove-btn"
            onClick={() => removeStory(item.objectID)}
          >
            {" "}
            remove
          </button>
        </article>
      ))}
    </section>
  );
}
