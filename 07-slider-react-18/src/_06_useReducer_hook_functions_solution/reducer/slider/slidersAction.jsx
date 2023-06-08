const HANDLE_UPDATE_INDEX = "HANDLE_UPDATE_INDEX";
const HANDLE_CHECK_INDEX = "HANDLE_CHECK_INDEX";

const handleUpdateIndex = (value) => {
  return {
    type: HANDLE_UPDATE_INDEX,
    payload: value,
  };
};

const handleCheckIndex = (argIndex) => {
  return { type: HANDLE_CHECK_INDEX, payload: argIndex };
};

export {
  HANDLE_UPDATE_INDEX,
  handleUpdateIndex,
  HANDLE_CHECK_INDEX,
  handleCheckIndex,
};
