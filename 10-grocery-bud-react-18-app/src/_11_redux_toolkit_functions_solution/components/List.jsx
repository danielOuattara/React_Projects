import { FaEdit, FaTrash } from "react-icons/fa";
import { groceryActions } from "./../redux/grocery/grocery-slice";
import { useSelector, useDispatch } from "react-redux";

export default function List() {
  const dispatch = useDispatch();
  const { itemsList } = useSelector((state) => state.groceryState);

  return (
    <div className="grocery-list">
      {itemsList.map((item) => (
        <article key={item.id} className="grocery-item">
          <p className="title">{item.title}</p>
          <div className="btn-container">
            <FaEdit
              className="edit-btn"
              onClick={() => dispatch(groceryActions.editItem(item.id))}
            />
            <FaTrash
              className="delete-btn"
              onClick={() => dispatch(groceryActions.deleteItem(item.id))}
            />
          </div>
        </article>
      ))}
    </div>
  );
}
