import { createContext, useContext, useReducer } from "react";
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

export default function StoriesContextProvider({ children }) {
  const [storiesState, dispatchStories] = useReducer(
    storiesReducer,
    initialStoriesState,
  );

  return (
    <StoriesContext.Provider value={{ ...storiesState, dispatchStories }}>
      {children}
    </StoriesContext.Provider>
  );
}

export const useStoriesContext = () => {
  return useContext(StoriesContext);
};
