import { useState, createContext, useContext } from "react";
import data from "../../data";

export const FriendsContext = createContext();

export default function FriendsContextProvider(props) {
  const [people, setPeople] = useState(data);

  const handleRemoveOnePerson = (id) => {
    return setPeople(() => {
      return people.filter((person) => person.id !== id);
    });
  };

  const handleRefresh = () => setPeople(() => data);

  return (
    <FriendsContext.Provider
      value={{ people, handleRemoveOnePerson, handleRefresh, setPeople }}
    >
      {props.children}
    </FriendsContext.Provider>
  );
}

export const useFriendContext = () => useContext(FriendsContext);
