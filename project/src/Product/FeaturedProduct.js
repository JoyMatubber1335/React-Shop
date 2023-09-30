import React, { useState } from "react";

import { productData } from "./Data.js";
import { AddtoCard } from "./AddtoCard.js";

export const FeaturedProduct = () => {
  const [card, setCart] = useState([]);
  const [stock, setStock] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const handelAddtocard = (product) => {
    const isProductInCart = card.some((item) => item.id === product.id);
    if (!isProductInCart) {
      setCart([...card, { ...product, count: 1 }]);
    } else {
      alert("Already in cart");
    }
  };

  const onInStockOnlyChange = (e) => {
    setStock(!stock);
  };
  const openCart = () => {
    setCartOpen(true);
  };
  const closeCard = () => {
    setCartOpen(false);
  };

  const filteredProducts = stock
    ? productData.filter((product) => product.stock)
    : productData;

  return (
    <div>
      <div className="product__filter">
        <input
          type="checkbox"
          checked={stock}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        Show in stock products
      </div>
      <div className="product__container">
        {filteredProducts.map((product) => {
          return (
            <div className="product" key={product.id}>
              <img src={product.url} alt={product.alt} />
              <h2>{product.name}</h2>
              <h3>${product.price}</h3>
              {product.stock ? (
                <button
                  className="addto-card"
                  onClick={() => {
                    handelAddtocard(product);
                    openCart();
                  }}
                >
                  + Add
                </button>
              ) : (
                <button className="soldout">Soldout</button>
              )}
            </div>
          );
        })}
      </div>

      {cartOpen && (
        <AddtoCard cartItem={card} closeCard={closeCard} setCart={setCart} />
      )}
    </div>
  );
};
