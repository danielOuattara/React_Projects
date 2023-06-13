import { useGroceryContext } from "../context/GroceryContext";
import { List, ItemForm } from "./../components";

export default function Container() {
  const { itemsList, clearItemsList } = useGroceryContext();

  return (
    <section className="section-center ">
      <p>
        context API + useContext functions solution version 1: multiple states +
        showAlert()
      </p>
      <ItemForm />

      {itemsList.length > 0 && (
        <div className="grocery-container">
          <List />
          <button className="clear-btn" onClick={clearItemsList}>
            clear all items
          </button>
        </div>
      )}
    </section>
  );
}
