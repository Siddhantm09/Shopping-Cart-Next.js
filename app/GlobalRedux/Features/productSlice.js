"use client";

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "productSlice",
    initialState: {
        // errReq: {
        // },
        loading: true,
        products: [],
        cart: []
    },
    reducers: {
        loadProducts: (state, action) => {
            state.products = action.payload
            state.loading = false

        },
        addItem: (state, action) => {

            const product = state.products.find((product) => product.id === action.payload)
            console.log(product);
            state.cart.push(product)
            console.log(state.cart);

        },
        deleteItem: (state, action) => {

        },
        removeItem: (state, action) => { }
        // errLoading: (state, action) => {
        //     state.errReq = action.payload
        // }
    }
})
export const { loadProducts, errLoading, addItem, removeItem, deleteItem } = productSlice.actions
export default productSlice.reducer