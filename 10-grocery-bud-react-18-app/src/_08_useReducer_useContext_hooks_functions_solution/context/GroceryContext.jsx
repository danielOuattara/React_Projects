import { useReducer, useEffect, createContext, useContext } from "react";
import { groceryReducer } from "./../reducer/grocery/groceryReducer";
//-----------------------------------------------

const retrieveLocalStorage = () => {
  let itemsList = localStorage.getItem("itemsList_useReducer_useContext");
  if (itemsList) {
    return JSON.parse(localStorage.getItem("itemsList_useReducer_useContext"));
  } else {
    return [];
  }
};

const GroceryContext = createContext();

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
      "itemsList_useReducer_useContext",
      JSON.stringify(groceryState.itemsList),
    );
  }, [groceryState.itemsList]);

  return (
    <GroceryContext.Provider value={context}>
      {props.children}
    </GroceryContext.Provider>
  );
}

export const useGroceryContext = () => {
  return useContext(GroceryContext);
};
