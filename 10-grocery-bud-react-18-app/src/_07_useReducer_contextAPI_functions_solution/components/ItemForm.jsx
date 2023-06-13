import { Alert } from "./";
import {
  handleSubmit,
  handleChangeItemName,
} from "../reducer/grocery/groceryActions";
import { GroceryContext } from "../context/GroceryContext";
//---------------------------------------

export default function ItemForm() {
  return (
    <GroceryContext.Consumer>
      {(context) => {
        const handleSubmitLocally = (event) => {
          event.preventDefault();
          context.dispatchGrocery(handleSubmit());
        };
        return (
          <form className="grocery-form" onSubmit={handleSubmitLocally}>
            <Alert
              alert={context.alert}
              dispatchGrocery={context.dispatchGrocery}
            />
            <h3>grocery bud</h3>
            <div className="form-control">
              <input
                type="text"
                className="grocery"
                placeholder="e.g eggs"
                value={context.itemName}
                onChange={(event) =>
                  context.dispatchGrocery(
                    handleChangeItemName(event.target.value),
                  )
                }
              />
              <button type="submit" className="submit-btn">
                {context.isEditing ? "edit" : "submit"}
              </button>
            </div>
          </form>
        );
      }}
    </GroceryContext.Consumer>
  );
}
