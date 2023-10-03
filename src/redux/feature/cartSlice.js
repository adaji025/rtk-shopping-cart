import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: data,
    totalAmount: 0,
    totalQty: 0,
  },
  reducers: {
    getTotalItem: (state) => {
      let { totalAmount, totalQty } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalQty += amount;

          return cartTotal;
        },
        { totalAmount: 0, totalQty: 0 }
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2));
      state.totalQty = totalQty;
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increase: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
    },
    decrease: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);
      },
      clearCart: (state, action) => {
        state.items = [];
      },
      getCartItems: (state) => {
        state.items = data;
      },
  },
});
export const { getTotalItem, increase, clearCart, decrease, getCartItems, remove } = cartSlice.actions;
export default cartSlice.reducer;
