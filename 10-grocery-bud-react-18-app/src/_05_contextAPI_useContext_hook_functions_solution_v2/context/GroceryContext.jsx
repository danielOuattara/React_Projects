import { createContext, useState, useEffect, useContext } from "react";

const GroceryContext = createContext();

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsListContextAPI_V2");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsListContextAPI_V2"));
  } else {
    return [];
  }
};

export default function GroceryContextProvider(props) {
  const [item, setItem] = useState("");
  const [itemsList, setItemsList] = useState(retrieveLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  //---------------------------------------

  const handleSubmitItem = (event) => {
    event.preventDefault();
    if (!item) {
      //display alert & do nothing
      setAlert(() => ({
        show: true,
        type: "danger",
        msg: "select a valid item name",
      }));
    } else if (item && isEditing) {
      // edit item
      setItemsList(() => {
        return itemsList.map((obj) => {
          if (obj.id === editID) {
            return { ...obj, title: item };
          }
          return obj;
        });
      });
      setItem("");
      setEditID(null);
      setIsEditing(false);
      setAlert(() => ({
        show: true,
        type: "success",
        msg: "Item successfully edited",
      }));
    } else {
      // add new item + show add alert
      setItemsList(() => [
        ...itemsList,
        {
          id: new Date().getTime().toString(),
          title: item,
        },
      ]);
      setAlert(() => ({
        show: true,
        type: "success",
        msg: "item added successfully",
      }));
      setItem("");
    }
  };

  const clearItemsList = () => {
    setItemsList(() => []);
    setAlert(() => ({
      show: true,
      type: "danger",
      msg: "emptying list",
    }));
  };

  //---------------------------------------

  const deleteItem = (id) => {
    setItemsList(() => itemsList.filter((item) => item.id !== id));
    setAlert(() => ({
      show: true,
      type: "success",
      msg: "item successfully removed",
    }));
  };

  //---------------------------------------

  const editItem = (id) => {
    const editingItem = itemsList.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setItem(editingItem.title);
  };

  //---------------------------------------

  useEffect(() => {
    localStorage.setItem("itemsListContextAPI_V2", JSON.stringify(itemsList));
  }, [itemsList]);

  const context = {
    item,
    setItem,
    itemsList,
    setItemsList,
    isEditing,
    setIsEditing,
    editID,
    setEditID,
    alert,
    setAlert,
    handleSubmitItem,
    clearItemsList,
    deleteItem,
    editItem,
  };

  return (
    <GroceryContext.Provider value={context}>
      {props.children}
    </GroceryContext.Provider>
  );
}

export const useGroceryContext = () => {
  return useContext(GroceryContext);
};
