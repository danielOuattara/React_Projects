import {
  CLEAR_CART,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
  CALCULATE_TOTAL,
  START_FETCH_CART_ITEMS,
  HANDLE_FETCH_ERROR,
  HANDLE_FETCH_SUCCESS,
  HANDLE_ERROR,
} from "./cartAction.jsx";

const initialCartState = {
  isLoading: false,
  error: "",
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};

export const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    //--------------------------------------
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    //--------------------------------------
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        ),
      };
    //--------------------------------------
    // VERSION 1
    // case UPDATE_QUANTITY:
    //   let updatedCartItems = [...state.cartItems];

    //   const itemToUpdate = state.cartItems.find(
    //     (item) => item.id === action.payload.id,
    //   );
    //   if (!itemToUpdate) return state;

    //   const itemToUpdateIndex = state.cartItems.findIndex(
    //     (item) => item.id === action.payload.id,
    //   );

    //   if (itemToUpdate.amount === 1 && action.payload.value === -1) {
    //     updatedCartItems = updatedCartItems.filter(
    //       (item) => item.id !== action.payload.id,
    //     );
    //   } else {
    //     updatedCartItems[itemToUpdateIndex] = {
    //       ...updatedCartItems[itemToUpdateIndex],
    //       amount:
    //         updatedCartItems[itemToUpdateIndex].amount + action.payload.value,
    //     };
    //     itemToUpdate.amount += action.payload.value;
    //   }
    //   return {
    //     ...state,
    //     cartItems: updatedCartItems,
    //   };

    //--------------------------------------
    // VERSION 2
    case UPDATE_QUANTITY:
      const itemToUpdate = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (!itemToUpdate) return state;

      let updatedCartItems = [];

      if (itemToUpdate.amount === 1 && action.payload.value === -1) {
        updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        updatedCartItems = state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            item = { ...item, amount: item.amount + action.payload.value };
          }
          return item;
        });
      }
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    //--------------------------------------
    case CALCULATE_TOTAL:
      const { totalItems, totalPrice } = state.cartItems.reduce(
        (total, currentItem) => {
          total.totalItems += currentItem.amount;
          total.totalPrice += currentItem.amount * currentItem.price;
          return total;
        },
        { totalItems: 0, totalPrice: 0 },
      );

      return {
        ...state,
        totalItems,
        totalPrice: Number(totalPrice.toFixed(2)),
      };

    //--------------------------------------
    case START_FETCH_CART_ITEMS:
      return {
        ...state,
        isLoading: true,
      };

    //--------------------------------------
    case HANDLE_FETCH_ERROR:
      return {
        ...state,
        error: action.payload.message,
        isLoading: false,
      };

    //--------------------------------------
    case HANDLE_FETCH_SUCCESS:
      return {
        ...state,
        cartItems: [...action.payload.data],
        error: "",
        isLoading: false,
      };

    //--------------------------------------
    case HANDLE_ERROR:
      return {
        ...state,
        error: "Something went wrong, try again later !",
        isLoading: false,
      };
    default:
      return state;
  }
};
