// Classic solution

// import { useState, createContext } from "react";

// export const AppContext = createContext();

// export default function AppContextProvider({ children }) {
//   const [isSideBarOpen, setIsSideBarOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   return (
//     <AppContext.Provider
//       value={{ isSideBarOpen, setIsSideBarOpen, isModalOpen, setIsModalOpen }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// }

//----------------------------------------------------------

// John's solution
//

import { useState, useContext, createContext } from "react";

export const AppContext = createContext();
export const useAppContext = () => useContext(AppContext); //<--this

export default function AppContextProvider({ children }) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{ isSideBarOpen, setIsSideBarOpen, isModalOpen, setIsModalOpen }}
    >
      {children}
    </AppContext.Provider>
  );
}
