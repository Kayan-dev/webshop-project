import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostsFeed() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get(`http://localhost:4000/products`);
      console.log("res", response);

      const products = response.data.categories;
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
        {data.map((product) => {
          return <Link path="product/:id">{product.name}</Link>;
        })}
      </p>
    </div>
  );
}
