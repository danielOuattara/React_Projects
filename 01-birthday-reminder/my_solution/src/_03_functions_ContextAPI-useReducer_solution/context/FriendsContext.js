/* ---> Context.Consumer 
------------------------ */

import { useState, createContext } from "react";
import data from "../../data";

export const FriendsContext = createContext();

function FriendsContextProvider(props) {
  const [people, setPeople] = useState(data);

  const handleRemoveOnePerson = (id) => {
    setPeople(() => {
      return people.filter((person) => person.id !== id);
    });
  };

  const handleRefresh = () => {
    setPeople(() => data);
  };

  return (
    <FriendsContext.Provider
      value={{ people, handleRemoveOnePerson, handleRefresh, setPeople }}
    >
      {props.children}
    </FriendsContext.Provider>
  );
}

export default FriendsContextProvider;
