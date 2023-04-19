import { createContext, useContext, useEffect, useReducer } from "react";
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  HANDLE_ERROR,
} from "../actions/storiesActions";

import { storiesReducer } from "../reducer";
//-----------------------------------------------------------------

const StoriesContext = createContext();

const initialStoriesState = {
  isLoading: true,
  hits: [],
  nbHits: 0,
  hitsPerPage: 0,
  query: "react",
  page: 0,
  nbPages: 0,
  error: null,
};

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

export default function StoriesContextProvider({ children }) {
  const [storiesState, dispatchStories] = useReducer(
    storiesReducer,
    initialStoriesState,
  );

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

  const removeStory = (objectID) => {
    dispatchStories({ type: REMOVE_STORY, payload: objectID });
  };

  const handleSearch = (userQuery) => {
    dispatchStories({ type: HANDLE_SEARCH, payload: userQuery });
  };

  const handlePages = (pageRequest) => {
    dispatchStories({ type: HANDLE_PAGE, payload: pageRequest });
  };

  useEffect(() => {
    fetchStories(
      fetchStories(
        `${API_ENDPOINT}query=${storiesState.query}&page=${storiesState.page}`,
      ),
    );
  }, [storiesState.page, storiesState.query]);

  return (
    <StoriesContext.Provider
      value={{ ...storiesState, removeStory, handleSearch, handlePages }}
    >
      {children}
    </StoriesContext.Provider>
  );
}

export const useStoriesContext = () => {
  return useContext(StoriesContext);
};
