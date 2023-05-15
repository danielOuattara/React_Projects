import data from "../../data";
import { createSlice } from "@reduxjs/toolkit";

const initialFriendsState = {
  friends: data,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState: initialFriendsState,
  reducers: {
    removeOneFriend(state, action) {
      state.friends = state.friends.filter(
        (person) => person.id !== action.payload.id,
      );
    },
    removeAllFriends(state) {
      state.friends = [];
    },
    resetAllFriends(state) {
      state.friends = initialFriendsState.friends;
    },
  },
});

export const friendsActions = friendsSlice.actions;

export default friendsSlice.reducer;

//-----------------------------------
