import { PureComponent } from "react";
import { Alert } from "./";
import { GroceryContext } from "../context/GroceryContext";

export default class ItemForm extends PureComponent {
  render() {
    return (
      <GroceryContext.Consumer>
        {(context) => {
          const {
            handleSubmitItem,
            alert,
            showAlert,
            itemName,
            handleChangeItemName,
            isEditing,
          } = context;

          return (
            <form className="grocery-form" onSubmit={handleSubmitItem}>
              <Alert alert={alert} showAlert={showAlert} />
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
        }}
      </GroceryContext.Consumer>
    );
  }
}
