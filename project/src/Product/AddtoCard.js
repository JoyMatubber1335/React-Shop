import React, { useState, useEffect } from "react";

import "./Cart.css";

export const AddtoCard = ({ cartItem, closeCard, setCart }) => {
  console.log(cartItem);
  console.log(closeCard);
  const [productItem, setProductItem] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let newTotalPrice = 0;
    cartItem.map((item) => {
      newTotalPrice += item.price * item.count;
    });
    setTotalPrice(newTotalPrice);
  }, [cartItem]);

  const handelIncriment = (id) => {
    const items = [...cartItem];
    console.log(items);
    console.log(id);
    items.map((item) => {
      if (item.id === id) {
        item.count++;
        console.log(item.price);
      }
    });
    console.log(items);

    setCart(items);
  };

  const handelDecriment = (id) => {
    const items = [...cartItem];
    console.log(items);
    console.log(id);
    items.map((item) => {
      if (item.id === id && item.count > 1) {
        item.count--;
      }
    });
    console.log(items);
    setCart(items);
  };

  return (
    <div className="cart-drawer">
      <div className="cart-drawer-header">
        <h2>Your Cart</h2>
        <button className="close-cart" onClick={closeCard}>
          Close
        </button>
      </div>
      <ul className="cart-item-list">
        {cartItem.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-details">
              <div>{item.name}</div>
              <div>${item.price * item.count}</div>
              <div>
                <button onClick={() => handelDecriment(item.id)}>-</button>
                {item.count}
                <button onClick={() => handelIncriment(item.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
      <div className="total-price">${totalPrice}</div>
    </div>
  );
};
