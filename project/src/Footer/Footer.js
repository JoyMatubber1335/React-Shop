import React from "react";
import logo from "../logo.svg";
export const Footer = () => {
  return (
    <div>
      <div className="footer__top">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="copyright">
          <h4>@Copyright 23</h4>
        </div>
        <div className="paragraph">
          <p>
            This grocery shop has become my go-to place for all my grocery needs. The convenience of its location and
            the quality of their products keep me coming back.
          </p>
        </div>
      </div>
    </div>
  );
};
