"use client";
import React from "react";
import "./cart.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem, removeItem } from "@/app/GlobalRedux/Features/productSlice";

const Cart = () => {

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.productSlice.cart);

    const TotalPrice = cart.reduce((acc, curr) => acc = acc + curr.price * curr.quantity, 0)
    const TotalTax = cart.reduce((acc, curr) => acc = acc + curr.price % 100 * curr.quantity, 0)
    return (
        <div className="cart-page">
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                {cart.map((cartItem) => (
                    <tr>

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
                                            <button onClick={() => dispatch(deleteItem(cartItem.id))}>Remove</button>
                                        </div>
                                    </>
                                </div>
                            </td>
                            <td>
                                <td className="quantity flex">
                                    <button onClick={() => dispatch(addItem(cartItem.id))} className="plus-minus-btn">+</button>
                                    <span>{cartItem.quantity}</span>
                                    <button onClick={() => dispatch(removeItem(cartItem.id))} className="plus-minus-btn">-</button>
                                </td>
                            </td>
                            <td>{cartItem.price}</td>
                        </>

                    </tr>
                ))}
            </table>
            {cart.length > 0 && <div className="total-price">
                <table>
                    <tr>
                        <td>Subtotal</td>
                        <td>{TotalPrice.toFixed(2)}</td>

                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>{TotalTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>{(TotalPrice + TotalTax).toFixed(2)}</td>
                    </tr>
                </table>
            </div>}
            <div style={{ marginTop: '50px' }}>
                {cart.length == 0 && <div className="empty">
                    <h2>Your cart Is empty! <a href="/">Shop now</a></h2>
                </div>
                }
            </div>
        </div>

    );
};

export default Cart;
