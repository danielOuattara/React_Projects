const List = (props) => {
  return (
    <>
      {props.people.length > 1 && (
        <h2 className="h2_styled">friends to contact</h2>
      )}
      {/*  */}
      {props.people.length === 1 && (
        <h2 className="h2_styled">friend to contact</h2>
      )}
      {/*  */}
      {props.people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person article_styled">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button
                onClick={() => props.handleRemoveOnePerson(id)}
                className="btn_styled"
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

export default List;
