import { ItemForm, List } from "./";
import { groceryActions } from "../redux/grocery/grocery-slice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Container() {
  const dispatch = useDispatch();
  const { itemsList } = useSelector((state) => state.groceryState);

  useEffect(() => {
    localStorage.setItem(
      "grocery_redux_toolkit_functions",
      JSON.stringify(itemsList),
    );
  }, [itemsList]);
  return (
    <section className="section-center ">
      <p>react redux toolkit functions solution</p>

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
