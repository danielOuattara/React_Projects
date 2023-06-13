import { FaEdit, FaTrash } from "react-icons/fa";
import { deleteItem, editItem } from "./../redux/grocery/groceryActions";
import { connect } from "react-redux";

function List({ itemsList, dispatch }) {
  return (
    <div className="grocery-list">
      {itemsList.map((item) => (
        <article key={item.id} className="grocery-item">
          <p className="title">{item.title}</p>
          <div className="btn-container">
            <FaEdit
              className="edit-btn"
              onClick={() => dispatch(editItem(item.id))}
            />
            <FaTrash
              className="delete-btn"
              onClick={() => dispatch(deleteItem(item.id))}
            />
          </div>
        </article>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemsList: state.groceryState.itemsList,
  };
};

export default connect(mapStateToProps, null)(List);
