import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions/actions";

const cartReducer = (state, action) => {
  switch (action.type) {
    //--------------------------------------------------------
    case ADD_TO_CART:
      let productIndexInCart = state.cart.findIndex(
        (item) => item.id === action.payload.id + action.payload.mainColor,
      );

      // product + color  NOT in chart: add new product !
      if (productIndexInCart === -1) {
        const newItem = {
          id: action.payload.id + action.payload.mainColor,
          name: action.payload.singleProduct.name,
          color: action.payload.mainColor,
          amount: action.payload.amount,
          image: action.payload.singleProduct.images[0].url,
          price: action.payload.singleProduct.price,
          max: action.payload.singleProduct.stock,
        };

        state = {
          ...state,
          cart: [...state.cart, newItem],
          totalItems: state.totalItems + action.payload.amount,
          totalAmount:
            state.totalAmount +
            action.payload.singleProduct.price * action.payload.amount,
        };
      }

      // product + color already in chart
      if (productIndexInCart >= 0) {
        let productToUpdate = state.cart[productIndexInCart];
        // checking against max != amount (subtotal)
        if (
          action.payload.amount + productToUpdate.amount >
          productToUpdate.max
        ) {
          return state;
        } else {
          state.cart[productIndexInCart] = {
            ...productToUpdate,
            amount: productToUpdate.amount + action.payload.amount,
          };
          state.totalItems = state.totalItems + action.payload.amount;
          state.totalAmount =
            state.totalAmount +
            action.payload.singleProduct.price * action.payload.amount;
        }
      }

      console.log("productIndexInCart = ", productIndexInCart);
      console.log("state = ", state);

      return state;

    //--------------------------------------------------------

    default:
      return state;
  }
};

export default cartReducer;
