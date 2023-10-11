import React from "react";
import "./cart.css";
import Image from "next/image";

const cart = () => {
  return (
    <section className="section">
      <div className="container">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          <tr>
            <td>Product Name</td>
            <td>
              <input type="number" />
            </td>
            <td>50 Rs</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default cart;
