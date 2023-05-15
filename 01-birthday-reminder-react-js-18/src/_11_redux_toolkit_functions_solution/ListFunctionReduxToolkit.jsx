import { useDispatch, useSelector } from "react-redux";
import { friendsActions } from "./store/friends-slice";

export default function ListFunctionReduxToolkit(props) {
  const dispatch = useDispatch();
  const { friends } = useSelector((state) => state.friends);

  return (
    <>
      {friends.length > 1 && <h2 className="h2_styled">friends to contact</h2>}
      {friends.length === 1 && <h2 className="h2_styled">friend to contact</h2>}
      {friends.map((person) => {
        return (
          <article key={person.id} className="person article_styled">
            <img src={person.image} alt={"picture of " + person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
              <button
                className="btn_styled"
                onClick={() =>
                  dispatch(friendsActions.removeOneFriend({ id: person.id }))
                }
              >
                Event Finished
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
}
