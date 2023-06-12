const SET_STEP = "HANDLE_STEP";
const SET_USER_COLOR = "HANDLE_USER_COLOR";
const SET_COLOR_INPUT_ERROR = "HANDLE_COLOR_INPUT_ERROR";
const SET_LIST = "HANDLE_SET_LIST";

const setStep = (value) => {
  return {
    type: SET_STEP,
    payload: value,
  };
};

const setUserColor = (value) => {
  return {
    type: SET_USER_COLOR,
    payload: value,
  };
};

const setColorInputError = (value) => {
  return {
    type: SET_COLOR_INPUT_ERROR,
    payload: value,
  };
};
const setList = (value) => {
  return { type: SET_LIST, payload: value };
};

export {
  SET_STEP,
  SET_USER_COLOR,
  SET_COLOR_INPUT_ERROR,
  SET_LIST,
  setStep,
  setUserColor,
  setColorInputError,
  setList,
};
