import { createContext, useContext, useEffect, useReducer } from "react";
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "../actions/storiesActions";

import { storiesReducer } from "../reducer";
//-----------------------------------------------------------------

const StoriesContext = createContext();

const initialStoriesState = {};

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

export default function StoriesContextProvider({ children }) {
  const [state, dispatch] = useReducer(storiesReducer, initialStoriesState);

  return (
    <StoriesContext.Provider value={{}}>{children}</StoriesContext.Provider>
  );
}

export const useStoriesContext = () => {
  return useContext(StoriesContext);
};
