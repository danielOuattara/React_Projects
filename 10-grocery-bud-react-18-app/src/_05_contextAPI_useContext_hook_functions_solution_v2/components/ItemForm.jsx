import { useGroceryContext } from "../context/GroceryContext";
import { Alert } from "./";

export default function ItemForm() {
  const { handleSubmitItem, alert, setAlert, item, setItem, isEditing } =
    useGroceryContext();

  return (
    <form className="grocery-form" onSubmit={handleSubmitItem}>
      <Alert alert={alert} setAlert={setAlert} />
      <h3>grocery bud</h3>
      <div className="form-control">
        <input
          type="text"
          className="grocery"
          placeholder="e.g eggs"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
        <button type="submit" className="submit-btn">
          {isEditing ? "edit" : "submit"}
        </button>
      </div>
    </form>
  );
}
