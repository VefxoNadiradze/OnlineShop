import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Data"

export const Store = configureStore({
     reducer: {
        data: productSlice
     }
})

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;