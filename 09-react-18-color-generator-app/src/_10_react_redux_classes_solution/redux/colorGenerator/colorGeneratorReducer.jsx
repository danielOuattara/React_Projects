import Values from "values.js";
import {
  SET_STEP,
  SET_USER_COLOR,
  SET_COLOR_INPUT_ERROR,
  SET_LIST,
} from "./colorGeneratorActions";

const initialColoGeneratorState = {
  step: 10,
  userColor: "",
  colorInputError: false,
  list: new Values("#fbb146").all(Number(10)),
};

export const colorGeneratorReducer = (
  state = initialColoGeneratorState,
  action,
) => {
  switch (action.type) {
    case SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case SET_USER_COLOR:
      return {
        ...state,
        userColor: action.payload,
      };
    case SET_COLOR_INPUT_ERROR:
      return {
        ...state,
        colorInputError: action.payload,
      };
    case SET_LIST:
      return {
        ...state,
        list: action.payload,
      };
    default:
      return state;
  }
};
