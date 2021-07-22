import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addedToCart(state, action) {
      state.cart.push(action.payload);
    },
    removedFromCart(state, action) {
      const newCartState = state.cart.filter(
        (product) => product._id !== action.payload
      );
      state.cart = newCartState;
      state.cartOpen = newCartState.length > 0;
    },
    clearedCart(state) {
      state.cart = [];
      state.cartOpen = false;
    },
    toggledCart(state) {
      state.cartOpen = !state.cartOpen;
    },
  },
});

export const { addedToCart, removedFromCart, clearedCart, toggledCart } =
  cartSlice.actions;

export default cartSlice.reducer;
