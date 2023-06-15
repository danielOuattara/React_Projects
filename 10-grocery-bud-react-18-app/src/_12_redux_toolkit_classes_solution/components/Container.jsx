import { Component } from "react";
import { connect } from "react-redux";
import { ItemForm, List } from "./";
import { groceryActions } from "../redux/grocery/grocery-slice";

class Container extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.itemsList !== this.props.itemsList) {
      localStorage.setItem(
        "grocery_redux_toolkit_classes",
        JSON.stringify(this.props.itemsList),
      );
    }
  }

  render() {
    const { itemsList, dispatch } = this.props;
    return (
      <section className="section-center ">
        <p>react redux toolkit classes solution</p>

        <ItemForm />
        {itemsList.length > 0 && (
          <div className="grocery-container">
            <List />
            <button
              className="clear-btn"
              onClick={() => dispatch(groceryActions.clearItemsList())}
            >
              clear all items
            </button>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsList: state.groceryState.itemsList,
  };
};

export default connect(mapStateToProps, null)(Container);
