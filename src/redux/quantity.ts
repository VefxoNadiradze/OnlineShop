import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 1;
const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    increment: (state, action) => {
      return state + action.payload;
    },

    decrement: (state, action) => {
      return state - action.payload;
    },
  },
});

export const {increment, decrement} = quantitySlice.actions

export default quantitySlice.reducer;
