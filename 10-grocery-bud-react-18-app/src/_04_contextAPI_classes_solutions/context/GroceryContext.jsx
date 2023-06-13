import { Component, createContext } from "react";

export const GroceryContext = createContext();

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsListContextAPI_Class");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsListContextAPI_Class"));
  } else {
    return [];
  }
};

export default class GroceryContextProvider extends Component {
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
        "itemsListClassV1",
        JSON.stringify(this.state.itemsList),
      );
    }
  }
  render() {
    const context = {
      itemName: this.state.itemName,
      itemsList: this.state.itemsList,
      isEditing: this.state.isEditing,
      alert: this.state.alert,
      showAlert: this.showAlert,
      handleChangeItemName: this.handleChangeItemName,
      handleSubmitItem: this.handleSubmitItem,
      clearItemsList: this.clearItemsList,
      deleteItem: this.deleteItem,
      editItem: this.editItem,
    };
    return (
      <GroceryContext.Provider value={context}>
        {this.props.children}
      </GroceryContext.Provider>
    );
  }
}
