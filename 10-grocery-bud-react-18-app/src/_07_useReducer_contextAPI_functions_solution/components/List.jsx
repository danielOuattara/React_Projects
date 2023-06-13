import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteItem, editItem } from "../reducer/grocery/groceryActions";
import { GroceryContext } from "../context/GroceryContext";

export default function List() {
  return (
    <GroceryContext.Consumer>
      {(context) => {
        return (
          <div className="grocery-list">
            {context.itemsList.map((item) => (
              <article key={item.id} className="grocery-item">
                <p className="title">{item.title}</p>
                <div className="btn-container">
                  <FaEdit
                    className="edit-btn"
                    onClick={() => context.dispatchGrocery(editItem(item.id))}
                  />
                  <FaTrash
                    className="delete-btn"
                    onClick={() => context.dispatchGrocery(deleteItem(item.id))}
                  />
                </div>
              </article>
            ))}
          </div>
        );
      }}
    </GroceryContext.Consumer>
  );
}
