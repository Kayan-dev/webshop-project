import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostsFeed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get(`http://localhost:4000/products`);
      console.log("res", response);

      const products = response.data;
      console.log("products", products);
      setData(products);
    }
    fetchProducts();
  }, []);

  console.log("data", data);
  return (
    <div>
      <h2>Products</h2>
      <p>
        {data.map((product, i) => {
          //make link for each product to details page
          return <p key={product.id}>{product.name} </p>;
        })}
      </p>
    </div>
  );
}
