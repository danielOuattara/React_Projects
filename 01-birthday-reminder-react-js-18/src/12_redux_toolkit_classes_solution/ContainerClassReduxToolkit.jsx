import { Component } from "react";
import { connect } from "react-redux";
import { friendsActions } from "./store/friends-slice";
import List from "./ListClassReduxToolkit";

//--------------------------------------------------------------

class ContainerClassReduxToolkit extends Component {
  render() {
    return (
      <main>
        <section className="container">
          <span>redux toolkit + classes solution </span>
          {this.props.friends.length > 1 && (
            <h3>{this.props.friends.length} birthdays today</h3>
          )}
          {(this.props.friends.length === 1 ||
            this.props.friends.length === 0) && (
            <h3>{this.props.friends.length} birthday today</h3>
          )}
          <List />
          {this.props.friends.length !== 0 && (
            <button onClick={this.props.handleRemoveAllFriends}>
              Clear all
            </button>
          )}
          {this.props.friends.length === 0 && (
            <button onClick={this.props.handleResetAllFriends}>Refresh</button>
          )}
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return { friends: state.friends.friends };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRemoveAllFriends: () => {
      dispatch(friendsActions.removeAllFriends());
    },
    handleResetAllFriends: () => {
      dispatch(friendsActions.resetAllFriends());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerClassReduxToolkit);
