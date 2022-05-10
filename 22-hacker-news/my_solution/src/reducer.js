import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };

    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: [...action.payload.hits],
        nbPages: action.payload.nbPages,
      };

    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      };

    case HANDLE_SEARCH:
      console.log("userQuery", action.payload);
      return {
        ...state,
        query: action.payload,
        page: 0,
      };

    case HANDLE_PAGE:
      if (action.payload === -1) {
        let PrevPage = state.page + action.payload;
        if (PrevPage < 0) {
          PrevPage = state.nbPages - 1;
        }
        return {
          ...state,
          page: PrevPage,
        };
      } else if (action.payload === +1) {
        let NextPage = state.page + action.payload;
        if (NextPage > state.nbPages - 1) {
          NextPage = 0;
        }
        return {
          ...state,
          page: NextPage,
        };
      }
      break;

    default:
      throw new Error(`No matching action type ${action.type} `);
  }
};
export default reducer;
