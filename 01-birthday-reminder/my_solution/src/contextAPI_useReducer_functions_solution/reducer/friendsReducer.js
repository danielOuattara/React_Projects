export const friendsReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_FRIEND":
      return state.filter((person) => person.id !== action.payload);

    case "REMOVE_ALL_FRIENDS":
      return (state = []);

    default:
      return state;
  }
};
