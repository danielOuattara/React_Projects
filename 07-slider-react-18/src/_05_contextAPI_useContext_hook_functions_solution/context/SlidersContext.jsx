import { createContext, useState, useContext } from "react";
import people from "./../../data";

const SlidersContext = createContext();

export default function SlidersContextProvider(props) {
  const [index, setIndex] = useState(0);

  const checkIndex = (indexArg) => {
    if (indexArg === -1) {
      return setIndex(() => people.length - 1);
    } else if (indexArg === people.length) {
      return setIndex(() => 0);
    } else {
      return setIndex(indexArg);
    }
  };

  const handleUpdateIndex = (value) => {
    setIndex((previous) => previous + value);
  };
  return (
    <SlidersContext.Provider
      value={{ people, index, checkIndex, handleUpdateIndex }}
    >
      {props.children}
    </SlidersContext.Provider>
  );
}

export const useSlidersContext = () => {
  return useContext(SlidersContext);
};
