import { useReducer, useEffect, createContext } from "react";
import { groceryReducer } from "./../reducer/grocery/groceryReducer";
//-----------------------------------------------

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsListReducerContextAPI");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsListReducerContextAPI"));
  } else {
    return [];
  }
};

export const GroceryContext = createContext();

const initialGroceryState = {
  itemName: "",
  itemsList: retrieveLocalStorage(),
  isEditing: false,
  editID: null,
  alert: { show: false, msg: "", type: "" },
};

export default function GroceryContextProvider(props) {
  const [groceryState, dispatchGrocery] = useReducer(
    groceryReducer,
    initialGroceryState,
  );

  const context = {
    ...groceryState,
    dispatchGrocery,
  };

  useEffect(() => {
    localStorage.setItem(
      "itemsListReducerContextAPI",
      JSON.stringify(groceryState.itemsList),
    );
  }, [groceryState.itemsList]);

  return (
    <GroceryContext.Provider value={context}>
      {props.children}
    </GroceryContext.Provider>
  );
}
