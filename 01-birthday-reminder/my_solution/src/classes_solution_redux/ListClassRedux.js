import React, { Component } from "react";
import { connect } from "react-redux";
import { removeOneFriend } from "./actions/friendsActions";  // optionnal

class List extends Component {
  render() {
    return (
      <>
        {this.props.people.length > 1 && (
          <h2 style={h2_styled}>friends to contact</h2>
        )}
        {this.props.people.length === 1 && (
          <h2 style={h2_styled}>friend to contact</h2>
        )}
        {this.props.people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person" style={article_styled}>
              <img src={image} alt={"picture of " + name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                <button
                  style={btn_style}
                  onClick={() => this.props.handleRemoveOnePerson(id)}
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

const mapStateToProps = (state) => {
  return { people: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // option 1
    // handleRemoveOnePerson: (id) => {
    //   dispatch({ type: "REMOVE_FRIEND", payload: id });
    // },

    // option 2
    handleRemoveOnePerson: (id) => {
      dispatch(removeOneFriend(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);

const h2_styled = {
  borderBottom: "4px solid grey",
  marginTop: "10px",
  paddingBottom: "20px",
  fontWeight: "600",
};
const article_styled = {
  borderBottom: "2px solid grey",
  marginBottom: "10px",
  paddingBottom: "20px",
};
const btn_style = {};
