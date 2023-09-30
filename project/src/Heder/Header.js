import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { NavBar } from "./NavBar";
import { Home } from "../Home/Home.js";
import { AboutUs } from "../AboutUs/AboutUs.js";
import logo from "./logo.svg";
import { Search } from "./Search";
import "./Header.css";
import { productData } from "../Product/Data.js";

import { Category } from "../Category/Category";

export const Header = () => {
  const [categoty, setCategory] = useState(false);

  const categorySet = new Set();

  productData.map((product) => {
    categorySet.add(product.category);
  });

  const categoryList = [...categorySet];
  console.log("categoryList" + categoryList);
  console.log(categorySet);
  const handelCategoryList = () => {
    setCategory(!categoty);
  };
  return (
    <div className="HeaderHome">
      <div className="header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <button onClick={handelCategoryList}>Category + </button>
          <>
            {categoty &&
              categoryList.map((category) => {
                return (
                  <Link key={categoty} to={`/Category/${category}`}>
                    {category}
                  </Link>
                );
              })}
          </>
        </div>

        <div className="navitem">
          <NavBar />
          {/* 
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<AboutUs />} />
            </Routes>
          </Router> */}
        </div>
        <div className="search-box">
          <Search />
        </div>
      </div>
    </div>
  );
};
