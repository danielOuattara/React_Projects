import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showModal,
        showSideBar,
        setShowModal,
        setShowSideBar,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

// standard method
export { AppContext, AppProvider };

// custom hook method
export const useGlobalContext = () => {
  return useContext(AppContext);
};
