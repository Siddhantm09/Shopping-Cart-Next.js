"use client";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Features/productSlice";
import cartSlice from "./Features/cartSlice";
export const store = configureStore({
    reducer: {
        productSlice,
        cartSlice
    }
})