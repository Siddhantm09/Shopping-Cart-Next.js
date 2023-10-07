import Image from "next/image";
import React from "react";
import "./product.css";
const Product = ({ product }) => {
  return (
    <div className="card">
      <Image
        src={product.images[0]}
        width={280}
        height={200}
        alt="Logo"
        quality={100}
        style={{ borderRadius: "5px" }}
      />
      <div className="card-content flex">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <p>Rating: {product.rating}/5</p>
        <p>Items left: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <div className="flex btns">
          <button className="add-to-cart-btn">Add to Cart</button>
          <button className="go-to-cart-btn">Go to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
