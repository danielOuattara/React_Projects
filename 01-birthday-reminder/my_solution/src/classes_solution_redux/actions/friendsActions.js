const REMOVE_FRIEND = "REMOVE_FRIEND";
const REMOVE_ALL_FRIENDS = "REMOVE_ALL_FRIENDS";

export function removeOneFriend(id) {
  return {
    type: REMOVE_FRIEND,
    payload: id,
  };
}

export function removeAllFriends() {
  return {
    type: REMOVE_ALL_FRIENDS,
  };
}
