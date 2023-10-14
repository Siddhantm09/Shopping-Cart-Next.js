"use client";
import React from "react";
import "./cart.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import productSlice from "@/app/GlobalRedux/Features/productSlice";

const Cart = () => {
    const cart = useSelector((state) => state.productSlice.cart);

    return (
        <div className="cart-page">
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                <tr>
                    {cart.map((cartItem) => (
                        <>
                            <td>
                                <div className="cart-info">

                                    <>
                                        <Image
                                            className="image"
                                            src={cartItem.image}
                                            width={80}
                                            height={80}
                                            alt="image"
                                        ></Image>
                                        <div>
                                            <div>{cartItem.title}</div>
                                            <small>{cartItem.price}</small>
                                            <br />
                                            <a>Remove</a>
                                        </div>
                                    </>


                                </div>
                            </td>
                            <td>
                                <input type="number" placeholder="" />
                            </td>
                            <td>{cartItem.price}</td>
                        </>
                    ))}
                </tr>
            </table>
            <div className="total-price">
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>200 Rs</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>35 Rs</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>230 Rs</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Cart;
