const UPDATE_INDEX = "UPDATE_INDEX";
const CHECK_INDEX = "CHECK_INDEX";

const updateIndex = (value) => {
  return {
    type: UPDATE_INDEX,
    payload: value,
  };
};

const checkIndex = (argIndex) => {
  return { type: CHECK_INDEX, payload: argIndex };
};

export { UPDATE_INDEX, updateIndex, CHECK_INDEX, checkIndex };
