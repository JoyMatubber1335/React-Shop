import React from "react";
import { NavLink } from "react-router-dom";
import { productData } from "../Product/Data.js";

export const NavBar = () => {
 
  const activeLinkStyle = {
    color: "red",
    fontWeight: "bold",
  };

  return (
    <div>
      <div>
        <NavLink
          to="/"
          activeStyle={{
            color: "red ",
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/product"
          activeStyle={{
            color: "red",
          }}
        >
          Product
        </NavLink>
        <NavLink
          to="#"
          activeStyle={{
            color: "red",
          }}
        >
          Cart
        </NavLink>
        <NavLink
          to="/about"
          activeStyle={{
            color: "red",
          }}
        >
          About Us
        </NavLink>
      </div>
    </div>
  );
};
