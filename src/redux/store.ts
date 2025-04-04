import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Data"
import cartSlice from "./Cart"
export const Store = configureStore({
     reducer: {
        data: productSlice,
        cartData: cartSlice
     }
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;