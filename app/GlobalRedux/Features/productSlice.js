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

            const oldCartItem = state.cart.find((product) => product.id === action.payload)
            if (oldCartItem) {
                oldCartItem.quantity = oldCartItem.quantity + 1
            }
            else {
                const newCartItem = state.products.find((items) => items.id === action.payload)
                newCartItem.quantity = 1
                state.cart.push(newCartItem)
            }


        },
        deleteItem: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload)
        },
        removeItem: (state, action) => {
            const itemToRemove = state.cart.find((product) => product.id === action.payload)
            if (itemToRemove) {
                itemToRemove.quantity = itemToRemove.quantity - 1
                if (itemToRemove.quantity <= 0) {
                    state.cart = state.cart.filter((product) => product.id !== action.payload)
                }


            }
            // errLoading: (state, action) => {
            //     state.errReq = action.payload
            // }
        }
    }
})
export const { loadProducts, errLoading, addItem, removeItem, deleteItem } = productSlice.actions
export default productSlice.reducer