import { createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.push({ ...action.payload, quantity: 1 });
    },
    removeCurrentItem: (state, action) => {
       const findIndex= state.findIndex((item) => item.id === action.payload)

      state.splice(findIndex, 1);
    },
  },
});

export const { addToWishlist, removeCurrentItem } = wishlistSlice.actions;

export default wishlistSlice.reducer;
