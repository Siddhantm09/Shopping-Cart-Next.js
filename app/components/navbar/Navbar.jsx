import React from "react";
import "./Navbar.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="nav-container flex">
      <div className="logo">
        <Link className="" href="/">
          Logo
        </Link>
      </div>
      <div className="links">
        <ul className="flex">
          <li className="lists">
            <input className="search-box" placeholder="Search..." />
            <button className="search-btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
          <li className="lists flex">
            <Link href="/signup" className="sign-up-btn">
              Sign up
            </Link>
          </li>
          <li className="lists">
            <Link href="/cart" className="cart-up-btn">
              Cart : {}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
