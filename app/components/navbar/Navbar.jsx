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
  const products = useSelector((state) => state.productSlice.products);
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
            <Link href="/carts">
              <i
                style={{ fontSize: "20px" }}
                className="fa-solid fa-cart-shopping"
              ></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
