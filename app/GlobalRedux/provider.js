"use client";
import { Provider } from "react-redux"
import { store } from "./store";
import Navbar from "../components/navbar/Navbar";


export function Providers({ children }) {
    return <Provider store={store}>


        {children}</Provider>
}