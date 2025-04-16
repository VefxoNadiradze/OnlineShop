import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Data";
import cartSlice from "./Cart";
import wishlistSlice from "./wishlist";
export const Store = configureStore({
  reducer: {
    data: productSlice,
    cartData: cartSlice,
    wishlistData: wishlistSlice,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
