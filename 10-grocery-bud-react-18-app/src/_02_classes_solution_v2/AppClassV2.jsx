/* 
class + showAlert helper function + Alert in HOC React.memo 
*/

import { Component } from "react";
import { ItemForm, List } from "./components";

function retrieveLocalStorage() {
  let itemsList = localStorage.getItem("itemsListClassV2");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsListClassV2"));
  } else {
    return [];
  }
}

export default class AppClassV2 extends Component {
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
  handleChangeItemName = (value) => {
    return this.setState((prevState) => ({
      ...prevState,
      itemName: value,
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
    const editingItem = this.state.itemsList.find((item) => item.id === id);
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
        "itemsListClassV2",
        JSON.stringify(this.state.itemsList),
      );
    }
  }

  render() {
    return (
      <section className="section-center ">
        <p>class solution version 2 : showAlert() + Alert in HOC React.memo</p>

        <ItemForm
          itemName={this.state.itemName}
          isEditing={this.state.isEditing}
          alert={this.state.alert}
          handleChangeItemName={this.handleChangeItemName}
          handleSubmitItem={this.handleSubmitItem}
          showAlert={this.showAlert}
        />

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
