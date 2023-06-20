const url = "https://course-api.com/react-useReducer-cart-project";

const CLEAR_CART = "CLEAR_CART";
const REMOVE_ITEM = "REMOVE_ITEM";
const CALCULATE_TOTAL = "CALCULATE_TOTAL";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";

const clearCart = () => ({ type: CLEAR_CART });
const removeItem = (id) => ({ type: REMOVE_ITEM, payload: { id } });
const calculateTotals = () => ({ type: CALCULATE_TOTAL });
const updateQuantity = (id, value) => ({
  type: UPDATE_QUANTITY,
  payload: { id, value },
});

//----------------------------------------------------------------

const START_FETCH_CART_ITEMS = "START_FETCH_CART_ITEMS";
const HANDLE_FETCH_ERROR = "HANDLE_FETCH_ERROR";
const HANDLE_FETCH_SUCCESS = "HANDLE_FETCH_SUCCESS";
const HANDLE_ERROR = "HANDLE_ERROR";

const startFetchCartItems = () => {
  return { type: START_FETCH_CART_ITEMS };
};

const handleFetchError = (message) => {
  return { type: HANDLE_FETCH_ERROR, payload: message };
};

const handleFetchSuccess = (data) => {
  return { type: HANDLE_FETCH_SUCCESS, payload: { data } };
};

const handleError = () => {
  return { type: HANDLE_ERROR };
};

const getCartItems = () => {
  return function (dispatch) {
    dispatch(startFetchCartItems());
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          dispatch(
            handleFetchError({
              errorMessage: `${response.status} ${response.statusText}`,
            }),
          );
          throw Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((responseData) => {
        dispatch(handleFetchSuccess(responseData));
      })
      .catch((error) => {
        dispatch(handleError());
        return error;
      });
  };
};

//------------------------------------------------------------------
export {
  CLEAR_CART,
  UPDATE_QUANTITY,
  REMOVE_ITEM,
  CALCULATE_TOTAL,
  START_FETCH_CART_ITEMS,
  HANDLE_FETCH_ERROR,
  HANDLE_FETCH_SUCCESS,
  HANDLE_ERROR,
  clearCart,
  updateQuantity,
  removeItem,
  calculateTotals,
  getCartItems,
};
