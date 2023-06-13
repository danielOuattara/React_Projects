import { connect } from "react-redux";
import { ItemForm, List } from "./";
import { clearItemsList } from "../redux/grocery/groceryActions";
import { useEffect } from "react";

function Container(props) {
  const { itemsList, dispatch } = props;

  useEffect(() => {
    localStorage.setItem("grocery_redux_functions", JSON.stringify(itemsList));
  }, [itemsList]);
  return (
    <section className="section-center ">
      <p>react redux functions solution</p>

      <ItemForm />
      {itemsList.length > 0 && (
        <div className="grocery-container">
          <List />
          <button
            className="clear-btn"
            onClick={() => dispatch(clearItemsList())}
          >
            clear all items
          </button>
        </div>
      )}
    </section>
  );
}

const mapStateToProps = (state) => {
  console.log("state = ", state);
  return {
    itemsList: state.groceryState.itemsList,
  };
};

export default connect(mapStateToProps, null)(Container);
