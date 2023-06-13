import { GroceryContext } from "../context/GroceryContext";
import { clearItemsList } from "../reducer/grocery/groceryActions";
import { ItemForm, List } from "./";

export default function Container() {
  return (
    <GroceryContext.Consumer>
      {(context) => {
        return (
          <section className="section-center ">
            <p>useReducer + context API functions solution</p>

            <ItemForm />
            {context.itemsList.length > 0 && (
              <div className="grocery-container">
                <List />
                <button
                  className="clear-btn"
                  onClick={() => context.dispatchGrocery(clearItemsList())}
                >
                  clear all items
                </button>
              </div>
            )}
          </section>
        );
      }}
    </GroceryContext.Consumer>
  );
}
