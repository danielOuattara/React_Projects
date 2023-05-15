import { useDispatch, useSelector } from "react-redux";
import { friendsActions } from "./store/friends-slice";
import List from "./ListFunctionReduxToolkit";

//--------------------------------------------------------------

export default function ContainerFunctionReduxToolkit() {
  const dispatch = useDispatch();
  const { friends } = useSelector((state) => state.friends);
  return (
    <main>
      <section className="container">
        <span>redux toolkit + functions solution </span>
        {friends.length > 1 && <h3>{friends.length} birthdays today</h3>}
        {(friends.length === 1 || friends.length === 0) && (
          <h3>{friends.length} birthday today</h3>
        )}
        <List />
        {friends.length !== 0 && (
          <button onClick={() => dispatch(friendsActions.removeAllFriends())}>
            Clear all
          </button>
        )}
        {friends.length === 0 && (
          <button onClick={() => dispatch(friendsActions.resetAllFriends())}>
            Refresh
          </button>
        )}
      </section>
    </main>
  );
}
