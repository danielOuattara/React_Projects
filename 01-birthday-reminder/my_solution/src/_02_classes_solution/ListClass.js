import { Component } from "react";

export default class List extends Component {
  render() {
    const { people, handleRemoveOnePerson } = this.props;
    return (
      <>
        {people.length > 1 && <h2 className="h2_styled">friends to contact</h2>}
        {people.length === 1 && (
          <h2 className="h2_styled">friend to contact</h2>
        )}
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person article_styled">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                <button
                  className="btn_styled"
                  onClick={() => handleRemoveOnePerson(id)}
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
}
