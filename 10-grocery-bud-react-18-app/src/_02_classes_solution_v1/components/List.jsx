import { PureComponent } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default class List extends PureComponent {
  render() {
    return (
      <div className="grocery-list">
        {this.props.itemsList.map((item) => {
          return (
            <article key={item.id} className="grocery-item">
              <p className="title">{item.title}</p>
              <div className="btn-container">
                <FaEdit
                  className="edit-btn"
                  onClick={() => this.props.editItem(item.id)}
                />
                <FaTrash
                  className="delete-btn"
                  onClick={() => this.props.deleteItem(item.id)}
                />
              </div>
            </article>
          );
        })}
      </div>
    );
  }
}
