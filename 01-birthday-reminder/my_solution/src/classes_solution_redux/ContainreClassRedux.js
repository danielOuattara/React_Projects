import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./ListClassRedux";
import { removeAllFriends } from "./actions/friendsActions";  // optionnal

class ContainerClassRedux extends Component {
  handleRefresh = () => {
    window.location.reload(false);
  };

  render() {
    return (
      <main>
        <section className="container">
          <h3>{this.props.people.length} birthdays today</h3>{" "}
          <span>class component + redux </span>
          <List />
          {this.props.people.length !== 0 && (
            <button
              onClick={() => this.props.handleRemoveAllFriends()}
              style={{ marginTop: "50px" }}
            >
              {" "}
              Clear all
            </button>
          )}
          {this.props.people.length === 0 && (
            <button onClick={this.handleRefresh} style={{ marginTop: "50px" }}>
              {" "}
              Refresh
            </button>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerClassRedux);
