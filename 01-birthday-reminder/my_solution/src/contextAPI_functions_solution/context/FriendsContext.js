import React, { useState, createContext } from "react";
import data from "./../../data";

export const FriendsContext = createContext();

function FriendsContextProvider(props) {
  const [people, setPeople] = useState(data);

  const handleRemoveOnePerson = (id) => {
    setPeople(() => {
      return people.filter((person) => person.id !== id);
    });
  };

  const handleRefresh = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <FriendsContext.Provider
        value={{ people, handleRemoveOnePerson, handleRefresh, setPeople }}
      >
        {props.children}
      </FriendsContext.Provider>
    </div>
  );
}

export default FriendsContextProvider;
