import { createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.push({ ...action.payload, quantity: 1 });
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
