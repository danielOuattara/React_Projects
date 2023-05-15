import { Component } from "react";
import { connect } from "react-redux";
import { friendsActions } from "./store/friends-slice";

//----------------------------------------------------------

class ListClassReduxToolkit extends Component {
  render() {
    return (
      <>
        {this.props.friends.length > 1 && (
          <h2 className="h2_styled">friends to contact</h2>
        )}
        {this.props.friends.length === 1 && (
          <h2 className="h2_styled">friend to contact</h2>
        )}
        {this.props.friends.map((person) => {
          return (
            <article key={person.id} className="person article_styled">
              <img src={person.image} alt={"picture of " + person.name} />
              <div>
                <h4>{person.name}</h4>
                <p>{person.age} years</p>
                <button
                  className="btn_styled"
                  // option 1
                  // onClick={() => this.props.handleRemoveOnePerson(person.id)}

                  // options 2
                  onClick={() =>
                    this.props.dispatch(
                      friendsActions.removeOneFriend({ id: person.id }),
                    )
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
}

const mapStateToProps = (state) => {
  return { friends: state.friends.friends };
};

// option 1

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleRemoveOnePerson: (id) => {
//       dispatch(friendsActions.removeOneFriend({ id }));
//     },
//   };
// };

export default connect(
  mapStateToProps,
  // mapDispatchToProps,
)(ListClassReduxToolkit);
