import React from "react";
import Product from "../product/product";
import "./productsList.css";
const ProductList = async () => {
  const result = await fetch("https://dummyjson.com/products");
  const results = await result.json();
  const products = results.products;

  return (
    <div className="card-container">
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
