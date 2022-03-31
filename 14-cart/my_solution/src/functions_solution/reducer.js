// const amountModifier = (state, action, param) => {
//     let cartModified = state.cart
//       .map((item) => {
//         if (item.id === action.payload) {
//           return { ...item, amount: item.amount + param };
//         }
//         return item;
//       })
//       .filter((item) => item.amount !== 0);
//     return {
//       ...state,
//       cart: cartModified,
//     };
//   };

const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return {
        ...state,
        loading: false,
        cart: [],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    // case "DECREASE_AMOUNT":
    //   amountModifier(state, action, -1);

    // case "INCREASE_AMOUNT":
    //   amountModifier(state, action, 1);

    // case "DECREASE_AMOUNT":
    //   let cartDecreased = state.cart
    //     .map((item) => {
    //       if (item.id === action.payload) {
    //         return { ...item, amount: item.amount - 1 };
    //       }
    //       return item;
    //     })
    //     .filter((item) => item.amount !== 0);

    //   return {
    //     ...state,
    //     cart: cartDecreased,
    //   };

    // case "INCREASE_AMOUNT":
    //   let cartIncreased = state.cart.map((item) => {
    //     if (item.id === action.payload) {
    //       return { ...item, amount: item.amount + 1 };
    //     }
    //     return item;
    //   });

    //   return {
    //     ...state,
    //     cart: cartIncreased,
    //   };

    case "GET_TOTALS":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;

          return cartTotal;
        },
        { total: 0, amount: 0 }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case "LOADING":
      return { ...state, loading: true };

    case "DISPLAY_ITEMS":
      return { ...state, cart: action.payload, loading: false };

    case "MODIFY_AMOUNT":
      let tempCart = state.cart
        .map((item) => {
          if (
            item.id === action.payload.id &&
            action.payload.type === "increase"
          ) {
            return { ...item, amount: item.amount + 1 };
          } else if (
            item.id === action.payload.id &&
            action.payload.type === "decrease"
          ) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      return { ...state, cart: tempCart };
    default:
      return state;
  }
};

export default reducer;
