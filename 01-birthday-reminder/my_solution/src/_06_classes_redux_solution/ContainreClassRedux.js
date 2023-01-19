import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./ListClassRedux";
import { removeAllFriends, resetAllFriends } from "./actions/friendsActions"; // optionnal

class ContainerClassRedux extends Component {
  render() {
    return (
      <main>
        <section className="container">
          <span>class component + redux </span>
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
            <button onClick={this.props.handleResetAllFirends}> Refresh</button>
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
    handleResetAllFirends: () => {
      dispatch(resetAllFriends());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerClassRedux);
