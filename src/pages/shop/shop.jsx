import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Best Shoes</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={Math.floor(Math.random() * 100)} data={product} />
        ))}
      </div>
    </div>
  );
};
