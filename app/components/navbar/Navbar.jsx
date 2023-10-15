import React from "react";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/pngwing.com (2).png";
const Navbar = () => {
  return (
    <div className="nav-container flex">
      <div className="logo">
        <Link className="" href="/">
          <Image
            priority={true}
            src={logo}
            width={80}
            height={70}
            alt="logo"
          ></Image>
        </Link>
      </div>
      <div className="links">
        <ul className="flex">
          <li className="lists-mob flex">
            <input className="search-box" placeholder="Search..." />
            <button className="search-btn">
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
