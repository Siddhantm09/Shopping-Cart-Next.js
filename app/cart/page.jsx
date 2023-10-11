import React from "react";
import "./cart.css";
import Image from "next/image";

const cart = () => {
  return (
    <div className="cart-page">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td>
            <div className="cart-info">
              <Image
                className="image"
                src="https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                width={80}
                height={80}
              ></Image>
              <div>
                <div>Red Printed Tshirt</div>
                <small>Price: 50</small>
                <br />
                <a>Remove</a>
              </div>
            </div>
          </td>
          <td>
            <input type="number" />
          </td>
          <td>50 Rs</td>
        </tr>
      </table>
      <div className="total-price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>200 Rs</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>35 Rs</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>230 Rs</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default cart;
