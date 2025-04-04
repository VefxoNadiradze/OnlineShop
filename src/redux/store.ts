import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Data"
import cartSlice from "./Cart"
import quantitySlice from "./quantity"

export const Store = configureStore({
     reducer: {
        data: productSlice,
        cartData: cartSlice,
        quantity: quantitySlice
     }
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;