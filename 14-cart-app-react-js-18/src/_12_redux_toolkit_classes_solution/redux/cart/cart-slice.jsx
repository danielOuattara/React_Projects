import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { showModal } from "../modal/modal-slice";
const url = "https://course-api.com/react-useReducer-cart-project";

const initialCartState = {
  isLoading: false,
  cartItems: [],
  totalPrice: 0,
  totalItems: 0,
};
// --> 1
// export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
//   return fetch(url)
//     .then((response) => response.json())
//     .catch((error) => console.log(error));
// });

// --> 2
// export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
//   try {
//     const response = await fetch(url);
//     return await response.json();
//   } catch (error) {
//     return console.log(error);
//   }
// });

// --> 3
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      // console.log("name = ", name);
      // console.log("thunkAPI = ", thunkAPI);
      // console.log("thunkAPI.getState()", thunkAPI.getState());
      // thunkAPI.dispatch(showModal());
      const response = await axios(url);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    updateItemQuantity: (state, action) => {
      const itemToUpdateQuantity = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );

      if (
        itemToUpdateQuantity &&
        itemToUpdateQuantity.amount === 1 &&
        action.payload.value === -1
      ) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        itemToUpdateQuantity.amount += action.payload.value;
      }
    },

    calculateTotals: (state) => {
      const { totalItems, totalPrice } = state.cartItems.reduce(
        (total, currentItem) => {
          total.totalItems += currentItem.amount;
          total.totalPrice += currentItem.amount * currentItem.price;
          return total;
        },
        { totalItems: 0, totalPrice: 0 },
      );
      state.totalItems = totalItems;
      state.totalPrice = totalPrice.toFixed(2);
    },
  },
  /* ------ 1 */
  // extraReducers: {
  //   [getCartItems.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     console.log("action = ", action);
  //     state.isLoading = false;
  //     state.cartItems = action.payload;
  //   },
  //   [getCartItems.rejected]: (state, action) => {
  //     console.log("action = ", action);
  //     state.isLoading = false;
  //   },
  // },

  /* ------ 2 */
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        // console.log(action);
        state.isLoading = false;
      });
  },
});

export const { clearCart, removeItem, updateItemQuantity, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
