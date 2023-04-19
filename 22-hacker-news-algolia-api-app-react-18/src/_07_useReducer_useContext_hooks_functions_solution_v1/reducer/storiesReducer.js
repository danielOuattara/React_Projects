import {
  SET_LOADING,
  STOP_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
  HANDLE_ERROR,
} from "../actions/storiesActions.js";

export default function storiesReducer(state, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };

    case STOP_LOADING:
      return { ...state, isLoading: false };

    case SET_STORIES:
      return {
        ...state,
        hits: [...action.payload.hits],
        nbHits: action.payload.nbHits,
        nbPages: action.payload.nbPages,
        isLoading: false,
      };

    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((item) => item.objectID !== action.payload),
      };

    case HANDLE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        hits: [],
      };

    case HANDLE_SEARCH:
      return {
        ...state,
        query: action.payload,
        page: 0,
      };

    case HANDLE_PAGE:
      const pageToReach = state.page + action.payload;

      if (pageToReach <= 0) {
        return {
          ...state,
          page: state.nbPages - 1,
        };
      } else if (pageToReach >= state.nbPages) {
        return {
          ...state,
          page: 0,
        };
      } else {
        return { ...state, page: pageToReach };
      }

    default:
      return state;
  }
}
