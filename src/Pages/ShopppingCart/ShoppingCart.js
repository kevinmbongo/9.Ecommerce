import React from "react";
import { useSelector } from "react-redux";
import "./ShoppingCart.css";

export default function ShoppingCart() {
  const storeState = useSelector((state) => state);

  return (
    <div className="global-container">
      <p className="heading-cart">Votre panier : </p>
      <ul className="cart-list">
        {storeState.cart.map((item) => (
          <li key={item.id}>
            <img
              src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
              alt=""
            />
            <div className="bloc-cart-infos">
              <h4>{item.title}</h4>
              <p>Price:{item.price}€</p>
            </div>
            <div className="bloc-input">
              <label htmlFor="quantityInput">Quantité</label>
              <input id="quantityInput" type="number" value={item.quantity} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
