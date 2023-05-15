export default function ListFunctionUseReducer(props) {
  const handleRemoveOnePerson = (id) => {
    props.dispatchFriends({ type: "REMOVE_FRIEND", payload: id });
  };
  return (
    <>
      {props.friendsState.length > 1 && (
        <h2 className="h2_styled">friends to contact</h2>
      )}
      {props.friendsState.length === 1 && (
        <h2 className="h2_styled">friend to contact</h2>
      )}
      {props.friendsState.map((person) => {
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
}
