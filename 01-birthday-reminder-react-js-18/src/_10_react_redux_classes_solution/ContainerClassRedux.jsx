import { Component } from "react";
import { connect } from "react-redux";
import List from "./ListClassRedux";
import { removeAllFriends, resetAllFriends } from "./actions/friendsActions"; // optional

class ContainerClassRedux extends Component {
  render() {
    return (
      <main>
        <section className="container">
          <span>redux + classes solution </span>
          {this.props.people.length > 1 && (
            <h3>{this.props.people.length} birthdays today</h3>
          )}
          {(this.props.people.length === 1 ||
            this.props.people.length === 0) && (
            <h3>{this.props.people.length} birthday today</h3>
          )}
          <List />
          {this.props.people.length !== 0 && (
            <button onClick={() => this.props.handleRemoveAllFriends()}>
              {" "}
              Clear all
            </button>
          )}
          {this.props.people.length === 0 && (
            <button onClick={this.props.handleResetAllFriends}> Refresh</button>
          )}
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return { people: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // option 1
    // handleRemoveAllFriends: () => {
    //   dispatch({ type: "REMOVE_ALL_FRIENDS" });
    // },

    //option 2
    handleRemoveAllFriends: () => {
      dispatch(removeAllFriends());
    },
    handleResetAllFriends: () => {
      dispatch(resetAllFriends());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerClassRedux);
