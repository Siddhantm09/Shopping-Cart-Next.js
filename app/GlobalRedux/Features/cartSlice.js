"use client";

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cart: []
    },
    reducers: {
        addItem: (state, action) => {
            state.cart = action.payload


        },
        deleteItem: (state, action) => {

        },
        removeItem: (state, action) => { }
    }
})
export const { addItem, deleteItem, removeItem } = cartSlice.actions
export default cartSlice.reducer