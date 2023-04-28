export default function cartItemsReducer(state, action) {
  switch (action.type) {
    case "CLEAR_CART":
      return {
        ...state,
        isLoading: false,
        cart: [],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "DECREASE_AMOUNT":
      let cartDecreased = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);

      return {
        ...state,
        cart: cartDecreased,
      };

    case "INCREASE_AMOUNT":
      let cartIncreased = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return {
        ...state,
        cart: cartIncreased,
      };

    case "GET_TOTALS":
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

    case "LOADING":
      return { ...state, isLoading: true };

    case "DISPLAY_ITEMS":
      const correctedFetchedCart = action.payload.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        img: item.img,
        quantity: item.amount,
      }));
      return { ...state, cart: correctedFetchedCart, isLoading: false };

    // case "MODIFY_AMOUNT":
    //   let tempCart = state.cart
    //     .map((item) => {
    //       if (
    //         item.id === action.payload.id &&
    //         action.payload.type === "increase"
    //       ) {
    //         return { ...item, amount: item.amount + 1 };
    //       } else if (
    //         item.id === action.payload.id &&
    //         action.payload.type === "decrease"
    //       ) {
    //         return { ...item, amount: item.amount - 1 };
    //       }
    //       return item;
    //     })
    //     .filter((item) => item.amount !== 0);
    //   return { ...state, cart: tempCart };

    default:
      return state;
  }
}
