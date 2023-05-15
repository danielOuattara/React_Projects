import data from "./../../data";

const initialState = data;

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_FRIEND":
      return state.filter((person) => person.id !== action.payload);

    case "REMOVE_ALL_FRIENDS":
      return (state = []);

    case "RESET_ALL_FRIENDS":
      return (state = initialState);

    default:
      return state;
  }
};
