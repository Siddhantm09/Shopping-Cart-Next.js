"use client";

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        errReq: {

        },
        loading: true,
        products: []
    },
    reducers: {
        loadProducts: (state, action) => {
            state.products = action.payload
            state.loading = false

        },
        errLoading: (state, action) => {
            state.errReq = action.payload
        }
    }
})
export const { loadProducts, errLoading } = productSlice.actions
export default productSlice.reducer