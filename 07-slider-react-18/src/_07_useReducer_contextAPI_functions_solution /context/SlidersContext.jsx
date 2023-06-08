import data from "./../../data";
import { createContext, useReducer } from "react";
import { slidersReducer } from "../reducer/slider/sliderReducers";
import { checkIndex, updateIndex } from "../reducer/slider/slidersAction";

export const SlidersContext = createContext();

const initialSlidersState = {
  index: 0,
  people: [...data],
};

export default function SlidersContextProvider(props) {
  const [slidersState, dispatchSliders] = useReducer(
    slidersReducer,
    initialSlidersState,
  );

  const handleCheckIndex = (argIndex) => {
    return dispatchSliders(checkIndex(argIndex));
  };

  const handleUpdateIndex = (argValue) => {
    return dispatchSliders(updateIndex(argValue));
  };

  return (
    <SlidersContext.Provider
      value={{
        people: slidersState.people,
        index: slidersState.index,
        handleCheckIndex,
        handleUpdateIndex,
      }}
    >
      {props.children}
    </SlidersContext.Provider>
  );
}
