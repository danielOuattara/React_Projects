import { useGroceryContext } from "../context/GroceryContext";
import { Alert } from "./";

export default function ItemForm() {
  const {
    handleChangeItemName,
    handleSubmitItem,
    alert,
    setState,
    itemName,
    isEditing,
  } = useGroceryContext();

  return (
    <form className="grocery-form" onSubmit={handleSubmitItem}>
      <Alert alert={alert} setState={setState} />
      <h3>grocery bud</h3>
      <div className="form-control">
        <input
          type="text"
          className="grocery"
          placeholder="e.g eggs"
          value={itemName}
          onChange={(event) => handleChangeItemName(event.target.value)}
        />
        <button type="submit" className="submit-btn">
          {isEditing ? "edit" : "submit"}
        </button>
      </div>
    </form>
  );
}
