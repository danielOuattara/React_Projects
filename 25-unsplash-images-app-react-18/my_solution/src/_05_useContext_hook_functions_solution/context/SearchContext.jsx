import { useContext, useState, createContext } from "react";
//-----------------------------------------------------------------

export const SearchContext = createContext();

export default function SearchContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("fish");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

//------

// make sure use
export const useSearchContext = () => useContext(SearchContext);
