import React, { Component } from "react";
import ListClass from "./ListClass";
import AlertClass from "./AlertClass";

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsList");
  if (itemsList) {
    return JSON.parse(itemsList);
  } else {
    return [];
  }
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      itemsList: retrieveLocalStorage(),
      isEditing: false,
      editID: null,
      alert: { show: false, msg: "", type: "" },
    };
  }

  showAlert = (show = false, type = "", msg = "") => {
    this.setState({ alert: { show, type, msg } });
  };

  handleSubmitItem = (event) => {
    event.preventDefault();

    if (!this.state.item) {
      //display alert & do nothing
      this.showAlert(true, "danger", "select a valid item name");
      return;

    } else if (this.state.item && this.state.isEditing) {
      // deal with edit
      let editedItemsList = this.state.itemsList.map((obj) => {
        if (obj.id === this.state.editID) {
          return { ...obj, title: this.state.item };
        } else {
          return obj;
        }
      });
      this.setState({itemsList: editedItemsList});
      // this.setState(() => {
      //   return this.state.itemsList.map((obj) => {
      //     if (obj.id === this.state.editID) {
      //       return { ...obj, title: this.state.item };
      //     }
      //     return obj;
      //   });
      // });
      this.setState({ item: "" });
      this.setState({ editID: null });
      this.setState({ isEditing: false });
      this.showAlert(true, "success", "Item successfully edited");
    } else {
      // add new item + show add alert
      const newItem = {
        id: new Date().getTime().toString(),
        title: this.state.item,
      };
      this.setState({ itemsList: [...this.state.itemsList, newItem] });
      this.showAlert(true, "success", "item added succesfully");
      this.setState({ item: "" });
    }
  };

  clearItemsList = () => {
    this.setState(() => ({ itemsList: [] }));
    this.showAlert(true, "danger", "emptying list");
  };

  deleteItem = (id) => {
    this.setState((prevState) => ({
      itemsList: prevState.itemsList.filter((item) => item.id !== id),
    }));
    this.showAlert(true, "success", "item successfully removed");
  }

  editItem = (id) => {
    const editingItem = this.state.itemsList.find((item) => item.id === id);
    this.setState({ isEditing: true });
    this.setState({ editID: id });
    this.setState({ item: editingItem.title });
  };

  componentDidUpdate(prevState) {
    if (prevState.itemsList !== this.state.itemsList) {
      localStorage.setItem("itemsList", JSON.stringify(this.state.itemsList));
    }
  }

  render() {
    return (
      <section className="section-center ">
        <form className="grocery-form" onSubmit={this.handleSubmitItem}>
          <AlertClass {...this.state.alert} removeAlert={this.showAlert} />
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g eggs"
              value={this.state.item}
              onChange={(event) => this.setState({ item: event.target.value })}
            />
            <button className="submit-btn">
              {this.state.isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {this.state.itemsList.length > 0 && (
          <div className="grocery-container">
            <ListClass
              itemsList={this.state.itemsList}
              deleteItem={this.deleteItem}
              editItem={this.editItem}
            />
            <button className="clear-btn" onClick={this.clearItemsList}>
              clear all items
            </button>
          </div>
        )}
      </section>
    );
  }
}
