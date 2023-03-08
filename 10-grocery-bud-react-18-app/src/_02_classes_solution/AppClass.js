import { Component } from "react";
import List from "./components/List";
import Alert from "./components/Alert";

function retrieveLocalStorage() {
  let itemsList = localStorage.getItem("itemsListClass");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsListClass"));
  } else {
    return [];
  }
}

export default class AppClass extends Component {
  state = {
    itemName: "",
    itemsList: retrieveLocalStorage(),
    isEditing: false,
    editID: "",
    alert: {
      show: false,
      msg: "",
      type: "",
    },
  };

  //---------------------------------------
  handleChange = (event) => {
    return this.setState((prevState) => ({
      ...prevState,
      itemName: event.target.value,
    }));
  };

  //---------------------------------------
  handleSubmitItem = (event) => {
    event.preventDefault();
    if (!this.state.itemName) {
      //display alert & do nothing
      return this.showAlert(true, "danger", "select a valid itemName name");
      //
    } else if (this.state.itemName && this.state.isEditing) {
      // edit itemName
      this.setState((prevState) => ({
        ...prevState,
        itemsList: [
          ...prevState.itemsList.map((item) => {
            if (item.id === this.state.editID) {
              return { ...item, title: this.state.itemName };
            }
            return item;
          }),
        ],
        itemName: "",
        editID: "",
        isEditing: false,
      }));
      this.showAlert(true, "success", "Item successfully edited");
      //
    } else {
      // add new itemName + show add alert
      this.setState((prevState) => ({
        ...prevState,
        itemsList: [
          ...prevState.itemsList,
          {
            id: new Date().getTime().toString(),
            title: this.state.itemName,
          },
        ],
        itemName: "",
      }));
      this.showAlert(true, "success", "itemName added successfully");
    }
  };

  //---------------------------------------
  showAlert = (show = false, type = "", msg = "") =>
    this.setState((prevState) => ({
      ...prevState,
      alert: {
        show,
        type,
        msg,
      },
    }));

  //---------------------------------------
  clearItemsList = () => {
    this.setState((prevState) => ({ ...prevState, itemsList: [] }));
    this.showAlert(true, "danger", "emptying list");
  };

  //---------------------------------------
  deleteItem = (id) => {
    this.setState((prevState) => ({
      ...prevState,
      itemsList: [
        ...prevState.itemsList.filter((itemName) => itemName.id !== id),
      ],
    }));
    this.showAlert(true, "success", "itemName successfully removed");
  };

  //---------------------------------------
  editItem = (id) => {
    const editingItem = this.state.itemsList.find(
      (itemName) => itemName.id === id,
    );
    this.setState((prevState) => ({
      ...prevState,
      isEditing: true,
      editID: id,
      itemName: editingItem.title,
    }));
  };

  //---------------------------------------
  componentDidUpdate(prevProps, prevState) {
    if (prevState.itemsList !== this.state.itemsList) {
      localStorage.setItem(
        "itemsListClass",
        JSON.stringify(this.state.itemsList),
      );
    }
  }

  render() {
    return (
      <section className="section-center ">
        <p>class solution</p>

        <form className="grocery-form" onSubmit={this.handleSubmitItem}>
          <Alert {...this.state.alert} showAlert={this.showAlert} />
          <h3>grocery bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g eggs"
              value={this.state.itemName}
              onChange={this.handleChange}
            />
            <button type="submit" className="submit-btn">
              {this.state.isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {this.state.itemsList.length > 0 && (
          <div className="grocery-container">
            <List
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
