import React from "react";

import { NavBar } from "./NavBar";

import logo from "./logo.svg";
import { Search } from "./Search";
import "./Header.css";

export const Header = () => {
  return (
    <div className="HeaderHome">
      <div className="header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="navitem">
          <NavBar />
        </div>
        <div className="search-box">
          <Search />
        </div>
      </div>
    </div>
  );
};
