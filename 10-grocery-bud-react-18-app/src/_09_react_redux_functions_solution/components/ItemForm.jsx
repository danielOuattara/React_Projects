import { Alert } from "./";
import { connect } from "react-redux";
import {
  handleSubmit,
  handleChangeItemName,
} from "./../redux/grocery/groceryActions";

function ItemForm(props) {
  const { itemName, isEditing } = props.groceryState;
  const { dispatch } = props;

  const handleSubmitLocally = (event) => {
    event.preventDefault();
    dispatch(handleSubmit());
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
            dispatch(handleChangeItemName(event.target.value))
          }
        />
        <button type="submit" className="submit-btn">
          {isEditing ? "edit" : "submit"}
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    groceryState: state.groceryState,
  };
};

export default connect(mapStateToProps, null)(ItemForm);
