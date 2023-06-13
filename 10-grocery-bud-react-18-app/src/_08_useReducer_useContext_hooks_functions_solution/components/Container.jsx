import { ItemForm, List } from "./";
import { useGroceryContext } from "../context/GroceryContext";
import { clearItemsList } from "../reducer/grocery/groceryActions";

export default function Container() {
  const { itemsList, dispatchGrocery } = useGroceryContext();
  return (
    <section className="section-center ">
      <p>useReducer + useContext functions solution</p>

      <ItemForm />
      {itemsList.length > 0 && (
        <div className="grocery-container">
          <List />
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
