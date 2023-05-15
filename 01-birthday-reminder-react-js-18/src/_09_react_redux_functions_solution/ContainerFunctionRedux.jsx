import { connect } from "react-redux";
import List from "./ListFunctionRedux";
import { removeAllFriends, resetAllFriends } from "./actions/friendsActions"; // optional 2

function ContainerFunctionRedux(props) {
  return (
    <main>
      <section className="container">
        <span>redux + functions solution </span>
        {props.people.length > 1 && (
          <h3>{props.people.length} birthdays today</h3>
        )}
        {(props.people.length === 1 || props.people.length === 0) && (
          <h3>{props.people.length} birthday today</h3>
        )}
        <List />
        {props.people.length !== 0 && (
          <button onClick={() => props.handleRemoveAllFriends()}>
            {" "}
            Clear all
          </button>
        )}
        {props.people.length === 0 && (
          <button onClick={props.handleResetAllFriends}> Refresh</button>
        )}
      </section>
    </main>
  );
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
)(ContainerFunctionRedux);
