import { Alert } from "./";
import {
  handleSubmit,
  handleChangeItemName,
} from "../reducer/grocery/groceryActions";
export default function ItemForm({
  alert,
  itemName,
  isEditing,
  dispatchGrocery,
}) {
  //---------------------------------------

  const handleSubmitLocally = (event) => {
    event.preventDefault();
    dispatchGrocery(handleSubmit());
  };

  return (
    <form className="grocery-form" onSubmit={handleSubmitLocally}>
      <Alert alert={alert} dispatchGrocery={dispatchGrocery} />
      <h3>grocery bud</h3>
      <div className="form-control">
        <input
          type="text"
          className="grocery"
          placeholder="e.g eggs"
          value={itemName}
          onChange={(event) =>
            dispatchGrocery(handleChangeItemName(event.target.value))
          }
        />
        <button type="submit" className="submit-btn">
          {isEditing ? "edit" : "submit"}
        </button>
      </div>
    </form>
  );
}
