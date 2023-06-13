import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteItem, editItem } from "../reducer/grocery/groceryActions";

export default function List({ itemsList, dispatchGrocery }) {
  return (
    <div className="grocery-list">
      {itemsList.map((item) => (
        <article key={item.id} className="grocery-item">
          <p className="title">{item.title}</p>
          <div className="btn-container">
            <FaEdit
              className="edit-btn"
              onClick={() => dispatchGrocery(editItem(item.id))}
            />
            <FaTrash
              className="delete-btn"
              onClick={() => dispatchGrocery(deleteItem(item.id))}
            />
          </div>
        </article>
      ))}
    </div>
  );
}
