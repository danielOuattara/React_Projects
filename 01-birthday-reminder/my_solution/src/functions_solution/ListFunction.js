const List = ({ people, handleRemoveOnePerson }) => {
  return (
    <>
      {people.length > 1 && <h2 style={h2_styled}>friends to contact</h2>}
      {people.length === 1 && <h2 style={h2_styled}>friend to contact</h2>}
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person" style={article_styled}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button
                onClick={() => handleRemoveOnePerson(id)}
                style={btnStyleLocal}
              >
                Event Finished
              </button>
              {/* </p> */}
            </div>
          </article>
        );
      })}
    </>
  );
};

const h2_styled = {
  borderBottom: "4px solid grey",
  marginTop: "10px",
  paddingBottom: "20px",
  fontWeight: "600",
};
const article_styled = {
  // borderBottom: "2px solid grey",
  // marginBottom: "10px",
  // paddingBottom: "20px",
  border: "1px solid red",
};

const btnStyleLocal = {
  display: "block",
  width: "80%",
  // "border-color": "transparent",
  margin: "1rem auto 0 auto",
  "text-transform": "capitalize",
  "font-size": "1.2rem",
  padding: "0.2rem 0",
  // outline: "1px solid rgba(242, 138, 178, 0.8)",
  cursor: "pointer",
};

export default List;
