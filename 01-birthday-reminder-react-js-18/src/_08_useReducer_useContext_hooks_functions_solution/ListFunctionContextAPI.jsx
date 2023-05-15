import { useContext } from "react";
import { FriendsContext } from "./context/FriendsContext";

const ListContextAPI = () => {
  const { people, dispatch } = useContext(FriendsContext);

  const handleRemoveOnePerson = (id) => {
    dispatch({ type: "REMOVE_FRIEND", payload: id });
  };
  return (
    <>
      {people.length > 1 && <h2 className="h2_styled">friends to contact</h2>}
      {people.length === 1 && <h2 className="h2_styled">friend to contact</h2>}
      {people.map((person) => {
        return (
          <article key={person.id} className="person article_styled">
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.age} years</p>
              <button
                className="btn_styled"
                onClick={() => handleRemoveOnePerson(person.id)}
              >
                Event Finished
              </button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ListContextAPI;
