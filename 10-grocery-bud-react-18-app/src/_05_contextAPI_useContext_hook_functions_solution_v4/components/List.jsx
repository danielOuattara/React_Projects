import { FaEdit, FaTrash } from "react-icons/fa";
import { useGroceryContext } from "../context/GroceryContext";

export default function List() {
  const { itemsList, deleteItem, editItem } = useGroceryContext();
  return (
    <div className="grocery-list">
      {itemsList.map((item) => (
        <article key={item.id} className="grocery-item">
          <p className="title">{item.title}</p>
          <div className="btn-container">
            <FaEdit className="edit-btn" onClick={() => editItem(item.id)} />
            <FaTrash
              className="delete-btn"
              onClick={() => deleteItem(item.id)}
            />
          </div>
        </article>
      ))}
    </div>
  );
}
