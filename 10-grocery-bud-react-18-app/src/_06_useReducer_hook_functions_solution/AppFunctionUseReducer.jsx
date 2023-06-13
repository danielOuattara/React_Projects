import { useReducer, useEffect } from "react";
import { List, ItemForm } from "./components";
import { groceryReducer } from "./reducer/grocery/groceryReducer";
import { clearItemsList } from "./reducer/grocery/groceryActions";
//-----------------------------------------------

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsListReducer");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsListReducer"));
  } else {
    return [];
  }
};

const initialGroceryState = {
  itemName: "",
  itemsList: retrieveLocalStorage(),
  isEditing: false,
  editID: null,
  alert: { show: false, msg: "", type: "" },
};

export default function AppFunctionUseReducer() {
  const [groceryState, dispatchGrocery] = useReducer(
    groceryReducer,
    initialGroceryState,
  );

  useEffect(() => {
    localStorage.setItem(
      "itemsListReducer",
      JSON.stringify(groceryState.itemsList),
    );
  }, [groceryState.itemsList]);

  return (
    <section className="section-center ">
      <p>useReducer hook function solution</p>

      <ItemForm
        alert={groceryState.alert}
        itemName={groceryState.itemName}
        isEditing={groceryState.isEditing}
        dispatchGrocery={dispatchGrocery}
      />
      {groceryState.itemsList.length > 0 && (
        <div className="grocery-container">
          <List
            itemsList={groceryState.itemsList}
            dispatchGrocery={dispatchGrocery}
          />
          <button
            className="clear-btn"
            onClick={() => dispatchGrocery(clearItemsList())}
          >
            clear all items
          </button>
        </div>
      )}
    </section>
  );
}
