import {
  CLEAR_CART,
  LOAD_CART_ITEMS,
  GET_TOTALS,
  LOADING,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
} from "./cartItemsActions";

export default function cartItemsReducer(state, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: true };

    case CLEAR_CART:
      return {
        ...state,
        isLoading: false,
        cart: [],
      };

    case LOAD_CART_ITEMS:
      const correctedFetchedCart = action.payload.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.img,
        quantity: item.amount,
      }));
      return { ...state, cart: correctedFetchedCart, isLoading: false };

    case GET_TOTALS:
      let { totalPrice, totalItems } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          cartTotal.totalPrice += price * quantity;
          cartTotal.totalItems += quantity;

          return cartTotal;
        },
        { totalPrice: 0, totalItems: 0 },
      );
      totalPrice = parseFloat(totalPrice.toFixed(2));
      return { ...state, totalPrice, totalItems };

    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case UPDATE_QUANTITY:
      let updatedCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + action.payload.value };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);

      return {
        ...state,
        cart: updatedCart,
      };

    default:
      return state;
  }
}
