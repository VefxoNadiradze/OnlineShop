import { createSlice } from "@reduxjs/toolkit";

let initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push({ ...action.payload, quantity: 1 });
    },

    incrementFoo: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrementFoo: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item ) {
        item.quantity -= 1;
      }
      if(item && item.quantity ===0) {
        const findIndex = state.findIndex((item) => item.id === action.payload);
        state.splice(findIndex, 1);
      }
    },
  },
});

export const { addToCart, incrementFoo, decrementFoo } = cartSlice.actions;

export default cartSlice.reducer;
