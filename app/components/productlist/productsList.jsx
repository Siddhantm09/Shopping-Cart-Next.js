"use client";
import React, { useEffect, useState } from "react";
import Product from "../product/product";
import "./productsList.css";
import { loadProducts } from "@/app/GlobalRedux/Features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ProductList = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setDomLoaded(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => dispatch(loadProducts(response.data)))
      .catch((err) => console.log(err));
  }, []);

  const { products, loading } = useSelector((state) => state.productSlice);

  return (
    <>
      {domLoaded && (
        <section className="card-container">
          {/* {errReq && <h1>Please wait...</h1>}
      <br /> */}
          {loading && <h1>Loading!!!</h1>}
          {products.map((product) => (
            <div key={product.id}>
              <Product product={product} />
            </div>
          ))}
        </section>
      )}
    </>
  );
};

export default ProductList;
