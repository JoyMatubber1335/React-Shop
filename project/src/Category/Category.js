import React from "react";
import { useParams } from "react-router-dom";
import { productData } from "../Product/Data";

export const Category = () => {
  const { category } = useParams();
  console.log("Category:", category);
  const filteredProducts = productData.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <h1>Your Category is {category} </h1>
      {filteredProducts.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </div>
  );
};
