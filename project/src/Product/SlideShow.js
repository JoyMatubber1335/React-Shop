import React, { useState } from "react";

import { productData } from "./Data.js";
import "./Slideshow.css";

export const SlideShow = () => {
  const [index, setIndex] = useState(0);
  const hasNext = index < productData.length - 1;
  const hasPrevious = index > 0;

  const handelNext = (e) => {
    e.preventDefault();
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handelPrevious = () => {
    if (hasPrevious) {
      console.log(index);
      setIndex(index - 1);
    } else {
      const last = productData.length - 1;
      console.log("last" + last);
      setIndex(last);
      console.log(index);
    }
  };
  const product = productData[index];
  return (
    <div>
      <div className="slideShow__container">
        <div className="slide__item">
          <div>
            <button onClick={handelPrevious}>Previous</button>
          </div>
          <img src={product.url} alt={product.alt} />
          <div>
            <button onClick={handelNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
