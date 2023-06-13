import { Alert } from "./";
import { useSelector } from "react-redux";
import { groceryActions } from "./../redux/grocery/grocery-slice";

export default function ItemForm(props) {
  const { dispatch } = props;
  const { itemName, isEditing } = useSelector((state) => state.groceryState);

  const handleSubmitLocally = (event) => {
    event.preventDefault();
    dispatch(groceryActions.handleSubmit());
  };

  return (
    <form className="grocery-form" onSubmit={handleSubmitLocally}>
      <Alert />
      <h3>grocery bud</h3>
      <div className="form-control">
        <input
          type="text"
          className="grocery"
          placeholder="e.g eggs"
          value={itemName}
          onChange={(event) =>
            dispatch(groceryActions.handleChangeItemName(event.target.value))
          }
        />
        <button type="submit" className="submit-btn">
          {isEditing ? "edit" : "submit"}
        </button>
      </div>
    </form>
  );
}
