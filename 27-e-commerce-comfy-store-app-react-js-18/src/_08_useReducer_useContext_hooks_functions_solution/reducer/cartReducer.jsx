import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM_AMOUNT,
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
          return (state = {
            ...state,
            cartMessageError: `The max available quantity for the article ${productToUpdate.name} is ${productToUpdate.max}. Please reduce your quantity`,
          });
        } else {
          state.cart[productIndexInCart] = {
            ...productToUpdate,
            amount: productToUpdate.amount + action.payload.amount,
            cartMessageError: "",
          };
        }
      }
      return state;

    //--------------------------------------------------------
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    //--------------------------------------------------------
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    //--------------------------------------------------------
    case UPDATE_CART_ITEM_AMOUNT:
      // create & return "updatedCart" is necessary for useEffect to detect
      // change in cart and update local storage, see CartContext.jsx
      let updatedCart = [...state.cart];

      const productToUpdateIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id,
      );
      const productToUpdate = updatedCart[productToUpdateIndex];

      if (productToUpdateIndex === -1) {
        return state; // security check
      }

      // remove item if qty = 1 and update value = -1
      if (productToUpdate.amount === 1 && action.payload.value === -1) {
        updatedCart = updatedCart.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        // increase with qty >= 1; decrease with qty >=2
        if (
          // checking against max != amount (subtotal)
          productToUpdate.amount + action.payload.value >
          productToUpdate.max
        ) {
          state = {
            ...state,
            cartMessageError: `The max available quantity for the article ${productToUpdate.name} is ${productToUpdate.max}. Please reduce your quantity`,
          };
        } else {
          updatedCart[productToUpdateIndex] = {
            ...state.cart[productToUpdateIndex],
            amount:
              updatedCart[productToUpdateIndex].amount + action.payload.value,
          };
          state.cartMessageError = "";
        }
      }

      return {
        ...state,
        cart: updatedCart,
      };

    //--------------------------------------------------------
    case COUNT_CART_TOTALS:
      const { totalItems, totalAmount } = state.cart.reduce(
        (total, cartItem) => {
          total.totalItems += cartItem.amount;
          total.totalAmount += cartItem.price * cartItem.amount;
          return total;
        },
        { totalItems: 0, totalAmount: 0 },
      );
      return { ...state, totalItems, totalAmount };

    //--------------------------------------------------------
    default:
      return state;
  }
};

export default cartReducer;
