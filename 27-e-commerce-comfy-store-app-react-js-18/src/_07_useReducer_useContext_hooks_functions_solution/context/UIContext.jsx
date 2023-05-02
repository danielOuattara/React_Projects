import { useContext, useReducer, createContext } from "react";
import { uiReducer } from "./../reducer";
import { TOGGLE_SIDEBAR } from "../actions/actions";

const initialUIState = {
  isSideBarOpen: false,
};

const UIContext = createContext();

export default function UIContextProvider({ children }) {
  const [uiState, dispatchUI] = useReducer(uiReducer, initialUIState);

  const toggleSideBar = () => {
    dispatchUI({ type: TOGGLE_SIDEBAR });
  };

  return (
    <UIContext.Provider
      value={{ toggleSideBar, isSideBarOpen: uiState.isSideBarOpen }}
    >
      {children}
    </UIContext.Provider>
  );
}

// make sure use
export const useUIContext = () => {
  console.log("I AM ALIVE !!!!");
  return useContext(UIContext);
};
