import { Component } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { groceryActions } from "./../redux/grocery/grocery-slice";
import { connect } from "react-redux";

class List extends Component {
  render() {
    return (
      <div className="grocery-list">
        {this.props.itemsList.map((item) => (
          <article key={item.id} className="grocery-item">
            <p className="title">{item.title}</p>
            <div className="btn-container">
              <FaEdit
                className="edit-btn"
                onClick={() =>
                  this.props.dispatch(groceryActions.editItem(item.id))
                }
              />
              <FaTrash
                className="delete-btn"
                onClick={() =>
                  this.props.dispatch(groceryActions.deleteItem(item.id))
                }
              />
            </div>
          </article>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsList: state.groceryState.itemsList,
  };
};

export default connect(mapStateToProps, null)(List);
