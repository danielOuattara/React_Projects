/* 
NOTE:  redux toolkit does not support well non-serialized objects.
        In this case the package "values.js" does generate non-serialized 
        objects containing data + functions/methods to handle those data.
        
        The solution I used here is to make a copy of each generated object
        and to create the desired function/method to do the job. See utils.js
        
        Making copies  does "forget" the non-serialized elements in each generated
        object 

*/

import { createSlice } from "@reduxjs/toolkit";
import Values from "values.js";

const initialList = new Values("#fbb146").all(Number(10));
const serializedInitialList = initialList.map((item) => ({ ...item }));

const initialColoGeneratorState = {
  step: 10,
  userColor: "",
  colorInputError: false,
  list: serializedInitialList,
};

const colorGeneratorSlice = createSlice({
  name: "colorGenerator-slice",
  initialState: initialColoGeneratorState,
  reducers: {
    setStep(state, action) {
      return {
        ...state,
        step: action.payload,
      };
    },
    setUserColor(state, action) {
      return {
        ...state,
        userColor: action.payload,
      };
    },
    setColorInputError(state, action) {
      return {
        ...state,
        colorInputError: action.payload,
      };
    },
    setList(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
});

export const colorGeneratorActions = colorGeneratorSlice.actions;

export default colorGeneratorSlice.reducer;
