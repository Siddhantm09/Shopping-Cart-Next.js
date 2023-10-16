"use client";
import React, { useState } from "react";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/pngwing.com (2).png";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredProducts } from "@/app/GlobalRedux/Features/productSlice";
const Navbar = () => {
  const [value, setValue] = useState("");
  const { products, cart } = useSelector((state) => state.productSlice);
  const dispatch = useDispatch();
  const filterProducts = () => {
    const filteredProducts = products.filter((product) =>
      product.title.includes(value)
    );
    dispatch(setFilteredProducts(filteredProducts));
  };
  return (
    <div className="nav-container flex">
      <div className="logo">
        <Link className="" href="/">
          <Image
            priority={true}
            src={logo}
            width={100}
            height={70}
            alt="logo"
          ></Image>
        </Link>
      </div>
      <div className="links">
        <ul className="flex">
          <li className="lists-mob flex">
            <input
              className="search-box"
              placeholder="Search..."
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="search-btn" onClick={filterProducts}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>

          <li className="lists-mob">
            <Link href="/carts" style={{ position: "relative" }}>
              <i
                style={{ fontSize: "22px" }}
                className=" cart-icon fa-solid fa-cart-shopping"
              ></i>
              {cart.length > 0 && (
                <i
                  style={{
                    fontSize: "23px",
                    position: "absolute",
                    bottom: "13px",
                    left: "16px",
                  }}
                  class="fa-solid fa-circle"
                ></i>
              )}
            </Link>
            {cart.length > 0 && (
              <h5
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "14px",
                  color: "white",
                }}
              >
                {cart.length}
              </h5>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
