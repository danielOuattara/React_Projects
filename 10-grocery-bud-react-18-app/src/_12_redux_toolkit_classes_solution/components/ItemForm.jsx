import { Component } from "react";
import { Alert } from "./";
import { connect } from "react-redux";
import { groceryActions } from "./../redux/grocery/grocery-slice";

class ItemForm extends Component {
  handleSubmitLocally = (event) => {
    event.preventDefault();
    this.props.dispatch(groceryActions.handleSubmit());
  };
  render() {
    const { itemName, isEditing } = this.props.groceryState;
    const { dispatch } = this.props;
    return (
      <form className="grocery-form" onSubmit={this.handleSubmitLocally}>
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
}

const mapStateToProps = (state) => {
  return {
    groceryState: state.groceryState,
  };
};

export default connect(mapStateToProps, null)(ItemForm);
