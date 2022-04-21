import React, { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./FloatingCart.css";
import cartIcon from "./shopping-cart.svg";

const FloatingCart = () => {
  const { cart } = useSelector((state) => state);

  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    setTotalItems(totalItems);
  }, [cart]);

  return (
    <Link to="/shoppingCart">
      <div className="floating-cart">
        <p>Votre Panier</p>
        <div className="img-notif-container">
          <img src={cartIcon} alt="icon cadi" />
          <span className="notif">{totalItems}</span>
        </div>
      </div>
    </Link>
  );
};

export default memo(FloatingCart);
