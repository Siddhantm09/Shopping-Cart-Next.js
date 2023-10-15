import Image from "next/image";
import React from "react";
import "./product.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/app/GlobalRedux/Features/productSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    console.log(product.id);
    dispatch(addItem(product.id));
  };

  return (
    <div className="card">
      <Image
        src={product.image}
        width={280}
        height={200}
        alt="Logo"
        quality={100}
        style={{ borderRadius: "5px" }}
      />
      <div className="card-content flex">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p style={{ fontWeight: "bold" }}>Price: {product.price}</p>
        <p>Rating: {product.rating.rate}/5</p>
        <p>Rating: {product.rating.count}/5</p>
        {/* <p>Items left: {product.stock}</p> */}
        {/* <p>Brand: {product.brand}</p> */}
        <p style={{ fontWeight: "bold" }}>Category: {product.category}</p>
        <div className="flex btns">
          <button className="add-to-cart-btn" onClick={addToCart}>
            Add to Cart
          </button>
          <Link href="/carts">
            <button className="go-to-cart-btn">Go to Cart</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
